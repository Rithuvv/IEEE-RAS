import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { Bot, Cog, BrainCircuit, ScanEye, SlidersHorizontal, Users, Navigation, Factory } from "lucide-react";
import { DOMAINS } from "../data/content";
import "./Domains.css";

const ICON_MAP = {
  Bot, Cog, BrainCircuit, ScanEye, SlidersHorizontal, Users, Navigation, Factory,
};

function DomainIcon({ name, ...props }) {
  const Icon = ICON_MAP[name] || Bot;
  return <Icon {...props} />;
}

export default function Domains() {
  const [activeDomain, setActiveDomain] = useState(null);
  const dialogRef = useRef(null);
  const lastFocused = useRef(null);

  useEffect(() => {
    if (!activeDomain) return;
    lastFocused.current = document.activeElement;
    dialogRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") setActiveDomain(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      lastFocused.current?.focus?.();
    };
  }, [activeDomain]);

  return (
    <section id="domains" className="section domains">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">Areas of Exploration</span>
          <h2 className="section-title">Eight domains, one discipline</h2>
          <p className="section-sub">
            Robotics and automation draw on a wide field of interest. Select
            a domain to see what it involves.
          </p>
        </div>

        <div className="domains__grid">
          {DOMAINS.map((domain) => (
            <button
              key={domain.code}
              className="domain-card"
              onClick={() => setActiveDomain(domain)}
              aria-haspopup="dialog"
            >
              <div className="domain-card__top">
                <DomainIcon name={domain.icon} size={22} strokeWidth={1.6} className="domain-card__icon" />
                <span className="tag-code">{domain.code}</span>
              </div>
              <h3 className="domain-card__title">{domain.title}</h3>
              <p className="domain-card__short">{domain.short}</p>
              <span className="domain-card__cta">View details</span>
            </button>
          ))}
        </div>
      </div>

      {activeDomain && (
        <div className="domain-modal__backdrop" onClick={() => setActiveDomain(null)}>
          <div
            className="domain-modal glass"
            role="dialog"
            aria-modal="true"
            aria-labelledby="domain-modal-title"
            tabIndex={-1}
            ref={dialogRef}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="domain-modal__close"
              onClick={() => setActiveDomain(null)}
              aria-label="Close domain details"
            >
              <X size={18} />
            </button>
            <div className="domain-modal__head">
              <DomainIcon name={activeDomain.icon} size={28} strokeWidth={1.6} className="domain-card__icon" />
              <span className="tag-code">{activeDomain.code}</span>
            </div>
            <h3 id="domain-modal-title">{activeDomain.title}</h3>
            <p>{activeDomain.detail}</p>
          </div>
        </div>
      )}
    </section>
  );
}
