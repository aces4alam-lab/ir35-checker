const COLORS = {
  navy: "#0F1F3D",
  navyMid: "#1A3260",
  amber: "#F5A623",
  amberLight: "#FFF3D6",
  red: "#D94F3D",
  green: "#2A7D4F",
  lightGray: "#F4F6FA",
  midGray: "#8A97B0",
  text: "#1A1A2E",
  white: "#FFFFFF",
};

const articles = [
  {
    id: "what-is-ir35",
    title: "What is IR35? A plain English guide for contractors",
    summary: "IR35 is one of the most misunderstood pieces of UK tax legislation. Here's what it actually means for you as a contractor.",
    readTime: "5 min read",
    date: "August 2025",
    tag: "Basics",
  },
  {
    id: "inside-vs-outside-ir35",
    title: "Inside vs Outside IR35 — what's the difference?",
    summary: "Your IR35 status determines how you're taxed. Getting it wrong can cost thousands. Here's how to tell which side of the line you're on.",
    readTime: "6 min read",
    date: "August 2025",
    tag: "Status",
  },
  {
    id: "ir35-changes-2025",
    title: "IR35 in 2025 — what contractors need to know",
    summary: "The off-payroll working rules have evolved significantly. Here's the current state of play and what it means for your contracts.",
    readTime: "5 min read",
    date: "August 2025",
    tag: "Updates",
  },
  {
    id: "hmrc-ir35-investigations",
    title: "How HMRC investigates IR35 — what to expect",
    summary: "HMRC IR35 investigations are increasing. Here's what triggers them, how they work, and how to protect yourself.",
    readTime: "7 min read",
    date: "August 2025",
    tag: "HMRC",
  },
];

const articleContent = {
  "what-is-ir35": {
    title: "What is IR35? A plain English guide for contractors",
    date: "August 2025",
    readTime: "5 min read",
    content: [
      {
        type: "intro",
        text: "IR35 is a piece of UK tax legislation designed to tackle 'disguised employment' — where someone works essentially as an employee but is paid through a limited company to reduce their tax bill. Introduced in 2000, it remains one of the most debated and misunderstood rules in the contractor world.",
      },
      {
        type: "heading",
        text: "Where the name comes from",
      },
      {
        type: "paragraph",
        text: "IR35 takes its name from the Inland Revenue (now HMRC) press release number 35, which announced the legislation back in 1999. It officially sits within Chapter 8 of the Income Tax (Earnings and Pensions) Act 2003, but the IR35 name has stuck.",
      },
      {
        type: "heading",
        text: "Why HMRC introduced it",
      },
      {
        type: "paragraph",
        text: "The problem HMRC was trying to solve was simple: if two people do identical work for the same company, they should pay broadly similar amounts of tax. But in the 1990s, it became common for workers to set up limited companies, invoice their clients, and take income as dividends — paying far less National Insurance and sometimes less income tax than a direct employee doing the same job.",
      },
      {
        type: "paragraph",
        text: "IR35 says: if the reality of your working arrangement looks like employment, you should be taxed like an employee — regardless of the company structure you use.",
      },
      {
        type: "heading",
        text: "Who does IR35 apply to?",
      },
      {
        type: "paragraph",
        text: "IR35 applies to contractors and freelancers who provide services to clients through an intermediary — typically their own limited company or a personal service company (PSC). If you work through an umbrella company, you're already taxed as an employee and IR35 doesn't apply to you.",
      },
      {
        type: "heading",
        text: "Inside vs outside IR35",
      },
      {
        type: "paragraph",
        text: "If you're deemed to be 'inside IR35', HMRC views you as a disguised employee. Your income from that contract must be taxed as if it were employment income — meaning income tax and National Insurance are deducted before you receive it. You lose the tax advantages of operating through a limited company.",
      },
      {
        type: "paragraph",
        text: "If you're 'outside IR35', HMRC accepts that you're genuinely self-employed. You can continue to pay yourself through a mix of salary and dividends, keeping more of what you earn.",
      },
      {
        type: "heading",
        text: "Who decides your IR35 status?",
      },
      {
        type: "paragraph",
        text: "Since April 2021, for medium and large private sector clients, the client (the end-user of your services) is responsible for determining your IR35 status. They must provide you with a Status Determination Statement (SDS) explaining their decision. For small companies, the responsibility still sits with the contractor.",
      },
      {
        type: "paragraph",
        text: "In the public sector, the client has been responsible for IR35 determinations since 2017.",
      },
      {
        type: "heading",
        text: "What if you disagree with the determination?",
      },
      {
        type: "paragraph",
        text: "You have the right to challenge your client's IR35 determination through their formal disagreement process. They must respond within 45 days and either maintain or change their decision with reasons. If you believe you're genuinely outside IR35, document everything and consider seeking professional advice.",
      },
      {
        type: "cta",
        text: "Not sure about your IR35 status? Use our free AI-powered checker to get an instant assessment.",
      },
    ],
  },
  "inside-vs-outside-ir35": {
    title: "Inside vs Outside IR35 — what's the difference?",
    date: "August 2025",
    readTime: "6 min read",
    content: [
      {
        type: "intro",
        text: "Your IR35 status is one of the most important financial questions you'll face as a contractor. The difference between inside and outside IR35 can mean thousands of pounds a year. Here's what you need to know.",
      },
      {
        type: "heading",
        text: "The three key tests",
      },
      {
        type: "paragraph",
        text: "HMRC and tribunals look at three primary factors when assessing IR35 status. No single factor is decisive — it's the overall picture that counts.",
      },
      {
        type: "subheading",
        text: "1. Substitution",
      },
      {
        type: "paragraph",
        text: "Can you send someone else to do the work in your place without the client's approval of that specific person? A genuine right of substitution is one of the strongest outside IR35 indicators. It shows you're providing a service, not filling a role. If your contract says you can substitute but in practice you never could, HMRC will look at the reality rather than the paperwork.",
      },
      {
        type: "subheading",
        text: "2. Control",
      },
      {
        type: "paragraph",
        text: "Does the client control how, when, and where you work? Employees are told what to do and how to do it. Contractors are given an outcome to deliver and decide the method themselves. If your client sets your hours, dictates your working methods, and manages your day-to-day tasks, that points toward inside IR35.",
      },
      {
        type: "subheading",
        text: "3. Mutuality of obligation",
      },
      {
        type: "paragraph",
        text: "Is there an expectation that the client will keep offering work and you'll keep accepting it? Employees expect ongoing work — that's the nature of employment. True contractors work on discrete projects with no expectation of continuity. If your contract rolls over automatically and you've worked with the same client for years without a genuine break, that suggests employment.",
      },
      {
        type: "heading",
        text: "Other factors HMRC considers",
      },
      {
        type: "paragraph",
        text: "Beyond the three key tests, HMRC also looks at financial risk (do you bear the cost of fixing mistakes?), equipment (do you use your own tools?), integration (are you part of the client's team structure?), and exclusivity (can you work for other clients at the same time?).",
      },
      {
        type: "heading",
        text: "What outside IR35 means in practice",
      },
      {
        type: "paragraph",
        text: "Outside IR35 means HMRC accepts you're genuinely self-employed. You operate through your limited company, invoice your client, and pay yourself through a combination of salary and dividends. The tax advantages are significant — dividend income is taxed more favourably than employment income and doesn't attract National Insurance.",
      },
      {
        type: "heading",
        text: "What inside IR35 means in practice",
      },
      {
        type: "paragraph",
        text: "Inside IR35 means your income from that contract is treated as employment income. The fee-payer (usually your agency or the client) must deduct income tax and National Insurance before paying you. You're left with roughly what an employee would take home — but without employee benefits like sick pay, holiday pay, or pension contributions.",
      },
      {
        type: "heading",
        text: "The financial impact",
      },
      {
        type: "paragraph",
        text: "The difference can be substantial. A contractor earning £500 per day outside IR35 might take home around £70,000 a year after tax. The same contractor inside IR35 could take home £55,000 or less — a difference of £15,000 or more annually.",
      },
      {
        type: "cta",
        text: "Use our free IR35 checker to assess your current contract in minutes.",
      },
    ],
  },
  "ir35-changes-2025": {
    title: "IR35 in 2025 — what contractors need to know",
    date: "August 2025",
    readTime: "5 min read",
    content: [
      {
        type: "intro",
        text: "The IR35 landscape has changed dramatically since 2017. Here's the current state of play and what matters most for contractors operating today.",
      },
      {
        type: "heading",
        text: "Where we are now",
      },
      {
        type: "paragraph",
        text: "The off-payroll working rules (Chapter 10 ITEPA 2003) are now fully embedded across both public and private sectors. Since April 2021, medium and large private sector organisations have been responsible for determining the IR35 status of contractors they engage. This shifted the burden from contractors to clients — a seismic change for the industry.",
      },
      {
        type: "heading",
        text: "What changed in the private sector",
      },
      {
        type: "paragraph",
        text: "Before April 2021, private sector contractors were responsible for their own IR35 status. Many took a pragmatic view of the rules. Since the reform, clients must issue a Status Determination Statement (SDS) for every contractor engagement, and the fee-payer in the supply chain is responsible for operating PAYE if the role is deemed inside IR35.",
      },
      {
        type: "paragraph",
        text: "The practical effect has been significant. Many large organisations implemented blanket inside-IR35 policies to avoid risk, pushing contractors either into umbrella companies or off their books entirely. This has gradually softened as clients have become more comfortable with the rules.",
      },
      {
        type: "heading",
        text: "Small company exemption",
      },
      {
        type: "paragraph",
        text: "If your client is a small company — defined as meeting two of three criteria (fewer than 50 employees, turnover under £10.2m, balance sheet under £5.1m) — the old rules still apply. You as the contractor are responsible for your own IR35 assessment. This exemption covers a significant portion of the UK business market.",
      },
      {
        type: "heading",
        text: "HMRC's enforcement focus",
      },
      {
        type: "paragraph",
        text: "HMRC has increased its compliance activity in recent years, with a particular focus on the public sector and large private sector organisations. Investigations can look back up to 6 years, and penalties for non-compliance can be substantial. Both clients and contractors have faced significant tax bills following investigations.",
      },
      {
        type: "heading",
        text: "What contractors should be doing",
      },
      {
        type: "paragraph",
        text: "First, understand your status. If you're working for a medium or large client, they should have issued you an SDS. If they haven't, ask for one — it's a legal requirement. If you're working for a small company, conduct your own assessment carefully.",
      },
      {
        type: "paragraph",
        text: "Second, make sure your contract reflects reality. Contracts that claim outside IR35 protections that don't exist in practice are a red flag for HMRC. The paperwork and the working arrangement need to align.",
      },
      {
        type: "paragraph",
        text: "Third, consider IR35 insurance if you're outside IR35. An HMRC investigation is stressful and expensive even if you're ultimately found to be compliant. Insurance covers your legal costs and any tax liability.",
      },
      {
        type: "cta",
        text: "Check your IR35 status now with our free AI-powered assessment tool.",
      },
    ],
  },
  "hmrc-ir35-investigations": {
    title: "How HMRC investigates IR35 — what to expect",
    date: "August 2025",
    readTime: "7 min read",
    content: [
      {
        type: "intro",
        text: "An HMRC IR35 investigation is one of the most stressful things a contractor can face. Understanding how they work — and how to protect yourself — is essential for anyone operating outside IR35.",
      },
      {
        type: "heading",
        text: "What triggers an IR35 investigation",
      },
      {
        type: "paragraph",
        text: "HMRC uses a risk-based approach to select investigations. Common triggers include long-term relationships with a single client (particularly if the contract keeps rolling), contractors who move from employment to contracting with the same organisation, inconsistencies between your tax returns and what clients report to HMRC, and tip-offs from disgruntled colleagues or clients.",
      },
      {
        type: "paragraph",
        text: "HMRC's Connect system analyses data from multiple sources — Companies House, Land Registry, social media, and PAYE records — to identify contractors whose arrangements look like employment.",
      },
      {
        type: "heading",
        text: "How an investigation starts",
      },
      {
        type: "paragraph",
        text: "You'll receive a letter from HMRC's Employment Status team stating they want to review your IR35 position. This is not an accusation — it's an opening for enquiry. However, it should be taken seriously from day one.",
      },
      {
        type: "paragraph",
        text: "HMRC will typically request information about your working arrangements: your contracts, any substitution that has taken place, evidence of financial risk, details of other clients, and your day-to-day working practices.",
      },
      {
        type: "heading",
        text: "What HMRC looks at",
      },
      {
        type: "paragraph",
        text: "Investigators don't just read your contract — they look at the reality of how you work. They may speak to your client's HR department, review your LinkedIn profile (which might show you listed as an employee), and examine whether your contract terms are actually observed in practice.",
      },
      {
        type: "paragraph",
        text: "Common red flags include: being listed on the client's internal phone directory or org chart, having a client email address, working regular 9-to-5 hours at the client's premises, never having exercised the right to substitute, and being unable to take on other clients due to workload or client restrictions.",
      },
      {
        type: "heading",
        text: "How long investigations take",
      },
      {
        type: "paragraph",
        text: "IR35 investigations are notoriously slow. Simple cases can take 12-18 months. Complex cases involving multiple years and large sums can take several years. During this time, you need professional representation — and that costs money even if you're ultimately found to be outside IR35.",
      },
      {
        type: "heading",
        text: "The financial consequences",
      },
      {
        type: "paragraph",
        text: "If HMRC determines you were inside IR35, they'll calculate the additional tax and National Insurance you should have paid, plus interest. Penalties can be added on top, ranging from 30% to 100% of the unpaid tax depending on whether HMRC considers the error careless or deliberate. HMRC can investigate up to 6 years back, so the sums involved can be very large.",
      },
      {
        type: "heading",
        text: "How to protect yourself",
      },
      {
        type: "paragraph",
        text: "The best protection is a genuinely outside IR35 working arrangement — not just a contract that says the right things, but a day-to-day reality that matches. Keep records of any substitutions, document your business development activity with other clients, and ensure your contract is reviewed by an IR35 specialist.",
      },
      {
        type: "paragraph",
        text: "IR35 insurance is also worth serious consideration. Policies typically cover your legal and accountancy costs during an investigation, and any additional tax liability if you're found to be inside IR35. Given how expensive investigations can be, the premium is often modest by comparison.",
      },
      {
        type: "cta",
        text: "Check your IR35 risk level now — and explore insurance options if you're outside IR35.",
      },
    ],
  },
};

function ArticleCard({ article, onRead }) {
  const tagColors = {
    Basics: { bg: "#EEF4FF", text: "#3B6FE8" },
    Status: { bg: "#FFF3D6", text: "#B87A00" },
    Updates: { bg: "#EDFAF3", text: "#2A7D4F" },
    HMRC: { bg: "#FDECEA", text: "#C0392B" },
  };
  const tag = tagColors[article.tag] || { bg: COLORS.lightGray, text: COLORS.midGray };

  return (
    <div
      onClick={() => onRead(article.id)}
      style={{
        background: COLORS.white, borderRadius: 16, padding: "24px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.07)", cursor: "pointer",
        borderLeft: `4px solid ${COLORS.amber}`, transition: "transform 0.15s ease, box-shadow 0.15s ease",
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.1)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.07)"; }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <span style={{
          fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 4,
          background: tag.bg, color: tag.text
        }}>{article.tag}</span>
        <span style={{ fontSize: 11, color: COLORS.midGray }}>{article.readTime}</span>
        <span style={{ fontSize: 11, color: COLORS.midGray }}>·</span>
        <span style={{ fontSize: 11, color: COLORS.midGray }}>{article.date}</span>
      </div>
      <div style={{ fontSize: 17, fontWeight: 700, color: COLORS.text, lineHeight: 1.3, marginBottom: 10 }}>
        {article.title}
      </div>
      <div style={{ fontSize: 14, color: COLORS.midGray, lineHeight: 1.6, marginBottom: 16 }}>
        {article.summary}
      </div>
      <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.amber }}>
        Read article →
      </div>
    </div>
  );
}

function ArticlePage({ articleId, onBack, onStartChecker }) {
  const article = articleContent[articleId];
  if (!article) return null;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 24px" }}>
      <button
        onClick={onBack}
        style={{
          background: "none", border: "none", color: COLORS.amber,
          fontSize: 14, fontWeight: 600, cursor: "pointer", marginBottom: 24,
          padding: 0, fontFamily: "inherit"
        }}
      >← Back to articles</button>

      <div style={{ marginBottom: 8, display: "flex", gap: 12, alignItems: "center" }}>
        <span style={{ fontSize: 12, color: COLORS.midGray }}>{article.date}</span>
        <span style={{ fontSize: 12, color: COLORS.midGray }}>·</span>
        <span style={{ fontSize: 12, color: COLORS.midGray }}>{article.readTime}</span>
      </div>

      <h1 style={{ fontSize: 28, fontWeight: 900, color: COLORS.text, lineHeight: 1.2, marginBottom: 32, fontFamily: "inherit" }}>
        {article.title}
      </h1>

      {article.content.map((block, i) => {
        if (block.type === "intro") return (
          <p key={i} style={{ fontSize: 17, color: COLORS.text, lineHeight: 1.8, marginBottom: 24, fontWeight: 500, borderLeft: `3px solid ${COLORS.amber}`, paddingLeft: 16 }}>
            {block.text}
          </p>
        );
        if (block.type === "heading") return (
          <h2 key={i} style={{ fontSize: 20, fontWeight: 800, color: COLORS.navy, marginTop: 32, marginBottom: 12, fontFamily: "inherit" }}>
            {block.text}
          </h2>
        );
        if (block.type === "subheading") return (
          <h3 key={i} style={{ fontSize: 16, fontWeight: 700, color: COLORS.text, marginTop: 20, marginBottom: 8, fontFamily: "inherit" }}>
            {block.text}
          </h3>
        );
        if (block.type === "paragraph") return (
          <p key={i} style={{ fontSize: 15, color: COLORS.text, lineHeight: 1.8, marginBottom: 16 }}>
            {block.text}
          </p>
        );
        if (block.type === "cta") return (
          <div key={i} style={{
            background: COLORS.navy, borderRadius: 12, padding: "20px 24px",
            marginTop: 32, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12
          }}>
            <p style={{ fontSize: 14, color: COLORS.white, margin: 0, flex: 1 }}>{block.text}</p>
            <button
              onClick={onStartChecker}
              style={{
                background: COLORS.amber, color: COLORS.navy, border: "none",
                padding: "10px 20px", borderRadius: 8, fontSize: 13, fontWeight: 700,
                cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap"
              }}
            >Check my IR35 status →</button>
          </div>
        );
        return null;
      })}
    </div>
  );
}

export default function Articles({ onStartChecker }) {
  const [currentArticle, setCurrentArticle] = React.useState(null);

  if (currentArticle) {
    return (
      <ArticlePage
        articleId={currentArticle}
        onBack={() => setCurrentArticle(null)}
        onStartChecker={onStartChecker}
      />
    );
  }

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 24px" }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: COLORS.amber, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>
          IR35 Resources
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 900, color: COLORS.text, lineHeight: 1.2, marginBottom: 12, fontFamily: "inherit" }}>
          IR35 Guides for Contractors
        </h1>
        <p style={{ fontSize: 15, color: COLORS.midGray, lineHeight: 1.6 }}>
          Plain English guides to help you understand IR35, protect your income, and stay on the right side of HMRC.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} onRead={setCurrentArticle} />
        ))}
      </div>
    </div>
  );
}
