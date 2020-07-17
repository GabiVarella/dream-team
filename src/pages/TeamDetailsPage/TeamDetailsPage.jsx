import React, { Component } from 'react';
import { getTeamInfo } from '../../services/api-search';
import { addToRoster } from '../../services/api-search';
import { getImg } from '../../services/team-lists';
import { Link } from 'react-router-dom';

class TeamDetailsPage extends Component {
    state = {
        teamDetails: [],
        teamImg: ''
    }

    async componentDidMount() {
        const teamDetails = await getTeamInfo(this.props.match.params.id);
        const teamImg = getImg(this.props.match.params.id)
        this.setState({teamDetails, teamImg})
    }

    render() {
        return (
            <>
                {this.state.teamDetails.manager ?
            
                <>
                    <div class="col s12 m7">
                        <h2 class="header">{this.state.teamDetails.team.name}</h2>
                        <div class="card horizontal">
                            <div class="card-image">
                                <img height="250vmin" src={this.state.teamImg} alt=""/>
                            </div>
                            <div class="card-stacked">
                                <div class="card-content">
                                    <div>Location: {this.state.teamDetails.venue.city_name}</div><br/>                        
                                    <div>Venue: {this.state.teamDetails.venue.name}</div><br/>
                                    <div>Capacity: {this.state.teamDetails.venue.capacity}</div><br/>
                                    <div>Manager: {this.state.teamDetails.manager.name}</div><br/>                      
                                </div>
                                <div class="card-action">
                                    <Link
                                        players={this.state.teamDetails.players}
                                        to={{
                                            pathname: `/details/team/${this.state.teamDetails.team.id}/players`,
                                            //pass players here??
                                        }}>
                                        <a href="">ROSTER</a>

                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.state.teamDetails.players.map((player) =>
                            <ul class="collection">
                                <li class="collection-item avatar">
                                    <img src={this.state.teamImg} alt="" class="circle" />
                                    <span class="title">
                                        <Link
                                            to={{
                                            pathname: `/details/player/${player.id}`,
                                            player: {player}
                                            }}
                                            >{player.name}</Link></span>
                                    <p>{player.jersey_number}</p>
                                    <p>{player.type}</p>
                                <a href="#!" class="secondary-content" onClick={() => addToRoster(player.id)}><i class="small material-icons">grade</i></a>
                                </li>
                            </ul>
                    )}
                </>
                :

                <div class="preloader-wrapper big active">
                    <div class="spinner-layer spinner-blue">
                        <div class="circle-clipper left">
                            <div class="circle"></div>
                        </div><div class="gap-patch">
                            <div class="circle"></div>
                    </div><div class="circle-clipper right">
                        <div class="circle"></div>
                    </div>
                    </div>
                </div>
                }
            </>
        )
    }
}

export default TeamDetailsPage;

