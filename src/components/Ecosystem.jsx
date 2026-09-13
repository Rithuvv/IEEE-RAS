import { Radar, ScanEye, BrainCircuit, SlidersHorizontal, RefreshCw } from "lucide-react";
import { ECOSYSTEM_STAGES } from "../data/content";
import "./Ecosystem.css";

const ICON_MAP = { Radar, ScanEye, BrainCircuit, SlidersHorizontal, RefreshCw };

function StageIcon({ name, ...props }) {
  const Icon = ICON_MAP[name] || Radar;
  return <Icon {...props} />;
}

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="section ecosystem">
      <div className="grid-backdrop" aria-hidden="true" />
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">The RAS Ecosystem</span>
          <h2 className="section-title">How a robot thinks</h2>
          <p className="section-sub">
            Every autonomous system, from a lab prototype to an industrial
            arm, runs the same closed loop — a continuous pipeline from raw
            signal to physical action, and back again.
          </p>
        </div>

        <div className="pipeline">
          <div className="pipeline__track">
            {ECOSYSTEM_STAGES.map((stage, i) => (
              <div className="pipeline__item" key={stage.key}>
                <div className="pipeline__node">
                  <div className="pipeline__node-ring">
                    <StageIcon name={stage.icon} size={22} strokeWidth={1.6} />
                  </div>
                  <h3>{stage.title}</h3>
                  <span className="tag-code">{stage.subtitle}</span>
                  <p>{stage.description}</p>
                </div>

                {i < ECOSYSTEM_STAGES.length - 1 && (
                  <div className="pipeline__connector" aria-hidden="true">
                    <span className="pipeline__pulse" style={{ animationDelay: `${i * 0.6}s` }} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pipeline__loop" aria-hidden="true">
            <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="pipeline__loop-svg">
              <path d="M2 2 C 40 38, 60 38, 98 2" className="pipeline__loop-path" />
            </svg>
            <span className="pipeline__loop-label">feedback loop</span>
          </div>
        </div>
      </div>
    </section>
  );
}
