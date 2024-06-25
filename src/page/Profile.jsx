import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getDataTextStorage, TOKEN_AUTHOR } from '../util/utilFuntion'
import { httpStore } from '../util/config'

const Profile = () => {
    // State chứa profile
    const [userProfile, setUserProfile] = useState({})
    const getProfileApi = async () => {
        const token = getDataTextStorage(TOKEN_AUTHOR);
        const res = await httpStore.post('/api/Users/getProfile')
        setUserProfile(res.data.content);
    }

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
                        <form action="">
                            <div className="row">
                                <div className="col-3 profile-img">
                                    <img src={userProfile.avatar} alt="" width={200} />
                                </div>
                                <div className="col-4">
                                    {/* Email */}
                                    <div className="mb-3">
                                        <label htmlFor className="form-label">Email</label>
                                        <input type="email" name="email" className="form-control" aria-describedby="helpId" value={userProfile.email} />
                                        {/* <small id="helpId" className="text-muted">Help text</small> */}
                                    </div>
                                    {/* Phone */}
                                    <div className="mb-3">
                                        <label htmlFor className="form-label">Phone</label>
                                        <input type="number" name="phone" className="form-control" aria-describedby="helpId" value={userProfile.phone} />
                                        {/* <small id="helpId" className="text-muted">Help text</small> */}
                                    </div>
                                </div>
                                <div className="col-1"></div>
                                <div className="col-4">
                                    {/* Email */}
                                    <div className="mb-3">
                                        <label htmlFor className="form-label">Name</label>
                                        <input type="text" name="name" className="form-control" aria-describedby="helpId" value={userProfile.name} />
                                        {/* <small id="helpId" className="text-muted">Help text</small> */}
                                    </div>
                                    {/* Phone */}
                                    <div className="mb-3">
                                        <label htmlFor className="form-label">Password</label>
                                        <input type="password" name="password" className="form-control" aria-describedby="helpId" value={userProfile.password} />
                                        {/* <small id="helpId" className="text-muted">Help text</small> */}
                                    </div>
                                    {/* Gender */}
                                    <div className="register-gender d-flex py-4">
                                        <p className='pe-3'>Gender</p>
                                        <div class="form-check me-3">
                                            <input className="form-check-input" type="radio" name="gender" id="male" checked={userProfile.gender === true} />
                                            <label className="form-check-label" for=""> Male </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gender" id="female" checked={userProfile.gender === false} />
                                            <label className="form-check-label" for=""> Female </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-update-profile mb-3">
                                    <button type="button" className="btn btn-primary">
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