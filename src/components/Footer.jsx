import { Cpu, AtSign, Briefcase, Mail } from "lucide-react";
import { NAV_LINKS } from "../data/content";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__brand">
          <div className="footer__brand-line">
            <Cpu size={20} strokeWidth={1.75} />
            <span>IEEE RAS</span>
          </div>
          <p>Robotics and Automation Society Student Chapter, VIT Chennai — School of Electronics Engineering.</p>
        </div>

        <div className="footer__col">
          <h4>Quick links</h4>
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.id}><a href={`#${l.id}`}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Official</h4>
          <ul>
            <li><a href="https://www.ieee-ras.org/" target="_blank" rel="noopener noreferrer">IEEE RAS Global</a></li>
            <li><a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer">IEEE.org</a></li>
            <li><a href="https://chennai.vit.ac.in/" target="_blank" rel="noopener noreferrer">VIT Chennai</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Follow</h4>
          <div className="footer__social">
            <a href="https://www.instagram.com/ieeerasvitc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <AtSign size={18} strokeWidth={1.7} />
            </a>
            <a href="https://www.linkedin.com/in/ieee-ras-student-chapter-vit-chennai-403208191/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Briefcase size={18} strokeWidth={1.7} />
            </a>
            <a href="mailto:ieeerasvitchennai@gmail.com" aria-label="Email">
              <Mail size={18} strokeWidth={1.7} />
            </a>
          </div>
        </div>
      </div>

      <div className="wrap footer__legal">
        <span>© {year} IEEE RAS Student Chapter, VIT Chennai.</span>
        <span>Content sourced from public IEEE RAS materials.</span>
      </div>
    </footer>
  );
}
