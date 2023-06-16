// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header">
    <ul className="nav-menu">
      <li>
        <Link to="/" className="nav-path">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="nav-path">
          About
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
