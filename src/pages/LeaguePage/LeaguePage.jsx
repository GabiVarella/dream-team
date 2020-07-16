import React from 'react';
import { Link } from "react-router-dom";


const LeaguePage = () => {
    return (

        <>
        <ul class="collection with-header">
            <li class="collection-header"><h4>Leagues</h4></li>
            <li class="collection-item">
                <Link
                    to='/brazil'
                    >Brazil 🇧🇷
                </Link>
            </li>
            <li class="collection-item">
                <Link
                    to='/england'
                    >England
                </Link>
            </li>
            <li class="collection-item">
                <Link
                    to='/spain'
                    >Spain
                </Link>
            </li>
            
        </ul>
        </>

    )
}


export default LeaguePage;