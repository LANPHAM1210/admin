import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
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
                    <span>Email</span>
                    <input type={'email'} placeholder='Email' />
                </div>
                <div className='password'>
                    <span>Password</span>
                    <input type={'password'} placeholder='Password'/>
                </div>
                <div className='login-forgot'>
                    <Link to={'/forgotpassword'} className="link">
                        <span>Forgot password ?</span>
                    </Link>
                </div>
            </div>
            <div className='login-footer'>
                <div className='login-checkbox'>
                    <input type={'checkbox'} />
                    <span>Remember Me</span>
                </div>
                <Link to={'/'}>
                    <button className='login-button'>Login</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Login