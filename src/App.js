import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import  Project from './Pages/Project'
import Contact from './Pages/Contact';
import Education from './Pages/Education'
import PageNotFound from './Pages/PageNotFound'
import Skill from './Pages/Skill'
import Navbar from './Navbar/Navbar'
const App = () => {
  return (
    <div>
    
      <Router>
      <Navbar/>
        <Routes>
           <Route index element={<Home/>} />
           <Route path="project" element={<Project />} />
           <Route path="contact" element={<Contact/>} />
           <Route path='education' element={<Education/>} />
           <Route path='skill' element={<Skill/>} />
           <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App