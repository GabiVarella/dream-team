import React, { Component } from 'react';
import { getAllBrazil } from '../../services/team-lists';
import { Link } from 'react-router-dom';


class BrazilPage extends Component {
    state = {
        teams: getAllBrazil()
    }

    render () {
        return(
            <>
                <h4>Campeonato Brasileiro</h4>
                {this.state.teams.map((team) =>


                        <ul class="collection">
                            <li class="collection-item avatar">
                            <Link
                                to={{
                                pathname: `/details/team/${team.id}`,
                                team: {team}
                                }}
                            >
                                <img src={team.img} alt="" class="circle" />
                            </Link>
                                <span class="title">{team.name}</span>
                                <p>Something About the Team</p>
                                <a href="#!" class="secondary-content"><i class="medium material-icons">grade</i></a>
                            </li>
                        </ul>


                )}
            </>   
         )
    }
}


export default BrazilPage;