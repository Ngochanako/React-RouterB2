
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListProduct from './pages/ListProduct'
import ProductDetail from './pages/ProductDetail'
import Home from './pages/Home'
import Student from './pages/Student'
import Employee from './pages/Employee'
import PrivateRouter from './pages/PrivateRouter'
import Account from './pages/Account'
import Login from './pages/Login'
import TeamIndex from './pages/TeamIndex'
import Teams from './pages/Teams'
import Team from './pages/Team'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product-detail/:id' element={<ProductDetail/>}/>
        <Route path='/list-productx ' element={<ListProduct/>}/>
        <Route path='/student/:name' element={<Student/>}/>
        <Route path='/employee' element={<Employee/>}/>
        <Route path='/account' element={<PrivateRouter/>}>
          <Route index element={<Account/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/teams' element={<Teams/>}>
            <Route index element={<TeamIndex/>}/>
            <Route path=':teamId' element={<Team/>}/>
        </Route>
      </Routes>
    </div>
  )
}
