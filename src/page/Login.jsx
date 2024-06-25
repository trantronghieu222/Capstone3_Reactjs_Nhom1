import { useFormik } from 'formik'
import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { setDataTextStorage, TOKEN_AUTHOR } from '../util/utilFuntion'
import { useDispatch } from 'react-redux'
import { loginAction, loginActionApi } from '../redux/reducers/UserReducer'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userLoginForm = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            // Cách 1
            /*const res = await axios.post('https://apistore.cybersoft.edu.vn/api/Users/signin', values);
             console.log(res.data);
            setDataTextStorage(TOKEN_AUTHOR, res.data.content.accessToken);
            
            const action = loginAction(res.data.content);
            dispatch(action);*/
            // Cách 2
            const actionThunk = loginActionApi(values.email, values.password);
            // dispatch(actionThunk);
            await dispatch(actionThunk); // Đảm bảo dispatch xong
            alert('Đăng nhập thành công!');
            navigate('/home'); // Chuyển hướng về trang /home sau khi đăng nhập thành công
        }
    });
    
    return (
        <div>
            <section className="login">
                <div className="container">
                    <div className="title-1">
                        <h1>Login</h1>
                    </div>
                    <div className="login-content">
                        <form className='login-form' onSubmit={userLoginForm.handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor className="form-label">Email</label>
                                <input type="email" name="email" className="form-control" placeholder="email" aria-describedby="helpId" onInput={userLoginForm.handleChange} />
                                <small id="helpId" className="text-muted d-none" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor className="form-label">Password</label>
                                <input type="password" name="password" className="form-control" placeholder="password" aria-describedby="helpId" onInput={userLoginForm.handleChange} />
                                <small id="helpId" className="text-muted d-none" />
                            </div>

                            <div className="form-submit mb-2">
                                <NavLink to="/Register" className="link-regis">Register now?</NavLink>
                                <button type="submit" className="btn btn-login">
                                    Login
                                </button>
                            </div>
                            <div className="login-fb mb-2">
                                <button type='text' className='btn btn-login-fb'><i class="fab fa-facebook"></i> Continue With Facebook</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login