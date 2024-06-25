import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

// import {addUserActionAsync} from '../redux/reducers/useReducer'
const regexName = /^[a-z A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểễỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴÝỶỸửữựỳỵỷỹ]{3,}$/u;
const Register = () => {
    const formRegister = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            phone: '',
            gender: true
        },
        onSubmit: (userRegister) => {
            console.log(userRegister);
            const actionAsync = signupActionAsync(userRegister)
            dispatch(actionAsync)

        },
        validationSchema: Yup.object().shape({
            email: Yup.string().required('Email cannot be blank !').email('Email is invalid !'),
            fullName: Yup.string().required('FullName cannot be blank !').matches(regexName, 'Full name is invalid !'),
            password: Yup.string().required('Password cannot be blank !').min(6, 'Password must be 6 to 12 characters').max(12, 'Password must be 6 to 12 characters'),
            phone: Yup.number().required('Phone cannot be blank !'),
        })

    })
    return (

        <form className='container d-flex w-50 mx-auto'>
            <div className='row justify-content-center ' style={{ width: 1000, justifyContent: 'center' }} >

                <p className='py-3' style={{ fontSize: 30 }}>Register</p>

                <div className="form-floating mb-3 col-6">
                    <h3 className='mb-3'>Email</h3>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" name='email' onInput={formRegister.handleChange} onBlur={formRegister.handleBlur} />
                </div>

                <div className="form-floating col-6"><h3 className='mb-3'>Password</h3>
                    <input type="password" className="form-control" id="password" placeholder="Password" name='password' onInput={formRegister.handleChange} onBlur={formRegister.handleBlur} />
                </div>

                <div className="form-floating mb-3 col-6"><h3 className='mb-3'>Password Confirm</h3>
                    <input type="password" className="form-control" id="passwordConfirm" name='passwordConfirm' onInput={formRegister.handleChange} onBlur={formRegister.handleBlur} placeholder="Password confirm" />
                </div>

                <div className="form-floating mb-3 col-6"><h3 className='mb-3'>Phone</h3>
                    <input type="Phone" name='phone' className="form-control" id="phone" placeholder="Phone" onInput={formRegister.handleChange} onBlur={formRegister.handleBlur} />
                </div>

                <div className="form-floating mb-3 col-6"><h3 className='mb-3'>Name</h3>
                    <input type="Name" className="form-control" id="floatingInput" placeholder="name" name='name' onInput={formRegister.handleChange} onBlur={formRegister.handleBlur} />
                </div>

                <div className='mb-3 col-6'>
                    <h3 className='mb-3'>Gender</h3>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="Male" value={true} onChange={formRegister.handleChange} onBlur={formRegister.handleBlur} checked={formRegister.values.gender === 'true'} />
                        <label className="form-check-label" htmlFor="Male">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="Female" value={false} onChange={formRegister.handleChange} checked={formRegister.values.gender === 'false'} />
                        <label className="form-check-label" htmlFor="Female">Female</label>
                    </div>
                </div>
                <div className='form-group mt-2'>

                    {/* {formRegister.isSubmitting ? <button className='btn btn-success' type="button" disabled={true}>Loading...</button> : <button className='btn btn-success' type="submit" disabled={!formRegister.isValid}>Register</button>} */}
                    <button className='btn btn-success'type='submit'>Register</button>
                </div>
            </div>
        </form>

    )
}

export default Register