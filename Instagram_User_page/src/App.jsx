import { useState } from 'react'
import instagram from './assets/instagram.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isLoggedIn,setIsLogged] = useState(true)

  return (
    <div className='user'>
      <div className='user-wrapper'>
        <img className='logo'src={instagram}/>
        <input className='user-info' hidden={isLoggedIn} type="email" placeholder='Mobile Number or Email' />
        <input className='user-info' hidden={isLoggedIn}  type="text" placeholder='Full Name' />
        <input className='user-info' type="text" placeholder='Phone Number' />
        <input className='user-info' type="password" placeholder='Password' />
        <button className='sign-btn' onClick={()=>setIsLogged(false)}>{isLoggedIn ? 'Sign in' : 'Sign up'} </button>

          <div>{isLoggedIn?"Don't have account?": " have an account"}
            <span className='sign-up'>{isLoggedIn?" Sign up":" Log in"}</span>
          </div>
      </div>
    </div>
  )
}

export default App
