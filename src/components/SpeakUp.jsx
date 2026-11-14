import { useState } from "react";
import { scenarios } from "../data/scenarios";
export default function SpeakUp() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [feedback, setFeedback] = useState(null);

  const answerScenario = (value) => {
    const s = scenarios[scenarioIndex];
    setFeedback({ correct: value === s.a, s });
  };

  const nextScenario = () => {
    setScenarioIndex((scenarioIndex + 1) % scenarios.length);
    setFeedback(null);
  };

  return (
    <section className="soft has-bg" id="act"><div className="wrap">
      <div className="sec-head">
        <div className="kicker">If it happens to you — or near you</div>
        <h2>Speak up: a step-by-step guide</h2>
        <p>You don't need to be “sure” it's harassment to ask for help. If behaviour feels wrong, that's enough to start step 1.</p>
      </div>

      <div className="steps">
        <div className="step"><div className="n">1</div><h3>Recognise &amp; trust yourself</h3><p>Name it honestly. Discomfort, dread before meetings, or avoiding a person are valid signals — not overreactions.</p></div>
        <div className="step"><div className="n">2</div><h3>Document everything</h3><p>Dates, times, places, exact words, witnesses, screenshots. Keep copies outside work systems (personal email/drive).</p></div>
        <div className="step"><div className="n">3</div><h3>Say no — if you feel safe</h3><p>A clear “That comment isn't okay, please stop” creates a record that the behaviour was unwelcome. Only if it feels safe.</p></div>
        <div className="step"><div className="n">4</div><h3>Report through a channel</h3><p>Manager, HR, the Internal Committee (POSH), an ethics helpline, or anonymously where offered. You can report in writing.</p></div>
        <div className="step"><div className="n">5</div><h3>Get support &amp; follow up</h3><p>Tell a trusted friend, seek counselling, know your legal options. Retaliation for complaining is prohibited — report that too.</p></div>
      </div>

      <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: "800", fontSize: "21px", margin: "44px 0 6px" }}>Witnessed it? You're not a bystander — you're the culture.</h3>
      <p style={{ color: "var(--muted)", maxWidth: "46em", margin: "0" }}>Most harassment happens in front of other people. The <b>5Ds of bystander intervention</b> (from Right To Be) give you five safe options — pick whichever fits the moment:</p>
      <div className="bystander">
        <div className="d-card"><b>D1</b><strong>Distract</strong><span>Interrupt indirectly — “Hey, can you help me with this file quickly?”</span></div>
        <div className="d-card"><b>D2</b><strong>Delegate</strong><span>Get someone with authority — a manager, HR, security — involved.</span></div>
        <div className="d-card"><b>D3</b><strong>Document</strong><span>Note or record what happened and hand it to the person targeted — never share it without their consent.</span></div>
        <div className="d-card"><b>D4</b><strong>Delay</strong><span>Check in afterwards: “I saw what happened. Are you okay? It wasn't right.”</span></div>
        <div className="d-card"><b>D5</b><strong>Direct</strong><span>If safe, name it in the moment: “That comment crosses a line. Let's keep it professional.”</span></div>
      </div>

      {/* Scenario */}
      <div className="scenario" id="scenarioBox">
        <h3>🎯 Spot it: quick scenario check</h3>
        <p style={{ color: "var(--muted)", margin: "0" }}>Read each real-world style situation and decide — is this harassment? No scores stored, just honest practice.</p>
        <p className="q" id="scenQ">{scenarios[scenarioIndex].q}</p>
        <div className="scen-btns">
          <button className="scen-btn" onClick={() => answerScenario(true)}>Yes — this is harassment</button>
          <button className="scen-btn" onClick={() => answerScenario(false)}>No — this is fine / normal</button>
        </div>
        <div className={feedback ? `scen-feedback show ${feedback.s.a ? "bad" : "good"}` : "scen-feedback"} id="scenF">{feedback && (<><b>{feedback.correct ? "✓ You read it right. " : "Not quite — here's the read: "}</b> {feedback.s.f}</>)}</div>
        <div className="scen-nav"><span className="scen-count" id="scenCount">{`Scenario ${scenarioIndex + 1} of ${scenarios.length}`}</span><button className="link-btn" onClick={nextScenario}>Next scenario →</button></div>
      </div>
    </div></section>
  );
}
