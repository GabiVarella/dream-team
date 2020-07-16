import React from 'react';

const NavBar = ({ user, handleLogout }) => {
    let nav = user ?
    <>
        <nav>
            <div className="nav-wrapper">
                <ul id="nav-mobile" className="right">
                    <li><a href="/dream_team" className="nav-link">Dream Team</a></li>
                    <li><a href="/roster" className="nav-link">My Roster</a></li>
                    <li><a href="/leagues" className="nav-link">Leagues</a></li>
                    <li><a href="/search" className="nav-link">Search</a></li>
                    <li><a href=" " className="nav-link">Loggedin as <span color= "black">{user.name}</span></a></li>
                    <li><a href=" " className="nav-link" onClick={handleLogout}>Log Out</a></li>
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