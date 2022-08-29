import React from 'react'
import "./Navbar.css"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faFacebook, faInstagram,faTwitter,faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="containerr">
      <h1><li><Link to="/">PortFolio</Link></li></h1>
        <nav>
          <ul>
          <li><Link to="/">Home</Link></li>
            <li><Link to="/education">Education</Link></li> 
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/project">Project</Link></li>
            <li><Link to="/skill">Skill</Link></li>
          </ul>
        </nav>
        <div className="icons">
        {/* <FontAwesomeIcon icon= {faFacebook}/>
        <FontAwesomeIcon icon={faInstagram}/>
        <FontAwesomeIcon icon= {faTwitter} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faGithub} /> */}
         </div>
    </div>
  )
}

export default Navbar