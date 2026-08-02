const SKILLS = [
  {
    icon: '🎮',
    title: 'Game Development',
    desc: 'Building 2D & 3D games with rich mechanics, multiplayer networking, and educational design.',
    color: '#34d399',
    tags: ['Unity', 'C#', 'Inky', 'Netcode for GameObjects', 'Cinemachine', 'Animator'],
  },
  {
    icon: '🌐',
    title: 'Web App Development',
    desc: 'Crafting modern, responsive web applications with clean UX and component-driven architecture.',
    color: '#6366f1',
    tags: ['React', 'Vite', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'PHP', 'Laravel', 'MySQL'],
  },
  {
    icon: '🚀',
    title: 'SaaS Development',
    desc: 'Designing full command-center platforms with dashboards, auth, real-time data, and multi-role systems.',
    color: '#22d3ee',
    tags: ['Firebase', 'Firestore', 'Auth', 'Node.js', 'Real-time DB', 'Multi-role Systems'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-tag">What I do</div>
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-sub">
          From pixel-perfect game worlds to production-grade SaaS, I build across the full creative spectrum.
        </p>

        <div className="skills-grid">
          {SKILLS.map(s => (
            <div
              key={s.title}
              className="skill-card"
              style={{ '--card-color': s.color }}
            >
              <div className="skill-card-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="skill-tags">
                {s.tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
