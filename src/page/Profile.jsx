import React, { useEffect, useState } from 'react'
import { httpStore } from '../util/config'
import { useFormik } from 'formik'
import { updateProfileAsync } from '../redux/reducers/UserReducer'
import { useDispatch } from 'react-redux'

const Profile = () => {
    const dispatch = useDispatch();
    // State chứa profile
    const [userProfile, setUserProfile] = useState({})
    const getProfileApi = async () => {
        try {
            const res = await httpStore.post('/api/Users/getProfile');
            setUserProfile(res.data.content);
            frmUpdateProfile.setValues(res.data.content);
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    }
    
    const filterProfile = (profile) => {
        return {
            id: profile.id,
            email: profile.email,
            password: profile.password,
            name: profile.name,
            gender: profile.gender,
            phone: profile.phone
        };
    };

    const frmUpdateProfile = useFormik({
        initialValues: {
            id: 0,
            email: "",
            password: "",
            name: "",
            gender: true,
            phone: ""
        },
        onSubmit: async (valueProf) => {
            const newProfile = filterProfile(valueProf)
            const actionUpdateAsync = updateProfileAsync(newProfile);
            await dispatch(actionUpdateAsync);
            alert('Cập nhật thành công!')
        }
    })

    useEffect(() => {
        getProfileApi()
    }, []);

    return (
        <div>
            <section className='profile'>
                <div className="title-2 my-5">
                    <p>Profile</p>
                </div>
                <div className="container profile-content">
                    {/* Profile user */}
                    <div className="profile-user">
                        <form action="" onSubmit={frmUpdateProfile.handleSubmit}>
                            <div className="row">
                                <div className="col-3 profile-img">
                                    <img src={userProfile.avatar} alt="" width={200} />
                                </div>
                                <div className="col-4">
                                    {/* Email */}
                                    <div className="mb-3">
                                        <label htmlFor className="form-label">Email</label>
                                        <input type="email" name="email" className="form-control" aria-describedby="helpId" value={frmUpdateProfile.values.email} onInput={frmUpdateProfile.handleChange} />
                                        {/* <small id="helpId" className="text-muted">Help text</small> */}
                                    </div>
                                    {/* Phone */}
                                    <div className="mb-3">
                                        <label htmlFor className="form-label">Phone</label>
                                        <input type="number" name="phone" className="form-control" aria-describedby="helpId" value={frmUpdateProfile.values.phone} onInput={frmUpdateProfile.handleChange} />
                                        {/* <small id="helpId" className="text-muted">Help text</small> */}
                                    </div>
                                </div>
                                <div className="col-1"></div>
                                <div className="col-4">
                                    {/* Email */}
                                    <div className="mb-3">
                                        <label htmlFor className="form-label">Name</label>
                                        <input type="text" name="name" className="form-control" aria-describedby="helpId" value={frmUpdateProfile.values.name} onInput={frmUpdateProfile.handleChange} />
                                        {/* <small id="helpId" className="text-muted">Help text</small> */}
                                    </div>
                                    {/* Phone */}
                                    <div className="mb-3">
                                        <label htmlFor className="form-label">Password</label>
                                        <input type="password" name="password" className="form-control" aria-describedby="helpId" value={frmUpdateProfile.values.password} onInput={frmUpdateProfile.handleChange} />
                                        {/* <small id="helpId" className="text-muted">Help text</small> */}
                                    </div>
                                    {/* Gender */}
                                    <div className="register-gender d-flex py-4">
                                        <p className='pe-3'>Gender</p>
                                        <div class="form-check me-3">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="gender"
                                                id="male" 
                                                value={'true'}
                                                checked={frmUpdateProfile.values.gender === true}
                                                onChange={() => frmUpdateProfile.setFieldValue('gender', true)}
                                            />
                                            <label className="form-check-label" for=""> Male </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="gender"
                                                id="female"
                                                value={'false'}
                                                checked={frmUpdateProfile.values.gender === false}
                                                onChange={() => frmUpdateProfile.setFieldValue('gender', false)}
                                            />
                                            <label className="form-check-label" for=""> Female </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-update-profile mb-3">
                                    <button type="submit" className="btn btn-primary">
                                        SUBMIT
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* Orderhistory */}
                    <div className="order-history">
                        <h1>Order History</h1>
                        {
                            userProfile.ordersHistory?.map((ordHis, index) => {
                                return (
                                    <div className="" key={index}>
                                        <p className='text-info'>Order have been place on {ordHis.date}</p>
                                        <div className="order__content">
                                            <div
                                                class="table-responsive"
                                            >
                                                <table
                                                    class="table"
                                                >
                                                    <thead>
                                                        <tr className='table-title'>
                                                            <th scope="col">id</th>
                                                            <th scope="col">img</th>
                                                            <th scope="col">name</th>
                                                            <th scope="col">price</th>
                                                            <th scope="col">quantity</th>
                                                            <th scope="col">total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            ordHis.orderDetail?.map((ordDetail, indexDetail) => {
                                                                return (
                                                                    <tr class="table-item" key={indexDetail}>
                                                                        <td>{ordHis.id}</td>
                                                                        <td><img src={ordDetail.image} alt="" width={100} /></td>
                                                                        <td>{ordDetail.name}</td>
                                                                        <td>{ordDetail.price}</td>
                                                                        <td>{ordDetail.quantity}</td>
                                                                        <td>{ordDetail.price * ordDetail.quantity}</td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Profile