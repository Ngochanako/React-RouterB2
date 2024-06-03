import React from 'react'
import { Link } from 'react-router-dom'

export default function PrivateRouterB8() {

  return (
    <div>
      <ul>
        <li><Link to="/admin">Admin Index</Link></li>
        <li><Link to="/admin/account">Account</Link></li>
        <li><Link to="/admin/product">Product</Link></li>
        <li><Link to="/admin/order">Order</Link></li>
    </ul>
    </div>
  )
}
