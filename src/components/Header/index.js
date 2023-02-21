import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="top-heading-section-container">
    <div className="wave-logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-logo"
      />
      <p className="wave-text">Wave</p>
    </div>

    <div className="home-about-contact-container">
      <ul className="list-section">
        <li className="home-section">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="home-section">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className="home-section">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
