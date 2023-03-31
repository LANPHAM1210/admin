import React from 'react'
import { Link } from 'react-router-dom'

function Forgotpassword() {
  return (
    <div className='login'>
        <div className='login-box'>
            <div className='login-title'>
                <h1 className='login-title-1'>Smart</h1>
                <h1 className='login-title-2'>phone</h1>
                <h1 className='login-title-3'>Admin</h1>
            </div>
            <div className='login-content'>
                <div className='email'>
                    <span> Enter email</span>
                    <input type={'email'} placeholder='Enter email' />
                </div>
                <div className='password'>
                    <span>Password retrieval</span>
                    <input type={'password'} placeholder='Password retrieval'/>
                </div>
            </div>
            <div className='login-footer'>
                <div className='login-checkbox'>
                    <input type={'checkbox'} />
                    <span>Remember Me</span>
                </div>
                <Link to={'/login'}>
                    <button className='login-button'>Update</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Forgotpassword
