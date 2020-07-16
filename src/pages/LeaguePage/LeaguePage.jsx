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
                    ><h5>Brazil <span role="img" aria-label="brazil-flag">🇧🇷</span></h5>
                </Link>
            </li>
            <li class="collection-item">
                <Link
                    to='/england'
                    ><h5>England <span role="img" aria-label="england-flag">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span></h5>
                </Link>
            </li>
            <li class="collection-item">
                <Link
                    to='/spain'
                    ><h5>Spain <span role="img" aria-label="spain-flag">🇪🇸</span></h5>
                </Link>
            </li>
            
            <li class="collection-item"><h6>More Coming Soon...</h6></li>
        </ul>
        </>

    )
}


export default LeaguePage;