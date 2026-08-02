import { useEffect, useRef } from 'react'

/**
 * Projectile easter egg — when enabled:
 *  - A ▶ cursor follower tracks the mouse
 *  - Each click spawns N projectiles flying off in random directions
 */
export default function ProjectileSystem({ enabled }) {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    if (!enabled) {
      cursor.style.opacity = '0'
      return
    }

    cursor.style.opacity = '1'

    // ── Cursor follower ──────────────────────────────────────
    const onMove = (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top  = e.clientY + 'px'
    }

    // ── Click → spawn projectiles ────────────────────────────
    const onClick = (e) => {
      const count = 6
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 / count) * i + Math.random() * 0.6
        const speed = 4 + Math.random() * 5

        const el = document.createElement('div')
        el.textContent = '▶'
        el.style.cssText = `
          position: fixed;
          left: ${e.clientX}px;
          top: ${e.clientY}px;
          color: #818cf8;
          font-size: ${10 + Math.random() * 10}px;
          pointer-events: none;
          z-index: 9999;
          user-select: none;
          opacity: 1;
          transition: opacity 0.2s;
        `
        document.body.appendChild(el)
        fly(el, e.clientX, e.clientY, Math.cos(angle) * speed, Math.sin(angle) * speed)
      }
    }

    function fly(el, x, y, vx, vy) {
      const outOfBounds =
        x < -60 || x > window.innerWidth  + 60 ||
        y < -60 || y > window.innerHeight + 60

      if (outOfBounds) { el.remove(); return }

      x += vx
      y += vy
      el.style.left = x + 'px'
      el.style.top  = y + 'px'
      requestAnimationFrame(() => fly(el, x, y, vx, vy))
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('click', onClick)
      cursor.style.opacity = '0'
    }
  }, [enabled])

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      style={{
        position:      'fixed',
        pointerEvents: 'none',
        zIndex:        9998,
        color:         '#6366f1',
        fontSize:      '18px',
        transform:     'translate(-50%, -50%)',
        opacity:       0,
        transition:    'opacity 0.2s',
        userSelect:    'none',
      }}
    >
      ▶
    </div>
  )
}
