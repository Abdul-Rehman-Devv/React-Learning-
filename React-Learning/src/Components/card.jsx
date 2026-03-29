import React from 'react'


function Card({ user, age }) {
  return (
    <>
    <div className="card">
      <h3>React Fun facts</h3>
      <p>React was build by {user}</p>
      <p>Age: {age}</p>
      <button className='card-button'>Learn More</button>
    </div>
    
    </>
  )
}

export default Card