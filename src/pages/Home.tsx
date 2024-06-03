import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <p>Bài 1</p>
      <Link to='/list-product' className='link'>Product</Link>
      <p>Bài 2</p>
      <Link to='/student/nam' className='link'>Student</Link>
      <p>Bài 3</p>
      <Link to='/employee' className='link'>Employee</Link>
      <p>Bài 4</p>
      <Link to={'/employee'} className='link'>Employee</Link>
      <p>Bài 5</p>
      <Link to={'/account'} className='link'>Private router</Link>
      <p>Bài 6</p>
      <Link to={'/login'} className='link'>Login</Link>
      <p>Bài 7</p>
      <Link to={'/teams'} className='link'>Teams</Link>
      <p>Bài 8</p>
      <Link to={'/admin'} className='link'>Bài 8</Link>
    </div>
  )
}
