import { useState } from "react";

const COLORS = {
  navy: "#0F1F3D",
  navyMid: "#1A3260",
  slate: "#2E4172",
  amber: "#F5A623",
  amberLight: "#FFF3D6",
  red: "#D94F3D",
  green: "#2A7D4F",
  lightGray: "#F4F6FA",
  midGray: "#8A97B0",
  text: "#1A1A2E",
  white: "#FFFFFF",
};

const questions = [
  {
    id: "substitution",
    text: "Can you send a substitute to do the work in your place (without the client's approval of that specific person)?",
    hint: "A genuine right of substitution strongly suggests outside IR35.",
    yesLabel: "Yes — I can send someone else",
    noLabel: "No — I must do the work personally",
  },
  {
    id: "control",
    text: "Does the client control how and when you work — e.g. set your hours, tell you exactly how to do tasks?",
    hint: "High client control points toward inside IR35.",
    yesLabel: "Yes — they direct how/when I work",
    noLabel: "No — I decide how to deliver the outcome",
  },
  {
    id: "mutuality",
    text: "Is there an expectation of ongoing work — i.e. the client expects to keep offering work and you're expected to accept it?",
    hint: "Mutuality of obligation is a key inside IR35 indicator.",
    yesLabel: "Yes — there's an ongoing expectation",
    noLabel: "No — each project/contract is discrete",
  },
  {
    id: "equipment",
    text: "Do you use your own equipment and tools to do the work?",
    hint: "Providing your own kit supports outside IR35.",
    yesLabel: "Yes — I use my own equipment",
    noLabel: "No — I use the client's equipment",
  },
  {
    id: "financial_risk",
    text: "Do you bear financial risk — e.g. you'd have to fix mistakes at your own cost, or you could make a loss on the contract?",
    hint: "Real financial risk is an outside IR35 indicator.",
    yesLabel: "Yes — I bear financial risk",
    noLabel: "No — I'm paid regardless of outcome",
  },
  {
    id: "integration",
    text: "Are you integrated into the client's organisation — e.g. on their org chart, using their email, attending internal meetings as staff?",
    hint: "Deep integration suggests inside IR35.",
    yesLabel: "Yes — I'm treated like an employee",
    noLabel: "No — I'm clearly an outside supplier",
  },
  {
    id: "exclusivity",
    text: "Are you prevented from working for other clients at the same time?",
    hint: "Exclusivity points toward employment rather than contracting.",
    yesLabel: "Yes — I can only work for this client",
    noLabel: "No — I can work for multiple clients",
  },
  {
    id: "contract",
    text: "Does your contract accurately reflect your actual working arrangements (not just written to look outside IR35)?",
    hint: "HMRC looks at the reality of the engagement, not just the paperwork.",
    yesLabel: "Yes — contract matches reality",
    noLabel: "No — there's a mismatch",
  },
];

// Scoring: each answer scored as inside/outside IR35
// returns score 0–100 where higher = more likely outside IR35
function scoreAnswers(answers) {
  const outsideSignals = {
    substitution: "yes",
    control: "no",
    mutuality: "no",
    equipment: "yes",
    financial_risk: "yes",
    integration: "no",
    exclusivity: "no",
    contract: "yes",
  };

  let score = 0;
  let answered = 0;
  for (const [id, outsideAnswer] of Object.entries(outsideSignals)) {
    if (answers[id] !== undefined) {
      answered++;
      if (answers[id] === outsideAnswer) score++;
    }
  }
  return answered === 0 ? 0 : Math.round((score / answered) * 100);
}

function getRiskLevel(score) {
  if (score >= 70) return { label: "Likely Outside IR35", color: COLORS.green, risk: "low" };
  if (score >= 40) return { label: "Borderline — Review Needed", color: COLORS.amber, risk: "medium" };
  return { label: "Likely Inside IR35", color: COLORS.red, risk: "high" };
}

export default function IR35Checker() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState("");
  const [currentQ, setCurrentQ] = useState(0);

  const answered = Object.keys(answers).length;
  const score = scoreAnswers(answers);
  const progress = (answered / questions.length) * 100;
  const { label, color, risk } = getRiskLevel(score);

  const handleAnswer = (questionId, value) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);
    if (currentQ < questions.length - 1) {
      setTimeout(() => setCurrentQ(currentQ + 1), 300);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setSubmitted(true);

    const summaryLines = questions.map((q) => {
      const ans = answers[q.id];
      return `- ${q.text}\n  Answer: ${ans === "yes" ? q.yesLabel : ans === "no" ? q.noLabel : "Not answered"}`;
    });

    const prompt = `You are a UK IR35 tax status expert. A contractor has answered the following questions about their engagement. Analyse their situation and provide:

1. A clear verdict (Inside IR35 / Outside IR35 / Borderline)
2. The 2-3 strongest factors pointing toward or away from IR35
3. Key risks they should be aware of
4. One specific practical recommendation

Keep the response concise and professional. Use plain English — avoid legal jargon. Format with clear headings.

Contractor's answers:
${summaryLines.join("\n")}

Overall risk score: ${score}/100 (higher = more likely outside IR35)`;

    try {
      const response = await fetch("/api/analyze", {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          messages: [{ role: "user", content: prompt }],
        }),
      });
      const data = await response.json();
      const text = data.content?.map((c) => c.text || "").join("\n") || "Unable to generate analysis.";
      setAiAnalysis(text);
    } catch {
      setAiAnalysis("Unable to connect to analysis engine. Please try again.");
    }
    setLoading(false);
  };

  const reset = () => {
    setAnswers({});
    setSubmitted(false);
    setAiAnalysis("");
    setCurrentQ(0);
    setLoading(false);
  };

  const q = questions[currentQ];

  return (
    <div style={{ minHeight: "100vh", background: COLORS.lightGray, fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Header */}
      <div style={{ background: COLORS.navy, padding: "0" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "20px 24px", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: COLORS.amber, display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 800, fontSize: 16, color: COLORS.navy, flexShrink: 0
          }}>IR</div>
          <div>
            <div style={{ color: COLORS.white, fontWeight: 700, fontSize: 16, letterSpacing: "-0.2px" }}>IR35 Status Checker</div>
            <div style={{ color: COLORS.midGray, fontSize: 12 }}>Free contractor assessment tool</div>
          </div>
          <div style={{ marginLeft: "auto", fontSize: 11, color: COLORS.midGray, textAlign: "right" }}>
            Not legal advice.<br />Consult a tax specialist.
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 24px" }}>

        {!submitted ? (
          <>
            {/* Risk meter */}
            <div style={{
              background: COLORS.white, borderRadius: 16, padding: "24px",
              marginBottom: 24, boxShadow: "0 1px 4px rgba(0,0,0,0.07)"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 12 }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: COLORS.midGray, textTransform: "uppercase", letterSpacing: 1 }}>IR35 Risk Indicator</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: answered > 0 ? color : COLORS.midGray, fontFamily: "monospace", marginTop: 2 }}>
                    {answered > 0 ? label : "Answer questions below"}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 28, fontWeight: 900, color: answered > 0 ? color : COLORS.midGray, fontFamily: "monospace" }}>
                    {answered > 0 ? `${score}` : "--"}
                  </div>
                  <div style={{ fontSize: 11, color: COLORS.midGray }}>/ 100</div>
                </div>
              </div>

              {/* Progress bar */}
              <div style={{ background: COLORS.lightGray, borderRadius: 99, height: 8, overflow: "hidden" }}>
                <div style={{
                  height: "100%", borderRadius: 99,
                  width: `${answered > 0 ? score : 0}%`,
                  background: answered > 0 ? color : COLORS.midGray,
                  transition: "all 0.5s ease"
                }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
                <span style={{ fontSize: 10, color: COLORS.red, fontWeight: 600 }}>Inside IR35</span>
                <span style={{ fontSize: 10, color: COLORS.midGray }}>{answered}/{questions.length} answered</span>
                <span style={{ fontSize: 10, color: COLORS.green, fontWeight: 600 }}>Outside IR35</span>
              </div>
            </div>

            {/* Question card */}
            <div style={{
              background: COLORS.white, borderRadius: 16, padding: "28px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.07)", marginBottom: 16
            }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: COLORS.amber, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>
                Question {currentQ + 1} of {questions.length}
              </div>
              <div style={{ fontSize: 18, fontWeight: 700, color: COLORS.text, lineHeight: 1.4, marginBottom: 8 }}>
                {q.text}
              </div>
              <div style={{ fontSize: 13, color: COLORS.midGray, marginBottom: 24, fontStyle: "italic" }}>
                {q.hint}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {["yes", "no"].map((val) => {
                  const isSelected = answers[q.id] === val;
                  const btnLabel = val === "yes" ? q.yesLabel : q.noLabel;
                  return (
                    <button
                      key={val}
                      onClick={() => handleAnswer(q.id, val)}
                      style={{
                        padding: "14px 20px", borderRadius: 10, border: `2px solid`,
                        borderColor: isSelected ? COLORS.navy : "#DDE3F0",
                        background: isSelected ? COLORS.navy : COLORS.white,
                        color: isSelected ? COLORS.white : COLORS.text,
                        fontSize: 14, fontWeight: 600, cursor: "pointer",
                        textAlign: "left", transition: "all 0.15s ease",
                        fontFamily: "inherit"
                      }}
                    >
                      {btnLabel}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigation */}
            <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
              <button
                onClick={() => setCurrentQ(Math.max(0, currentQ - 1))}
                disabled={currentQ === 0}
                style={{
                  padding: "10px 20px", borderRadius: 8, border: "2px solid #DDE3F0",
                  background: COLORS.white, color: currentQ === 0 ? COLORS.midGray : COLORS.text,
                  fontSize: 14, fontWeight: 600, cursor: currentQ === 0 ? "default" : "pointer",
                  fontFamily: "inherit"
                }}
              >← Back</button>

              <button
                onClick={() => setCurrentQ(Math.min(questions.length - 1, currentQ + 1))}
                disabled={currentQ === questions.length - 1}
                style={{
                  padding: "10px 20px", borderRadius: 8, border: "2px solid #DDE3F0",
                  background: COLORS.white, color: currentQ === questions.length - 1 ? COLORS.midGray : COLORS.text,
                  fontSize: 14, fontWeight: 600, cursor: currentQ === questions.length - 1 ? "default" : "pointer",
                  fontFamily: "inherit"
                }}
              >Next →</button>

              {answered >= 6 && (
                <button
                  onClick={handleSubmit}
                  style={{
                    marginLeft: "auto", padding: "10px 24px", borderRadius: 8,
                    border: "none", background: COLORS.amber,
                    color: COLORS.navy, fontSize: 14, fontWeight: 700,
                    cursor: "pointer", fontFamily: "inherit"
                  }}
                >
                  Get Full Analysis →
                </button>
              )}
            </div>

            {/* Question dots */}
            <div style={{ display: "flex", gap: 6, justifyContent: "center", flexWrap: "wrap" }}>
              {questions.map((sq, i) => (
                <button
                  key={sq.id}
                  onClick={() => setCurrentQ(i)}
                  style={{
                    width: 28, height: 28, borderRadius: "50%", border: "none",
                    background: i === currentQ ? COLORS.navy : answers[sq.id] ? COLORS.amber : "#DDE3F0",
                    color: i === currentQ ? COLORS.white : answers[sq.id] ? COLORS.navy : COLORS.midGray,
                    fontSize: 11, fontWeight: 700, cursor: "pointer", fontFamily: "inherit"
                  }}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </>
        ) : (
          /* Results panel */
          <div>
            {/* Verdict card */}
            <div style={{
              background: COLORS.navy, borderRadius: 16, padding: "28px",
              marginBottom: 20, boxShadow: "0 4px 16px rgba(15,31,61,0.2)"
            }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: COLORS.midGray, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>
                Assessment Result
              </div>
              <div style={{ fontSize: 26, fontWeight: 900, color: color, fontFamily: "monospace", marginBottom: 4 }}>
                {label}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 16 }}>
                <div style={{ flex: 1, background: "rgba(255,255,255,0.1)", borderRadius: 99, height: 8 }}>
                  <div style={{ height: "100%", borderRadius: 99, width: `${score}%`, background: color, transition: "all 0.5s" }} />
                </div>
                <div style={{ fontSize: 32, fontWeight: 900, color: color, fontFamily: "monospace", minWidth: 60, textAlign: "right" }}>
                  {score}<span style={{ fontSize: 16, color: COLORS.midGray }}>/100</span>
                </div>
              </div>
            </div>

            {/* AI Analysis */}
            <div style={{
              background: COLORS.white, borderRadius: 16, padding: "28px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.07)", marginBottom: 20
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.navy, marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ background: COLORS.amberLight, color: COLORS.amber, padding: "2px 8px", borderRadius: 4, fontSize: 11 }}>AI ANALYSIS</span>
                Expert Assessment
              </div>

              {loading ? (
                <div style={{ textAlign: "center", padding: "40px 0", color: COLORS.midGray }}>
                  <div style={{ fontSize: 28, marginBottom: 12 }}>⚙️</div>
                  <div style={{ fontSize: 14 }}>Analysing your IR35 status...</div>
                </div>
              ) : (
                <div style={{ fontSize: 14, color: COLORS.text, lineHeight: 1.7 }}>
  {aiAnalysis.split('\n').map((line, i) => {
    if (line.startsWith('## ')) return <h3 key={i} style={{ fontSize: 16, fontWeight: 700, color: COLORS.navy, margin: '16px 0 8px' }}>{line.replace('## ', '')}</h3>;
    if (line.startsWith('**') && line.endsWith('**')) return <p key={i} style={{ fontWeight: 700, margin: '4px 0' }}>{line.replace(/\*\*/g, '')}</p>;
    if (line === '---') return <hr key={i} style={{ border: 'none', borderTop: '1px solid #EEF0F6', margin: '12px 0' }} />;
    const parts = line.split(/\*\*(.*?)\*\*/g);
    return <p key={i} style={{ margin: '4px 0' }}>{parts.map((part, j) => j % 2 === 1 ? <strong key={j}>{part}</strong> : part)}</p>;
  })}
</div>
              )}
            </div>

            {/* Disclaimer */}
            <div style={{
              background: COLORS.amberLight, borderRadius: 12, padding: "16px 20px",
              marginBottom: 20, borderLeft: `4px solid ${COLORS.amber}`
            }}>
              <div style={{ fontSize: 12, color: "#7A5200", lineHeight: 1.6 }}>
                <strong>Important:</strong> This tool provides a general indication only and does not constitute legal or tax advice. IR35 determinations are complex and fact-specific. Always consult a qualified IR35 specialist or tax adviser before making decisions about your contract status.
              </div>
            </div>

            {/* Answers summary */}
            <div style={{ background: COLORS.white, borderRadius: 16, padding: "24px", boxShadow: "0 1px 4px rgba(0,0,0,0.07)", marginBottom: 20 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.navy, marginBottom: 16 }}>Your Answers</div>
              {questions.map((sq) => {
                const ans = answers[sq.id];
                const outsideAnswers = { substitution: "yes", control: "no", mutuality: "no", equipment: "yes", financial_risk: "yes", integration: "no", exclusivity: "no", contract: "yes" };
                const isGood = ans === outsideAnswers[sq.id];
                return (
                  <div key={sq.id} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 0", borderBottom: "1px solid #EEF0F6" }}>
                    <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>{isGood ? "✅" : "⚠️"}</span>
                    <div>
                      <div style={{ fontSize: 13, color: COLORS.text, fontWeight: 500 }}>{sq.text}</div>
                      <div style={{ fontSize: 12, color: COLORS.midGray, marginTop: 2 }}>
                        {ans === "yes" ? sq.yesLabel : sq.noLabel}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={reset}
              style={{
                width: "100%", padding: "14px", borderRadius: 10, border: `2px solid ${COLORS.navy}`,
                background: COLORS.white, color: COLORS.navy, fontSize: 15, fontWeight: 700,
                cursor: "pointer", fontFamily: "inherit"
              }}
            >
              Start New Assessment
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
