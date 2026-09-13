import { useState } from "react";
import { Globe, AtSign, Briefcase, Mail as MailIcon, MapPin } from "lucide-react";
import { CheckCircle2, Send } from "lucide-react";
import { CONTACT_LINKS, CONTACT_EMAIL } from "../data/content";
import "./Contact.css";

const ICON_MAP = { Globe, Instagram: AtSign, Linkedin: Briefcase, Mail: MailIcon, MapPin };

function LinkIcon({ name, ...props }) {
  const Icon = ICON_MAP[name] || Globe;
  return <Icon {...props} />;
}

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | success

  function validate(values) {
    const next = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!values.message.trim() || values.message.trim().length < 10) {
      next.message = "Message should be at least 10 characters.";
    }
    return next;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const subject = encodeURIComponent(`Message from ${form.name} — IEEE RAS VIT Chennai site`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setStatus("success");
    setForm(initialForm);
  }

  return (
    <section id="contact" className="section contact">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">Connect</span>
          <h2 className="section-title">Get in touch</h2>
          <p className="section-sub">
            Reach the chapter directly, or send a message below — it opens
            in your own email app addressed to the chapter, so it comes
            straight from you.
          </p>
        </div>

        <div className="contact__grid">
          <ul className="contact__channels">
            {CONTACT_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="contact-channel"
                >
                  <span className="contact-channel__icon">
                    <LinkIcon name={link.icon} size={18} strokeWidth={1.7} />
                  </span>
                  <span>
                    <span className="contact-channel__label">{link.label}</span>
                    <span className="contact-channel__value">{link.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <form className="contact-form glass" onSubmit={handleSubmit} noValidate>
            {status === "success" && (
              <div className="contact-form__success" role="status">
                <CheckCircle2 size={18} />
                <span>Your email client should now be open with the message ready to send.</span>
              </div>
            )}

            <div className="field">
              <label htmlFor="cf-name">Name</label>
              <input
                id="cf-name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "cf-name-err" : undefined}
              />
              {errors.name && <span className="field__error" id="cf-name-err">{errors.name}</span>}
            </div>

            <div className="field">
              <label htmlFor="cf-email">Email</label>
              <input
                id="cf-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "cf-email-err" : undefined}
              />
              {errors.email && <span className="field__error" id="cf-email-err">{errors.email}</span>}
            </div>

            <div className="field">
              <label htmlFor="cf-message">Message</label>
              <textarea
                id="cf-message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "cf-message-err" : undefined}
              />
              {errors.message && <span className="field__error" id="cf-message-err">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary contact-form__submit">
              Send message <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
