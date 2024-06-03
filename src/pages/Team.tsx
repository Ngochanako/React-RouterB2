import React from 'react'
import { useParams } from 'react-router-dom'

export default function Team() {
    const {teamId}=useParams();
    console.log(teamId);
    
  return (
    <div>
      <p>id:{teamId}</p>
    </div>
  )
}
