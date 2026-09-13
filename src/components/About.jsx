import { ABOUT_STATS, ABOUT_TEXT } from "../data/content";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">About IEEE RAS</span>
          <h2 className="section-title">A global society, active on campus</h2>
        </div>

        <div className="about__grid">
          <div className="about__lede-col">
            <p className="about__lede">{ABOUT_TEXT.lede}</p>
            <p className="about__distinction">{ABOUT_TEXT.distinction}</p>

            <dl className="about__stats">
              {ABOUT_STATS.map((stat) => (
                <div className="about__stat" key={stat.label}>
                  <dt>{stat.value}</dt>
                  <dd>{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="about__panels">
            <article className="about__panel glass">
              <span className="tag-code">MISSION</span>
              <p>{ABOUT_TEXT.mission}</p>
            </article>
            <article className="about__panel glass">
              <span className="tag-code">VISION</span>
              <p>{ABOUT_TEXT.vision}</p>
            </article>
            <article className="about__panel about__panel--accent glass">
              <span className="tag-code">VIT CHENNAI CHAPTER</span>
              <p>{ABOUT_TEXT.chapter}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
