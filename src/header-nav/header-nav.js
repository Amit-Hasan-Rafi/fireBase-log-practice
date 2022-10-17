import React from 'react'
import { Outlet } from 'react-router-dom'
import Top_cmp from '../components/top-cmp/top-cmp'

function Header_nav() {
  return (
    <div  >
        <Top_cmp></Top_cmp>
        <Outlet></Outlet>
    </div>
  )
}

export default Header_nav