import React, { useEffect, useState } from 'react'

function Github() {

  const [data, setdata] = useState([])

  useEffect(() => {
    fetch("https://api.github.com/users/Sharo-cod")
    .then(response => response.json())
    .then(data =>{
      console.log(data);
      setdata(data)
      
    })
  }, [])
  return (
    <div className='m-4 bg-gray-600 text-white p-4 '>
      <h1 className='text-3xl text-center'>Github Followers: {data.followers}</h1>
    <img src={data.avatar_url} alt="Sharo-cod" />
    <a className='text-3xl text-red-500' href="https://github.com/Sharo-cod" target='blank'>Sharo-cod</a>
    </div>
  )
}

export default Github