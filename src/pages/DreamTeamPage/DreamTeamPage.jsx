import React, { Component } from 'react';
import { getDreamTeam, removeFromDreamTeam } from '../../services/api-search';


class DreamTeamPage extends Component {
    state = {
        players: []
    }
    async componentDidMount() {
        const players = await getDreamTeam();
        this.setState({players})
    }
    handleRemoveFromDreamTeam = async playerId => {
        await removeFromDreamTeam(playerId);
        this.setState(state => ({
            players: state.players.filter(p => p._id !== playerId)
          }), () => this.props.history.push('/dreamteam'));
    }

    render() {
        return (
            <>
                    <table class="table table-striped ">
                        <thead>
                            <tr>
                                <th>Name</th>
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
                                <th scope="row">{player.player.name}</th>
                                <td>{player.player.type}</td>
                                <td>{player.teams[0].name}</td>
                                <td>{player.statistics.totals.goals_scored}</td>
                                <td>{player.statistics.totals.assists}</td>
                                <td><button type="button" className="btn btn-outline-danger" onClick={()=>this.handleRemoveFromDreamTeam(player._id)}>X</button></td>
                            </tr>
                        )}
                        </tbody>
                    </table>
 
                        {/* // <div key={player._id}> 
                        //     <div>{player.player.name} &nbsp;&nbsp;
                        //         <button className="red sm-btn" onClick={()=>this.handleRemoveFromDreamTeam(player._id)}>X</button>
                        //     </div>
                        // </div> 
                 */}
                
            </>
        )
    }
}

export default DreamTeamPage;