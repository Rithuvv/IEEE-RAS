import { useState } from "react";
import { Wrench, Trophy, Presentation, FolderKanban } from "lucide-react";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { EVENTS, ACTIVITY_CATEGORIES } from "../data/content";
import "./Activities.css";

const ICON_MAP = { Wrench, Trophy, Presentation, FolderKanban };

function CatIcon({ name, ...props }) {
  const Icon = ICON_MAP[name] || Wrench;
  return <Icon {...props} />;
}

const FILTERS = ["All", ...new Set(EVENTS.map((e) => e.type))];

export default function Activities() {
  const [filter, setFilter] = useState("All");
  const visibleEvents =
    filter === "All" ? EVENTS : EVENTS.filter((e) => e.type === filter);

  return (
    <section id="activities" className="section activities">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">Activities &amp; Events</span>
          <h2 className="section-title">On campus, in the lab</h2>
          <p className="section-sub">
            Verified activity from the VIT Chennai chapter, alongside the
            kinds of programming IEEE RAS chapters run year-round.
          </p>
        </div>

        <div className="activities__filters" role="tablist" aria-label="Filter events by type">
          {FILTERS.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              className={`chip ${filter === f ? "chip--active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <ul className="events__list">
          {visibleEvents.map((event) => (
            <li key={event.name} className="event-row">
              <div className="event-row__meta">
                <CalendarDays size={15} strokeWidth={1.7} />
                <span>{event.date}</span>
                <span className="tag-code">{event.type}</span>
              </div>
              <div className="event-row__body">
                <h3>{event.name}</h3>
                <p>{event.description}</p>
              </div>
              {event.link && (
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="event-row__link"
                >
                  Learn more <ArrowUpRight size={15} />
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="activities__categories">
          <h3 className="activities__categories-title">Common chapter activities</h3>
          <div className="activities__cat-grid">
            {ACTIVITY_CATEGORIES.map((cat) => (
              <div className="cat-card" key={cat.title}>
                <CatIcon name={cat.icon} size={20} strokeWidth={1.6} className="cat-card__icon" />
                <h4>{cat.title}</h4>
                <p>{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
