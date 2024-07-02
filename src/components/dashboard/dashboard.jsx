import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom"
import "./style.css";

import ProfessionalImage from "./Graduation Cap.svg";
import DashIcon from "./dash-icon.svg";
import DocsIcon from "./documents.svg";
import EditProfile from "./editProfile.png";
import jobScholar from "./Job-scholar.png";
import FileIcon from "./file-upload.svg";
import Resume from "./resume-icon.svg";
import Recording from "./recording.svg";
import MyVoice from "./myvoice.svg"

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("nav1");
    const handleTabClick = (nav) => {
        setActiveTab(nav);
    };
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
        setCurrentDateTime(new Date());
        }, 1000); // Update every second

        return () => clearInterval(timerId); // Clean up the interval on component unmount
    }, []);

    const formatDateTime = (date) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        return date.toLocaleDateString('en-US', options);
    };
    return (
        <div className="main-dash row-flex">
            <div className="dash-nav col-flex">
                <div className="student-mask col-flex">
                    <img src={ProfessionalImage} alt="professional" className="i" />
                </div>
                <div className="nav-list col-flex">
                    <Link className={`nav-link row-flex ${activeTab === "nav1" ? "active": ""}`} onClick={() => handleTabClick("nav1")}>
                        <img src={DashIcon} alt="" className="icon" />
                        <span>Dashboard</span>
                    </Link>
                    <Link className={`nav-link row-flex ${activeTab === "nav2" ? "active": ""}`} onClick={() => handleTabClick("nav2")}>
                        <img src={DocsIcon} alt="" className="icon" />
                        <span>Documents</span>
                    </Link>
                    <Link className={`nav-link row-flex ${activeTab === "nav3" ? "active": ""}`} onClick={() => handleTabClick("nav3")}>
                        <img src={EditProfile} alt="" className="icon" />
                        <span>Edit Profile</span>
                    </Link>
                </div>
            </div>
            <div className="content col-flex">
                <div className="user-dash row-flex">
                    <div className="user-col col-flex">
                        <div className="date"><span>{formatDateTime(currentDateTime)}</span></div>
                        <div className="greeting">
                            <h2 className="g-head">
                                Welcome back, Ram Reddy!
                            </h2>
                            <span>Always stay updated in your student portal</span>
                        </div>
                    </div>
                    <div className="user-col col-flex">
                        <img src={jobScholar} alt="scholarimg" className="bgImg" />
                    </div>
                </div>
                <div className="row-flex row-dash">
                    <div className="col-dash col-flex">
                        <div className="top-head">
                            <span>Documents Uploaded</span>
                        </div>
                        <div className="row-flex docs-row">
                            <div className="docslist">
                                <ul>
                                    <li>HighSchool certificate</li>
                                    <li>Graduation certificate</li>
                                    <li>python certificate</li>
                                    <li>react certificate</li>
                                    <li>AWS Certified Developer</li>
                                    <li>Oracle Certified Master</li>
                                    <li>Microsoft Azure Developer</li>
                                </ul>
                            </div>
                            <div className="height-divider"></div>
                            <div className="docsupload">
                                <img src={FileIcon} alt="" className="docsIcon" />
                                <span>Documents Upload</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-dash col-flex">
                        <div className="top-head">
                            <span>Mock Interview</span>
                        </div>
                        <div className="row-flex interview-row">
                            <div className="docsupload">
                                    <img src={Resume} alt="" className="docsIcon" />
                                    <span>Load Resume</span>
                            </div>
                            <div className="height-divider"></div>
                            <div className="docsupload">
                                    <img src={Recording} alt="" className="docsIcon" />
                                    <span>Start Recording</span>
                            </div>
                            <div className="height-divider"></div>
                            <div className="docsupload">
                                    <img src={MyVoice} alt="" className="docsIcon" />
                                    <span>Upload<br></br>My Voice</span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Dashboard;