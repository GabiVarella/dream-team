import React, { Component } from 'react';
import { getDreamTeam, saveDreamTeam, getRoster } from '../../services/api-search';



class DreamTeamPage extends Component {
    state = {
        formData: {
            goalkeeper: '',
            fieldPlayer1: '',
            fieldPlayer2: '',
            fieldPlayer3: '',
            fieldPlayer4: '',
            fieldPlayer5: '',
            fieldPlayer6: '',
            fieldPlayer7: '',
            fieldPlayer8: '',
            fieldPlayer9: '',
            fieldPlayer10: '',
            
        },
        players: [],
        
    }
    async componentDidMount() {
        const players = await getRoster();
        this.setState({players})
        //tryin got get starting lineup for dream team 
        const dreamTeam = await getDreamTeam();
        this.setState({dreamTeam})
        //============
        if (dreamTeam[0]) {this.setState({ formData: dreamTeam[0] });}
        
    }

    handleSaveDreamTeam = async formData => {
        await saveDreamTeam(formData)
        .then(()=>alert('changes saved'))
    }

    handleSubmit = e => {
        e.preventDefault();
        this.handleSaveDreamTeam(this.state.formData);

        this.props.history.push('/')
    };

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
        formData
        });
    };
    

    render() {
        const goalkeeperSelect =[<option key="select1" value="Please Select">Please Select</option>];
        const playerSelect = [<option key="select2" value="Please Select">Please Select</option>];
        
        this.state.players.forEach((player) => {
        if (player.player.type === 'goalkeeper') {goalkeeperSelect.push(<option key={player.player.name} value={player.player.name}>{player.player.name}</option>)}
            if (player.player.type !== 'goalkeeper') {playerSelect.push(<option key={player.player.name} value={player.player.name}>{player.player.name}</option>)}
        })
        

        return (
            <>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="goalkeeper">Goalkeeper</label>
                <select name="goalkeeper" id='goalkeeper'onChange={this.handleChange} placeholder="Goalkeeper" value={this.state.formData.goalkeeper} className="browser-default">
                    {goalkeeperSelect}
                </select>
                <label htmlFor="fieldPlayer1">Choose a Player</label>
                <select name="fieldPlayer1" id='fieldPlayer1'onChange={this.handleChange} placeholder="Left Fullback" value={this.state.formData.fieldPlayer1} className="browser-default">
                    {playerSelect}
                </select>
                <label htmlFor="fieldPlayer2">Choose a Player</label>
                <select name="fieldPlayer2" id='fieldPlayer2'onChange={this.handleChange} placeholder="Left Center Fullback" value={this.state.formData.fieldPlayer2} className="browser-default">
                    {playerSelect}
                </select>
                <label htmlFor="fieldPlayer3">Choose a Player</label>
                <select name="fieldPlayer3" id='fieldPlayer3'onChange={this.handleChange} placeholder="Right Center Fullback" value={this.state.formData.fieldPlayer3} className="browser-default">
                    {playerSelect}
                </select>
                <label htmlFor="fieldPlayer4">Choose a Player</label>
                <select name="fieldPlayer4" id='fieldPlayer4'onChange={this.handleChange} placeholder="Right Fullback" value={this.state.formData.fieldPlayer4} className="browser-default">
                    {playerSelect}
                </select>
                <label htmlFor="fieldPlayer5">Choose a Player</label>
                <select name="fieldPlayer5" id='fieldPlayer5'onChange={this.handleChange} placeholder="Left Midfielder" value={this.state.formData.fieldPlayer5} className="browser-default">
                    {playerSelect}
                </select>
                <label htmlFor="fieldPlayer6">Choose a Player</label>
                <select name="fieldPlayer6" id='fieldPlayer6'onChange={this.handleChange} placeholder="Left Center Midfielder" value={this.state.formData.fieldPlayer6} className="browser-default">
                    {playerSelect}
                </select>
                <label htmlFor="fieldPlayer7">Choose a Player</label>
                <select name="fieldPlayer7" id='fieldPlayer7'onChange={this.handleChange} placeholder="Right Center Midfielder" value={this.state.formData.fieldPlayer7} className="browser-default">
                    {playerSelect}
                </select>
                <label htmlFor="fieldPlayer8">Choose a Playerr</label>
                <select name="fieldPlayer8" id='fieldPlayer8'onChange={this.handleChange} placeholder="Right Midfielder" value={this.state.formData.fieldPlayer8} className="browser-default">
                    {playerSelect}
                </select>
                <label htmlFor="fieldPlayer9">Choose a Player</label>
                <select name="fieldPlayer9" id='fieldPlayer9'onChange={this.handleChange} placeholder="Left Center Forward" value={this.state.formData.fieldPlayer9} className="browser-default">
                    {playerSelect}
                </select>
                <label htmlFor="fieldPlayer10">Choose a Player</label>
                <select name="fieldPlayer10" id='fieldPlayer10'onChange={this.handleChange} placeholder="Right Center Forward" value={this.state.formData.fieldPlayer10} className="browser-default">
                    {playerSelect}
                </select>
                <button type="submit">Save Changes</button>
                </form>
                
                      
            </>
        )
    }
}



export default DreamTeamPage;