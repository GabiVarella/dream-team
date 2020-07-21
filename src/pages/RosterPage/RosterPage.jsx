import React, { Component } from 'react';
import { getRoster, removeFromRoster } from '../../services/api-search';




class RosterPage extends Component {
    state = {
        players: []
    }
    async componentDidMount() {
        const players = await getRoster();
        this.setState({players})
    }
    handleRemoveFromRoster = async playerId => {
        await removeFromRoster(playerId);
        this.setState(state => ({
            players: state.players.filter(p => p._id !== playerId)
          }), () => this.props.history.push('/roster'));
    }

    render() {
        return (
            <>
                   
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th>Name</th>
                                <th>Nationality</th>
                                <th>Position</th>
                                <th>Team</th>
                                <th>Goals</th>
                                <th>Assists</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.players.map((player) =>
                            <tr>
                                <th scope="row">{player.player.first_name} {player.player.last_name}</th>
                                <td>{player.player.country_code}</td>
                                <td>{player.player.type}</td>
                                <td>{player.teams[0].name}</td>
                                <td>{player.statistics.totals.goals_scored}</td>
                                <td>{player.statistics.totals.assists}</td>
                                <td><button type="button" className="btn btn-outline-danger" onClick={()=>this.handleRemoveFromRoster(player._id)}>X</button></td>
                            </tr>
                        )}
                        </tbody>
                    </table> 
            </>
        )
    }
}
export default RosterPage;