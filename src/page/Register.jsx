import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { signupActionAsync } from '../redux/reducers/UserReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const regexName = /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u;
    const frmRegister = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: '',
            name: '',
            phone: '',
            gender: 'true',
        },
        onSubmit: async (newRegis) => {
            const actionAsync = signupActionAsync(newRegis);
            await dispatch(actionAsync);
            alert('Đăng ký thành công!')
            navigate('/home');
        },
        validationSchema: Yup.object().shape({
            email:Yup.string().required('Email cannot be blank !').email('Email is invalid !'),
            name:Yup.string().required('FullName cannot be blank !').matches(regexName,'Full name is invalid !'),
            password:Yup.string().required('Password cannot be blank !').min(6,'Password must be 6 to 12 characters').max(12,'Password must be 6 to 12 characters'),
            passwordConfirm: Yup.string().required('Password confirmation cannot be blank!').oneOf([Yup.ref('password'), null], 'Passwords must match'),
            phone:Yup.number().required('Phone cannot be blank !'),
        })
    })
    return (
        <div>
            <section className="register">
                <div className="container">
                    <div className="register-title title-1">
                        <h1>Register</h1>
                    </div>
                    <div className="register-content">
                        <form action="" className='register-form' onSubmit={frmRegister.handleSubmit}>
                            <div className="row">
                                <div className="col-5">
                                    {/* Email */}
                                    <div className="mb-3">
                                        <label for="" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="form-control"
                                            placeholder="email"
                                            aria-describedby="helpId"
                                            onInput={frmRegister.handleChange}
                                            onBlur={frmRegister.handleBlur}
                                        />
                                        {frmRegister.errors.email && <small id="helpId" className="text text-danger">{frmRegister.errors.email}</small>}
                                    </div>
                                    {/* Password */}
                                    <div className="mb-3">
                                        <label for="" className="form-label">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            className="form-control"
                                            placeholder="password"
                                            aria-describedby="helpId"
                                            onInput={frmRegister.handleChange}
                                            onBlur={frmRegister.onBlur}
                                        />
                                        {frmRegister.errors.password && <small id="helpId" className="text text-danger">{frmRegister.errors.password}</small>}
                                    </div>
                                    {/* Password confirm */}
                                    <div className="mb-3">
                                        <label for="" className="form-label">Password Confirm</label>
                                        <input
                                            type="password"
                                            name="passwordConfirm"
                                            id="passwordConfirm"
                                            className="form-control"
                                            placeholder="password conftirm"
                                            aria-describedby="helpId"
                                            onInput={frmRegister.handleChange}
                                            onBlur={frmRegister.onBlur}
                                        />
                                        {frmRegister.errors.passwordConfirm && <small id="helpId" className='text-danger'>{frmRegister.errors.passwordConfirm}</small>}
                                    </div>
                                </div>
                                <div className="col-2"></div>
                                <div className="col-5">

                                    {/* Name */}
                                    <div className="mb-3">
                                        <label for="" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="form-control"
                                            placeholder="name"
                                            aria-describedby="helpId"
                                            onInput={frmRegister.handleChange}
                                            onBlur={frmRegister.onBlur}
                                        />
                                        {frmRegister.errors.name && <small id="helpId" className="text-danger">{frmRegister.errors.name}</small>}
                                    </div>
                                    {/* Phone */}
                                    <div className="mb-3">
                                        <label for="" className="form-label">Phone</label>
                                        <input
                                            type="number"
                                            name="phone"
                                            id="phone"
                                            className="form-control"
                                            placeholder="phone"
                                            aria-describedby="helpId"
                                            onInput={frmRegister.handleChange}
                                            onBlur={frmRegister.handleBlur}
                                        />
                                        {frmRegister.errors.phone && <small id="helpId" className="text-danger">{frmRegister.errors.phone}</small>}
                                    </div>
                                    {/* Gender */}
                                    <div className="register-gender d-flex py-4">
                                        <p className='pe-3'>Gender</p>
                                        <div class="form-check me-3">
                                            <input className="form-check-input" type="radio" name="gender" id="male" value={'true'} checked={frmRegister.values.gender === 'true'} onChange={frmRegister.handleChange} />
                                            <label className="form-check-label" for=""> Male </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gender" id="female" value={'false'} checked={frmRegister.values.gender === 'false'} onChange={frmRegister.handleChange} />
                                            <label className="form-check-label" for=""> Female </label>
                                        </div>
                                    </div>
                                    {/* Btn submit */}
                                    <div className="btn-register">
                                        {
                                            frmRegister.isSubmitting ? <button type="submit" className="btn btn-primary" disabled={true}>Loading...</button> :
                                            <button type="submit" className="btn btn-primary" disabled={!frmRegister.isValid}>Register</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register