import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <Link to={'/home'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/edit'}>Edit form</Link>

        <h1>HOme Page</h1>
    </div>
  )
}

export default Home