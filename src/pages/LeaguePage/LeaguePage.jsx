import React from 'react';
import { Link } from "react-router-dom";


const LeaguePage = () => {
    return (

        <>
        <h3>Leagues</h3>
            <Link 
                to='/brazil'>
                    Brazil

            </Link><br></br><br></br>
            <Link 
                to='/england'>
                    England

            </Link><br></br><br></br>
            <Link 
                to='/spain'>
                    Spain

            </Link><br></br><br></br>
        <p>More coming soon!</p>
        </>

    )
}


export default LeaguePage;