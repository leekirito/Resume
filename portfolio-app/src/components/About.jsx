const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/leekirito', emoji: '🐙' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/henry-lee-17288b262/', emoji: '💼' },
  { label: 'Instagram', href: 'https://www.instagram.com/kiritolee65/', emoji: '📸' },
  { label: 'Facebook', href: 'https://www.facebook.com/you.live.3152130', emoji: '💬' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@liecodex2', emoji: '🎵' },
]

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-tag">Background</div>
        <h2 className="section-title">About Me</h2>
        <p className="section-sub">
          The story behind the code, from a grade-10 Unity hobbyist to a multi-discipline builder.
        </p>

        <div className="about-grid">
          {/* Text side */}
          <div className="about-text">
            <p>
              I'm <strong>Henry M. Lee Jr.</strong>, a self-taught developer who started with
              game development back in Grade 10, picking up Unity because it had the best tutorials online.
              School split my time, but the passion never died.
            </p>
            <p>
              I came back in Grade 12 when our research required an educational game. With my Unity
              background and a ton of YouTube videos, I shipped <strong>Spell Bound</strong>, a
              turn-based word game with a novel-like story. That experience cemented my love for building things.
            </p>
            <p>
              Since then I've expanded beyond game dev. I now build <strong>web applications</strong> with
              React and modern tooling, and I'm developing <strong>DrivePal</strong>, a full SaaS command
              center for the automotive ecosystem, managing bookings, repairs, invoices, dealership
              inventory, and admin verification across multiple user roles.
            </p>
            <p>
              Game dev taught me systems thinking. Web dev taught me UX discipline. SaaS is where both
              meet real-world problems.
            </p>

            <div className="about-socials">
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <span>{s.emoji}</span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Video side */}
          <div>
            <div className="about-video-wrap">
              <iframe
                src="https://youtu.be/YP2IyAgLIDs"
                title="Spell Bound game trailer"
                allowFullScreen
              />
            </div>
            <p className="about-video-label">
              ▶ Spell Bound — The STI Adventure (Game Trailer)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
