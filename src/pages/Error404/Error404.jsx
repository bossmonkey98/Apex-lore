import React from 'react'
import './Error404.css'

const Error404 = () => {
  return (
    <div style={{margin:"2rem"}}>
        <div className='eror'>
            <p id="error">E <span>r</span>ror</p>
            <p id="code">4<span>0</span><span>4</span></p>
      <h1 style={{fontSize:"2rem",color:"var(--logo-color)"}}>The page you are looking for is not found</h1>
        </div>

    </div>
  )
}

export default Error404
