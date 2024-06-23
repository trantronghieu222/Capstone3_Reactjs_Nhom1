import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            
            <div className='container' style={{width: 500}} >
                <p className='py-3' style={{fontSize: 30}}>Login</p>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="btn btn-success my-3">Login</button>
                <div>Don't have any account?
                    <a className='px-3' href="register">Register</a>
                </div>

            </div>

        </div>
    )
}

export default Login