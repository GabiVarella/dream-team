import React, { Component } from 'react';
import { getPlayerInfo } from '../../services/api-search';

class PlayerDetailsPage extends Component {
    state = {
        playerDetails: [],
        role: []
    }

    async componentDidMount() {
        const playerDetails = await getPlayerInfo(this.props.match.params.id);
        const role = playerDetails.roles.filter((role => role.active === "true"));
        this.setState({playerDetails, role});
    }


    render() {
        return (
            
            <>
                {this.state.playerDetails.player ?
                <>
                  <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Team</th>
                                <th>#</th>
                                <th>Position</th>
                                <th>Matches</th>
                                <th>Goals</th>
                                <th>Assists</th>
                                <th>Red Cards</th>
                                <th>DOB</th>
                                <th>Height</th>
                                <th>Weight</th>
                                
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <th scope="row">{this.state.playerDetails.player.name}</th>
                                <td>{this.state.role[0].team.name}</td>
                                <td>{this.state.role[0].jersey_number}</td>
                                <td>{this.state.playerDetails.player.type}</td>
                                <td>{this.state.playerDetails.statistics.totals.matches_played}</td>
                                <td>{this.state.playerDetails.statistics.totals.goals_scored}</td>
                                <td>{this.state.playerDetails.statistics.totals.assists}</td>
                                <td>{this.state.playerDetails.statistics.totals.red_cards}</td>
                                <td>{this.state.playerDetails.player.date_of_birth}</td>
                                <td>{this.state.playerDetails.player.height} cm</td>
                                <td>{this.state.playerDetails.player.weight} kg</td>
                            </tr>
                            
                        </tbody>
                    </table>

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

export default PlayerDetailsPage;

