export default function ContactPage() {
  return (
    <section className="container" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <h1>Contact</h1>
      <p style={{ color: "var(--muted)" }}>
        Want team training or mentorship sessions? Send your goals and timeline.
      </p>
      <form
        style={{
          maxWidth: "620px",
          display: "grid",
          gap: "0.8rem",
          padding: "1rem",
          border: "1px solid var(--line)",
          borderRadius: "12px",
          background: "var(--surface)",
        }}
      >
        <label>
          Name
          <input type="text" placeholder="Your name" style={{ width: "100%", marginTop: ".3rem", padding: ".6rem" }} />
        </label>
        <label>
          Email
          <input type="email" placeholder="you@example.com" style={{ width: "100%", marginTop: ".3rem", padding: ".6rem" }} />
        </label>
        <label>
          Message
          <textarea rows={5} placeholder="Tell us what you want to learn" style={{ width: "100%", marginTop: ".3rem", padding: ".6rem" }} />
        </label>
        <button type="button" style={{ width: "fit-content", padding: ".7rem 1rem", fontWeight: 700 }}>
          Send Request
        </button>
      </form>
    </section>
  );
}
