import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
        <Link to={'/home'}>Home</Link>
        <Link to={'/about'}>About</Link>

        <h1>About Page</h1>
    </div>
  )
}

export default About