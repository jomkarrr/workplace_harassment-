export default function Faq() {
  return (
    <section id="faq"><div className="wrap">
      <div className="sec-head" style={{ textAlign: "center", margin: "0 auto" }}><div className="kicker">Common questions</div><h2>FAQs, answered honestly</h2></div>
      <div className="faq">
        <details><summary>What's the difference between harassment and just a bad manager?</summary><div className="a">Firm feedback about your work — even blunt feedback — is management. It becomes harassment when it targets <i>you</i> rather than your work: personal insults, humiliation in front of others, threats, discrimination, or a repeated pattern meant to break you down rather than improve output.</div></details>
        <details><summary>Can one incident be harassment, or must it repeat?</summary><div className="a">Both. Repeated lower-level behaviour creates a “hostile work environment.” A single severe act — a sexual demand, physical assault, a threat — qualifies on its own. You never have to “wait for it to happen again” before reporting.</div></details>
        <details><summary>I complained and nothing happened. Now what?</summary><div className="a">Escalate in writing: to senior HR, the IC's external member, or leadership. In India, you can approach the Local Committee or file on the SHe-Box portal; serious cases can go to the police (112). Keep your documentation — timelines and unanswered emails are evidence too.</div></details>
        <details><summary>What if the harasser is my boss — or the owner?</summary><div className="a">That's exactly why multiple channels exist. Skip the chain: go directly to HR, the Internal Committee (which includes an external, independent member), an anonymous ethics line, or an external authority. Power is precisely what the system is designed to bypass.</div></details>
        <details><summary>Will my identity stay confidential?</summary><div className="a">Under the POSH Act, the identity of the complainant, respondent, and witnesses cannot be published or disclosed — breaching it is punishable. Share details only through official channels, and ask the IC to confirm confidentiality at your first meeting.</div></details>
        <details><summary>I'm an intern / on probation / a fresher. Am I protected?</summary><div className="a">Yes — fully. The POSH Act covers interns, trainees, contract and temporary staff. Your employment type changes nothing about your right to a safe workplace.</div></details>
      </div>

      <div className="pledge"><p>“I will treat every colleague with dignity, speak up when something feels wrong, and help build a workplace where everyone can do their best work — free from fear.”</p><p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "14px", color: "var(--muted)", marginTop: "12px" }}>The everyday pledge behind every harassment-free workplace.</p></div>
    </div></section>
  );
}
