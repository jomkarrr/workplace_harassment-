export default function Law() {
  return (
    <section className="soft has-bg" id="law"><div className="wrap">
      <div className="sec-head">
        <div className="kicker">Know your rights</div>
        <h2>The law: India &amp; the world</h2>
        <p>Harassment isn't just “against policy” — in most countries it's against the law, and employers have a legal duty to prevent it.</p>
      </div>
      <div className="law-grid">
        <div className="law-main">
          <h3>🇮🇳 India — The POSH Act, 2013</h3>
          <p>The <b>Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013</b> — born from the Supreme Court's Vishaka Guidelines (1997) — protects women at every workplace, including interns, contract staff, and domestic workers.</p>
          <ul>
            <li><b>Internal Committee (IC)</b> mandatory in workplaces with 10+ employees; Local Committee at district level for smaller ones.</li>
            <li>Complaint within <b>3 months</b> of the incident (extendable by 3 more); inquiry to finish within <b>90 days</b>.</li>
            <li>Strict <b>confidentiality</b>; interim relief (transfer, leave up to 3 months) available during inquiry.</li>
            <li>Employer non-compliance: fine up to <b>₹50,000</b>, repeat offences can cost the business licence.</li>
            <li>Complaints can also be filed on the government's <b>SHe-Box</b> online portal.</li>
          </ul>
          <p style={{ fontSize: "14px" }}>Note: POSH specifically covers women. Men and other employees are protected through company policy, the Indian Penal Code / BNS provisions, and service rules — a good employer policy covers everyone.</p>
        </div>
        <div className="law-side">
          <div className="law-card"><h3>Global frameworks</h3><p><b>USA:</b> Title VII of the Civil Rights Act (1964) via the EEOC. <b>ILO Convention 190 (2019):</b> the first global treaty on violence &amp; harassment at work. <b>UK:</b> Equality Act 2010 + a 2024 duty on employers to actively prevent sexual harassment. <b>EU:</b> framework directives on equal treatment.</p></div>
          <div className="law-card"><h3>What “zero tolerance” really means</h3><p>Not “instant firing for everything” — it means <b>no complaint is ignored</b>, every report is investigated fairly, and consequences are proportionate and consistent, whoever the person is. Due process for the accused is part of a fair system, not a loophole.</p></div>
          <div className="law-card"><h3>For students &amp; campus</h3><p>UGC regulations require universities to run an Internal Complaints Committee too — the same principles protect students and interns during placements, projects, and part-time work.</p></div>
        </div>
      </div>

      <div className="myths">
        <div className="myth"><div className="m-label">Myth</div><p>“It only counts if it happens inside the office building.”</p><div className="f-label">Fact</div><p className="fact">Work trips, parties, client sites, chats, and remote calls are all legally part of the workplace.</p></div>
        <div className="myth"><div className="m-label">Myth</div><p>“If they didn't say ‘no’ loudly, it must have been okay.”</p><div className="f-label">Fact</div><p className="fact">Freezing, laughing nervously, or staying silent under a power gap is not consent. “Unwelcome” is judged from the receiver's side.</p></div>
        <div className="myth"><div className="m-label">Myth</div><p>“A complaint will ruin my career — better to stay quiet.”</p><div className="f-label">Fact</div><p className="fact">Retaliation is itself punishable, complaints are confidential, and documented early reporting protects you far more than silence does.</p></div>
        <div className="myth"><div className="m-label">Myth</div><p>“Only women face harassment; men should just take it.”</p><div className="f-label">Fact</div><p className="fact">Anyone of any gender can be harassed — and everyone deserves the same protection and the same belief when they speak up.</p></div>
      </div>
    </div></section>
  );
}
