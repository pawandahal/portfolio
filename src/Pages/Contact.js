import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram,faTwitter,faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';
const Contact = () => {
  return (
    <div className="contact">
     <div className="number">
       <h4>Phone</h4> 
       <p>No:9823767385</p>
      </div> 
      <div className="socialMedia">

        <FontAwesomeIcon className="fb"icon= {faFacebook}/>
        <FontAwesomeIcon className="inst" icon={faInstagram}/>
        <FontAwesomeIcon className='tw' icon= {faTwitter} />
        <FontAwesomeIcon className="link"icon={faLinkedin} />
        <FontAwesomeIcon className="git" icon={faGithub} />

        
      </div>
    </div>
  )
}

export default Contact