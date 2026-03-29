import React from 'react'

function NavBar() {
  return (
    <> 
    <div className='nav'>
      <div className='nav-logo'>
        <img  src="src/assets/react.svg" alt="Logo" srcset="" />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
    
     </>
  )
}

export default NavBar