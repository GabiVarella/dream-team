import React, { Component } from 'react';
import { getDreamTeam } from '../../services/api-search';


class DreamTeamPage extends Component {
    state = {
        players: []
    }
    async componentDidMount() {
        const players =await getDreamTeam();
        this.setState({players})
    }

    render() {
        return (
            <>
                 {this.state.players.map((player) =>
                    <div key={player._id}> 
                        <div>{player.player.name} &nbsp;&nbsp;
                            <button className="red sm-btn" onClick={()=>this.handleRemoveFromDreamTeam(player._id)}>X</button>
                        </div>
                    </div>
                )}
                
                
            </>
        )
    }
}

export default DreamTeamPage;