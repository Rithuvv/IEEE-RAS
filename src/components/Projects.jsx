import { Bot, ScanEye, Grip, CircuitBoard, BrainCircuit, Compass } from "lucide-react";
import { PROJECT_AREAS } from "../data/content";
import "./Projects.css";

const ICON_MAP = { Bot, ScanEye, Grip, CircuitBoard, BrainCircuit, Compass };

function ProjIcon({ name, ...props }) {
  const Icon = ICON_MAP[name] || Bot;
  return <Icon {...props} />;
}

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">Projects &amp; Innovation</span>
          <h2 className="section-title">What members build</h2>
          <p className="section-sub">
            From embedded firmware to full autonomy stacks — these are the
            areas of hands-on robotics work students explore through the
            chapter's workshops and independent projects.
          </p>
        </div>

        <div className="projects__grid">
          {PROJECT_AREAS.map((area) => (
            <article className="project-tile" key={area.title}>
              <div className="project-tile__glyph" aria-hidden="true">
                <ProjIcon name={area.icon} size={26} strokeWidth={1.5} />
              </div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
