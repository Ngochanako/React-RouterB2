import React from 'react'

export default function Login() {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',minHeight:'600px'}}>
      <form action="" style={{display:'flex',flexDirection:'column',gap:'10px'}}>
         <p className='text-lg'>Đăng nhập</p>
         <input type="email" placeholder='email' />
         <input type="password" placeholder='password' />
         <select name="" id="">
            <option value="" selected>Chọn quyền</option>
            <option value="">Admin</option>
            <option value="">User</option>
         </select>
         <button>Đăng nhập</button>
      </form>
    </div>
  )
}
