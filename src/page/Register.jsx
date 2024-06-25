import React from 'react'

const Register = () => {
    return (
        <div>
            <section className="register">
                <div className="container">
                    <div className="register-title title-1">
                        <h1>Register</h1>
                    </div>
                    <div className="register-content">
                        <form action="" className='register-form'>
                            <div className="row">
                                <div className="col-5">
                                    {/* Email */}
                                    <div className="mb-3">
                                        <label for="" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id=""
                                            className="form-control"
                                            placeholder="email"
                                            aria-describedby="helpId"
                                        />
                                        <small id="helpId" className="text-muted d-none"></small>
                                    </div>
                                    {/* Password */}
                                    <div className="mb-3">
                                        <label for="" className="form-label">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            id=""
                                            className="form-control"
                                            placeholder="password"
                                            aria-describedby="helpId"
                                        />
                                        <small id="helpId" className="text-muted d-none"></small>
                                    </div>
                                    {/* Password confirm */}
                                    <div className="mb-3">
                                        <label for="" className="form-label">Password Confirm</label>
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            className="form-control"
                                            placeholder="password conftirm"
                                            aria-describedby="helpId"
                                        />
                                        <small id="helpId" className="text-muted d-none"></small>
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
                                            id=""
                                            className="form-control"
                                            placeholder="name"
                                            aria-describedby="helpId"
                                        />
                                        <small id="helpId" className="text-muted d-none"></small>
                                    </div>
                                    {/* Phone */}
                                    <div className="mb-3">
                                        <label for="" className="form-label">Phone</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            id=""
                                            className="form-control"
                                            placeholder="phone"
                                            aria-describedby="helpId"
                                        />
                                        <small id="helpId" className="text-muted d-none"></small>
                                    </div>
                                    {/* Gender */}
                                    <div className="register-gender d-flex py-4">
                                        <p className='pe-3'>Gender</p>
                                        <div class="form-check me-3">
                                            <input className="form-check-input" type="radio" name="gender" id="male" />
                                            <label className="form-check-label" for=""> Male </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gender" id="female" />
                                            <label className="form-check-label" for=""> Female </label>
                                        </div>
                                    </div>
                                    {/* Btn submit */}
                                    <div className="btn-register">
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                        >
                                            SUBMIT
                                        </button>
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