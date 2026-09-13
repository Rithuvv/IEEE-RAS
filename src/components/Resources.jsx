import { useMemo, useState } from "react";
import { Search, ArrowUpRight } from "lucide-react";
import { RESOURCES } from "../data/content";
import "./Resources.css";

const CATEGORIES = ["All", ...new Set(RESOURCES.map((r) => r.category))];

export default function Resources() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return RESOURCES.filter((r) => {
      const matchesCategory = category === "All" || r.category === category;
      const matchesQuery =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <section id="resources" className="section resources">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">Resource Hub</span>
          <h2 className="section-title">Everything to go deeper</h2>
          <p className="section-sub">
            Publicly available IEEE and robotics resources — search or filter
            by category. Every link opens the real, official source.
          </p>
        </div>

        <div className="resources__controls">
          <label className="resources__search">
            <Search size={16} strokeWidth={1.8} />
            <input
              type="text"
              placeholder="Search resources…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search resources"
            />
          </label>

          <div className="resources__cats" role="tablist" aria-label="Filter resources by category">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={category === cat}
                className={`chip ${category === cat ? "chip--active" : ""}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="resources__empty">
            No resources match "{query}". Try a different search term or category.
          </p>
        ) : (
          <ul className="resources__list">
            {filtered.map((res) => (
              <li key={res.title}>
                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-row"
                >
                  <span className="tag-code resource-row__cat">{res.category}</span>
                  <span className="resource-row__body">
                    <span className="resource-row__title">{res.title}</span>
                    <span className="resource-row__desc">{res.description}</span>
                  </span>
                  <ArrowUpRight size={17} className="resource-row__arrow" />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
