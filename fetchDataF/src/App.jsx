import React, { useEffect, useState } from 'react'
import axios from 'axios';
const App = () => {
  const [hamza,setHamza]=useState([]);


useEffect(()=>{
  axios.get('/api/country')
  .then((Response)=>{
    setHamza(Response.data)
  })
  .catch((error)=>{
    console.log(error);
  })
},[])
  return (
    <div>
      <h1>hamza: {hamza.length} </h1>
      {
        hamza.map((item)=>(
          <div key={item.id} className='bg-black  text-white text-3xl font-bold text-center'>
            <h1> {item.id} </h1>
            <h1> {item.name} </h1>
            <h2> {item.population} </h2>

          </div>
        ))
      }
    </div>
  )
}

export default App