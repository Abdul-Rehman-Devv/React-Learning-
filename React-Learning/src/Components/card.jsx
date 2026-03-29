import React from 'react'


function Card({ user, age, img }) {
  return (
    <>
    <div className="container">
    <div className="card">
        <img src={img} alt="" />
      <h1>{user}</h1>
      <p>Age: {age}</p>
      <button className='card-button'>Learn More</button>
    </div>
    </div>
    </>
  )
}

export default Card