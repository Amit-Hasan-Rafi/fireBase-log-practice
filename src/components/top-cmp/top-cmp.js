import React from 'react'
import { Link } from 'react-router-dom'
import './top-cmp.css'
function Top_cmp() {
  return (
    <div>
       <div className='top'>
        <Link  className='links' to='/google-singUp-from'>google-singUp-form</Link>
        <Link  className='links' to='/google-singUp'>Google</Link>
        <Link  className='links' to='/GitHub-singUp'>GitHub</Link>
       </div>
    </div>
  )
}

export default Top_cmp