import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Teams() {
  return (
    <div>
      <Link to={'/teams/1'} className='link'>Team 1</Link>
      <Outlet/>
    </div>
  )
}
