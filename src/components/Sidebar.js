import React, { useState } from 'react';
import { HiOutlineHome } from "react-icons/hi";

import { FiUserCheck, FiUsers, FiBriefcase, FiCalendar, FiStar, FiFileText } from "react-icons/fi";

import { NavLink } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import TextField from "@mui/material/TextField";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const menuItem = [

        {
            path: "/home",
            name: "Home",
            icon: <HiOutlineHome />
        },

        {
            path: "/Job",
            name: "Jobs",
            icon: <FiBriefcase />
        },
        {
            path: "/clients",
            name: "Clients",
            icon: <FiUserCheck />
        },
        {
            path: "/candidates",
            name: "Candidates",
            icon: <FiUsers />
        },
        {
            path: "/calendar",
            name: "Calendar",
            icon: <FiCalendar />
        },
        {
            path: "/reports",
            name: "Reports",
            icon: <FiFileText />
        },
        {
            path: "/rewards",
            name: "Rewards",
            icon: <FiStar />
        }
    ]
    return (
        <div className="container">
            <div id={!isOpen ? "open" : "close"} className="sidebar">
                <div className="top_section">
                    <h1 className="logo"> Hire++ </h1>
                    <div className="hiddenLinks">
                        <button onClick={toggle}><ReorderIcon /></button>
                    </div>
                </div>
                <div className="box">
                    <div className="search">
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            fullWidth
                            label="Search"
                        />
                    </div>
                </div><br></br>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
                <div className="card">
                    <p>Our Additional Tools</p>
                    <div className="box">

                        <input type="text" name='sidetool' rules={{ required: true, }} id="sidetool" placeholder="Masking Tool" required />
                    </div>
                    <div className="box">

                        <input type="text" name='si' rules={{ required: true, }} id="si" placeholder="Standalone Interview" required />
                    </div>
                </div>
                <div className="Cor">
                    <div className="Corner">
                        <KeyboardDoubleArrowLeftIcon />
                    </div>
                </div>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;