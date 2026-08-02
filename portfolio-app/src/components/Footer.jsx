export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          H.M. Lee Jr<span className="dot">.</span>
        </div>
        <p className="footer-copy">
          © {year} Henry M. Lee Jr. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="https://github.com/leekirito" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/henry-lee-17288b262/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/kiritolee65/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="mailto:leekirito363@gmail.com">Contact</a>
        </div>
      </div>
    </footer>
  )
}
