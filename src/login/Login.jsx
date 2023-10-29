// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import img from '../assets/undraw_login_re_4vu2.svg'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';



const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [checkVisible, setCheckVisible] = useState(false);
    const [agreeVisible, setAgreeVisible] = useState(false);


    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleCheckVisibility = () => {
        setCheckVisible(!checkVisible);
    };

    const toggleAgreeVisibility = () => {
        setAgreeVisible(!agreeVisible);
    };



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">

                    {/* img */}
                    <div>
                        <img src={img} alt="" />
                    </div>


                    {/* form */}
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className=''>
                                    <input type={passwordVisible ? 'text' : 'password'} placeholder="password" className="input input-bordered" required />
                                    <span className='inline-block  -ml-10' onClick={togglePasswordVisibility}>
                                        {passwordVisible ? (
                                            <BsEyeSlashFill className='text-2xl'></BsEyeSlashFill >
                                        ) : (
                                            <BsEyeFill className='text-2xl'></BsEyeFill>
                                        )}
                                    </span>
                                </div>

                            </div>



                            <div>
                                <input type="checkbox" checked={checkVisible} className="checkbox" onChange={toggleCheckVisibility}>

                                </input>
                                <span className='ms-2'>Remember me</span>
                            </div>



                            <div>
                                <input type="checkbox" checked={agreeVisible} className="checkbox" onChange={toggleAgreeVisibility}>

                                </input>
                                <span className='ms-2'>Remember me</span>
                            </div>


                            <div className="form-control mt-6">
                                <button disabled={!checkVisible || !agreeVisible} className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;