import React from 'react'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../components/Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="leftside">
                <button><ArrowBackIcon /></button>
                <p><h3>Add Candidates</h3></p>
            </div>
            <div className="rightside">
                <HelpOutlineIcon /><NotificationsNoneIcon /><AccountCircleIcon /><p>User</p>
            </div>
        </div>
    )
}

export default Navbar