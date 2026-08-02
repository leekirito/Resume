import { useState, useEffect, useCallback } from 'react'

/* ── Lightbox modal ─────────────────────────────────────── */
function ImageModal({ src, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!src) return null

  return (
    <div
      className="img-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button className="img-modal-close" onClick={onClose} aria-label="Close">
        ✕
      </button>
      <div className="img-modal-content" onClick={e => e.stopPropagation()}>
        <img src={src} alt="Full resolution preview" />
      </div>
    </div>
  )
}

// Asset paths — images live in /public so we reference from root
const PROJECTS = [
  {
    id: 'drivepal',
    title: 'DrivePal',
    category: 'saas',
    badge: 'badge-saas',
    badgeLabel: 'SaaS',
    featured: true,
    status: 'In Development',
    statusClass: 'wip',
    desc: 'A web command center for the automotive ecosystem, connecting car owners, service shops, dealerships, and admins on one platform before the mobile app ships.',
    features: [
      'Browse shops & book service slots',
      'Track repair progress end-to-end',
      'Invoice & payment management',
      'Admin verification & moderation',
      'Dealership inventory & buyer leads',
      'Analytics & multi-role reports',
    ],
    tech: ['React', 'Firebase', 'Firestore', 'Auth', 'Real-time DB', 'Node.js', 'PHP', 'Laravel'],
    images: ['drivepal1.png', 'drivepal2.png'],
  },
  {
    id: 'spellbound',
    title: 'Spell Bound: The STI Adventure',
    category: 'game',
    badge: 'badge-game',
    badgeLabel: 'Game',
    status: 'Completed',
    desc: 'A turn-based educational word game set in STI school, blending Bookworm Adventure and Wordscape mechanics with a novel-like story powered by Inky.',
    features: ['Turn-based word combat', 'Novel-like narrative', 'STI campus setting', 'Solo-designed story'],
    tech: ['Unity', 'C#', 'Inky', 'TextMeshPro'],
    images: ['image-153x300.png', 'image-1.png', 'image.png'],
  },
  {
    id: 'suika',
    title: 'Suika Clone',
    category: 'game',
    badge: 'badge-game',
    badgeLabel: 'Game',
    status: 'Completed',
    desc: 'A faithful Unity clone of the viral Suika (Watermelon) game with a timer-based scoring system, race the clock and beat your best score.',
    features: ['Physics-based merging', 'Timer mode variants', 'Score tracking', 'Clean mobile-style UI'],
    tech: ['Unity', 'C#', 'Physics 2D'],
    images: ['Suika1.png', 'Suika2.png'],
  },
  {
    id: 'bitbuddy',
    title: 'BitBuddy',
    category: 'game',
    badge: 'badge-game',
    badgeLabel: 'Game',
    status: 'Completed',
    desc: 'An informative game that teaches users the basics of programming through fun and engaging mechanics, with Firebase-backed profiles and progress tracking.',
    features: ['Programming fundamentals', 'Firebase profile system', 'Level progression', 'Educational mechanics'],
    tech: ['Unity', 'C#', 'Firebase', 'TextMeshPro'],
    images: ['ButBuddy1.png', 'BitBuddy2.png', 'BitBuddy3.png', 'BitBuddy4.png', 'BitBuddy5.png'],
  },
  {
    id: 'ttt',
    title: 'Multi TicTacToe',
    category: 'game',
    badge: 'badge-game',
    badgeLabel: 'Game',
    status: 'Completed',
    desc: 'My first real-time multiplayer game, online Tic-Tac-Toe using Unity Netcode for GameObjects with lobby creation and matchmaking.',
    features: ['Online multiplayer', 'Lobby system', 'Netcode for GameObjects', 'Real-time sync'],
    tech: ['Unity', 'C#', 'NGO', 'Relay'],
    images: ['ttt1.png', 'ttt2.png', 'ttt3.png'],
  },
]

const TABS = [
  { label: 'All', value: 'all' },
  { label: '🎮 Games', value: 'game' },
  { label: '🚀 Web & SaaS', value: 'saas' },
]

function Slideshow({ images }) {
  const [idx, setIdx] = useState(0)
  const [zoom, setZoom] = useState(null)

  const onClose = useCallback(() => setZoom(null), [])

  if (!images || images.length === 0) return null
  const prev = () => setIdx(i => (i - 1 + images.length) % images.length)
  const next = () => setIdx(i => (i + 1) % images.length)

  return (
    <>
      <ImageModal src={zoom} onClose={onClose} />
      <div className="slide-container">
        {images.map((src, i) => (
          <div key={src} className={`slide-img${i === idx ? ' active' : ''}`}>
            <img
              src={src}
              alt={`Screenshot ${i + 1}`}
              onClick={() => setZoom(src)}
              style={{ cursor: 'zoom-in' }}
              title="Click to view full size"
            />
          </div>
        ))}
        {images.length > 1 && (
          <>
            <button className="slide-nav prev" onClick={prev} aria-label="Previous">‹</button>
            <button className="slide-nav next" onClick={next} aria-label="Next">›</button>
          </>
        )}
        {images.length > 1 && (
          <div className="slide-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`slide-dot${i === idx ? ' active' : ''}`}
                onClick={() => setIdx(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

function DrivePalPlaceholder() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #0d0f1e 0%, #181c35 50%, #0f1429 100%)',
      aspectRatio: '16/9',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Grid lines */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(99,102,241,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.07) 1px,transparent 1px)',
        backgroundSize: '40px 40px',
      }} />
      <div style={{ fontSize: '3rem', position: 'relative' }}>🚗</div>
      <div style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '1.5rem',
        fontWeight: 700,
        color: '#818cf8',
        position: 'relative',
      }}>DrivePal</div>
      <div style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: '0.72rem',
        color: '#8890b0',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        position: 'relative',
      }}>Web Command Center · Screenshots coming soon</div>
    </div>
  )
}

function ProjectCard({ project, featured }) {
  return (
    <div className={`project-card${featured ? ' featured' : ''}`}>
      <div className="project-card-img">
        {project.images
          ? <Slideshow images={project.images} />
          : <DrivePalPlaceholder />
        }
        <span className={`project-badge ${project.badge}`}>{project.badgeLabel}</span>
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.desc}</p>

        {project.features && (
          <div className="project-features">
            {project.features.map(f => (
              <div key={f} className="project-feature">{f}</div>
            ))}
          </div>
        )}

        <div className="project-tech">
          {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
        </div>

        <div className={`project-status${project.statusClass === 'wip' ? ' wip' : ''}`}>
          {project.status}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [tab, setTab] = useState('all')

  const filtered = PROJECTS.filter(p =>
    tab === 'all' ? true :
      tab === 'saas' ? p.category === 'saas' :
        p.category === tab
  )

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-tag">My work</div>
        <h2 className="section-title">Projects</h2>
        <p className="section-sub">
          Games, web apps, and SaaS platforms — built from scratch and shipped with care.
        </p>

        <div className="project-tabs">
          {TABS.map(t => (
            <button
              key={t.value}
              className={`tab-btn${tab === t.value ? ' active' : ''}`}
              onClick={() => setTab(t.value)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} featured={p.featured && i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
