import React, { useState } from 'react';
import { Link } from "react-router-dom";
import LoginBg from "./login-bg.svg";
import "./style.css"

const LoginSignup = () => {

    const [activeTab, setActiveTab] = useState('tab1');
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
        <div className="login-signup">
            <div className="login-inner">
                <img src={LoginBg} className="login-bg-img" alt="login-bg" />
                <div className={`log-sign-frm ${activeTab === 'tab1' ? 'active' : ''}`} id='one'>
                    {/* <h2 className="m-head">Job Portal</h2> */}
                        <h3 className="log-in-title">Login</h3>
                    <div className="log-in-form col-flex">
                        <div className="input col-flex">
                            <span className="head">Email Address</span>
                            <input type="text" placeholder="example@gmail.com" className="log-in-input" />
                        </div>
                        <div className="input col-flex">
                            <span className="head">Password</span>
                            <input type="password" placeholder="Password@123" className="log-in-input" />
                        </div>
                        <Link className="forgot">
                        Forgot Password
                        </Link>
                    </div>
                    <div className="row-flex button-row">
                        <Link to="/dashboard" className="login-button">
                            LOG IN
                        </Link>
                        <Link className="login-button" onClick={() => handleTabClick('tab2')}>
                            SIGN UP
                        </Link>
                    </div>
                </div>
                <div className={`log-sign-frm ${activeTab === 'tab2' ? 'active' : ''}`} id='two'>
                    {/* <h2 className="m-head">Job Portal</h2> */}
                        <h3 className="log-in-title">Login</h3>
                    <div className="row-flex input-row">
                        <div className="log-in-form col-flex">
                            <div className="input col-flex">
                                <span className="head">First Name</span>
                                <input type="text" placeholder="manish" className="log-in-input" />
                            </div>
                            <div className="input col-flex">
                                <span className="head">Last Name</span>
                                <input type="text" placeholder="sharma" className="log-in-input" />
                            </div>
                            <div className="input col-flex">
                                <span className="head">Username & Email Id</span>
                                <input type="text" placeholder="Username & Email Id" className="log-in-input" />
                            </div>
                        </div>
                        <div className="log-in-form col-flex">
                            <div className="input col-flex">
                                <span className="head">Password</span>
                                <input type="password" placeholder="Password@123" className="log-in-input" />
                            </div>
                            <div className="input col-flex">
                                <span className="head">Country</span>
                                <input type="text" placeholder="India" className="log-in-input" />
                            </div>
                        </div>
                    </div>
                    <div className="row-flex button-row">
                        <Link className="login-button" onClick={() => handleTabClick('tab1')}>
                            SIGN UP
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default LoginSignup;