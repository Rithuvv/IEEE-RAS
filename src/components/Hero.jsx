import { ArrowRight, Radio } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="grid-backdrop" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="wrap hero__inner">
        <div className="hero__copy">
          <div className="hero__status">
            <Radio size={13} strokeWidth={2} />
            <span>SYSTEM ONLINE — VIT CHENNAI STUDENT CHAPTER</span>
          </div>

          <h1 className="hero__title">
            Engineering the future
            <br />
            of robotics.
          </h1>

          <p className="hero__sub">
            IEEE RAS is the global professional society for robotics and
            automation engineering. At VIT Chennai, that mission lives on
            campus — a student chapter under the School of Electronics
            Engineering where members build, compete and learn across
            robotics, automation, AI and control systems.
          </p>

          <div className="hero__actions">
            <a href="#domains" className="btn btn-primary">
              Explore RAS <ArrowRight size={17} />
            </a>
            <a href="#about" className="btn btn-ghost">
              Learn more
            </a>
          </div>
        </div>

        <div className="hero__art" role="img" aria-label="Animated schematic of a robotic arm connected to a signal-processing network">
          <RoboticSchematic />
        </div>
      </div>

      <div className="hero__baseline">
        <div className="wrap hero__baseline-inner">
          <span>ROBOTICS</span>
          <span>AUTOMATION</span>
          <span>ARTIFICIAL INTELLIGENCE</span>
          <span>CONTROL SYSTEMS</span>
        </div>
      </div>
    </section>
  );
}

function RoboticSchematic() {
  return (
    <svg viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg" className="schematic">
      <circle cx="260" cy="260" r="230" className="schematic__ring schematic__ring--outer" />
      <circle cx="260" cy="260" r="170" className="schematic__ring schematic__ring--mid" />

      {/* orbit nodes */}
      <g className="schematic__orbit">
        <circle cx="260" cy="30" r="4" className="schematic__node schematic__node--cyan" />
        <circle cx="490" cy="260" r="3.5" className="schematic__node" />
        <circle cx="120" cy="440" r="3" className="schematic__node" />
      </g>

      {/* base */}
      <rect x="200" y="420" width="120" height="18" rx="3" className="schematic__stroke" />
      <rect x="235" y="392" width="50" height="34" rx="3" className="schematic__stroke" />

      {/* arm segments, animated at joints */}
      <g className="schematic__arm">
        <line x1="260" y1="392" x2="260" y2="300" className="schematic__stroke schematic__stroke--thick" />
        <circle cx="260" cy="300" r="9" className="schematic__joint" />

        <g className="schematic__arm-upper">
          <line x1="260" y1="300" x2="345" y2="235" className="schematic__stroke schematic__stroke--thick" />
          <circle cx="345" cy="235" r="8" className="schematic__joint" />

          <g className="schematic__arm-fore">
            <line x1="345" y1="235" x2="330" y2="150" className="schematic__stroke schematic__stroke--thick" />
            <circle cx="330" cy="150" r="7" className="schematic__joint schematic__joint--cyan" />
            <path d="M330 150 L310 128 M330 150 L350 128" className="schematic__stroke" />
          </g>
        </g>
      </g>

      {/* scan line sweep */}
      <path d="M330 150 q40 10 60 60" className="schematic__scan" />

      {/* data readout ticks */}
      <g className="schematic__ticks">
        <text x="40" y="60" className="schematic__label">RA-01</text>
        <text x="392" y="480" className="schematic__label">SENSE·ACT</text>
      </g>
    </svg>
  );
}
