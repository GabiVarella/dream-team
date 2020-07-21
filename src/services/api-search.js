import tokenService from '../services/tokenService'


export function getTeamInfo(teamId) {
    return fetch(`/api/americas/team/${teamId}`)
    .then(res => res.json());
}


export function getPlayerInfo(playerId) {
    return fetch(`/api/americas/player/${playerId}`)
    .then(res => res.json());
}

export function addToRoster(playerId) {
    return fetch(`/api/americas/player/add/${playerId}`,{
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()}
    }, {mode: "cors"})
    .then(res => res.json());
}

export function getRoster(){
    return fetch(`/api/americas/roster/`,{
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }, {mode: "cors"})
    .then(res => res.json());
}

export function removeFromRoster(playerId){
    return fetch(`/api/americas/roster/${playerId}`,{
        method: "DELETE",
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }, {mode: "cors"})
    .then(res => res.json());
}

//======================
export function getDreamTeam(){
    return fetch(`/api/americas/dreamteam`, {
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }, {mode: "cors"})
    .then(res => res.json());
}

export function saveDreamTeam(dreamTeam){
    return fetch(`/api/americas/dreamteam`, {
        method: "POST",
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(dreamTeam)
    }, {mode: "cors"})
    .then(res => res.json());
}





