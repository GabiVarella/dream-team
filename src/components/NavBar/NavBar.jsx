import React from 'react';
import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
    let nav = user ?
    <>
        <nav>
            <div className="nav-wrapper green ">
                <a href="#!" class="brand-logo"> <i class="material-icons black-text">stars</i>DREAM TEAM</a>
                <ul id="nav-mobile" className="right">
                    <li><a href="/dreamteam" className="nav-link black-text">Dream Team</a></li>
                    <li><a href="/roster" className="nav-link black-text">My Roster</a></li>
                    <li><a href="/leagues" className="nav-link black-text">Leagues</a></li>
                    <li><a href="/search" className="nav-link black-text">Search</a></li>
                    <li><a href=" " className="nav-link black-text">Loggedin as <span >{user.name}</span></a></li>
                    <li><a href=" " className="nav-link" onClick={handleLogout}>LOG OUT</a></li>
                </ul>
            </div>
        </nav>
    </>
    :
    <>
        <nav>
            <div className="nav-wrapper">
                <ul id="nav-mobile" className="right">
                    <li><a href="/login" className="nav-link">Log In</a></li>
                    <li><a href="/signup" className="nav-link">Sign Up</a></li>
                </ul>
            </div>
        </nav>
    </>

    return (
    <>
        {nav}
    </>
    )
}

export default NavBar;