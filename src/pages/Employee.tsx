import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Employee() {
  const [value,setValue]=useState<string>('');
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
      let vl=e.target.value;
      setValue(vl);
  }
  const navigate=useNavigate();
  const lookEmployee=()=>{
      navigate(`?employeeName=${value}`)
  }
  const location=useLocation();
  const [nameLook,setName]=useState<string>('');
 
  useEffect(()=>{
    const param=new URLSearchParams(location.search);
    const name=param.get('employeeName');
    if(name){
      setName(name);
    }
  },[location.search])

  return (
    <div>
      <input onChange={handleChange} type="text" className='border-gray-500' placeholder='Nhập từ khóa tìm kiếm' />
      <button onClick={lookEmployee} className='bg-orange-400 text-white p-2 rounded-lg' >Tìm kiếm</button>
      <br />
      <p>Name:{nameLook}</p>
    </div>
    
  )
}