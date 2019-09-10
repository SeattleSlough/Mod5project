import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Login from './component/Login'
import PlayerContainer from './container/PlayerContainer'
import LeagueContainer from './container/LeagueContainer'
import Signup from './component/Signup'
import DraftContainer from './container/DraftContainer'
import Reference from './container/Reference'
import Data from './Data'


const leagueUrl = 'http://localhost:3000/fantasy_leagues'
const valueUrl = 'http://localhost:3000/player_values'
const corePlayerUrl = 'http://localhost:3000/core_players'
const statUrl = 'http://localhost:3000/player_stats'
const ownerUrl = 'http://localhost:3000/owners'

class App extends React.Component {
  constructor() {
     super();
     this.state = {
       players: [],
       loggedin: false,
       users: {
         id: "",
         username: "",
         RB1: ""

       },
       drafted : []
     }
  }

// fetchLeagues = () => {
//     fetch(leagueUrl)
//     .then(res => res.json())
//     .then(data => this.setLeagueState(data))
// }

componentDidMount() {
  this.setPlayersState()
    // this.fetchLeagues()
    // this.fetchDrafted()
    
}

setPlayersState = () => {
  Data.getCoreData().then(data => this.setState({
    players:[...data]
  })).then(data => this.fetchDrafted())
}

// setLeagueState = (leagueInfo) => {
//     leagueInfo.forEach(obj => {
//         this.setState({
//          leagues : {
//            id: [...this.state.leagues.id, obj.id],
//            leagues: [...this.state.leagues.leagueName, obj.league_name],
//            people: [this.state.leagues.people, obj.people]
//          }
//         })
//     })      
// } 

fetchDrafted = () => {
  return fetch(ownerUrl, {
    method: 'GET',
    headers: {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then(res => res.json())
  .then(data => this.setIdsOfOwned(data))
}

setIdsOfOwned = (array) => {
  let ownedIdArray = []
for(let i = 0; i < array.length; i++) {
  if(array[i].user_id == localStorage.user_id) {
    ownedIdArray.push(array[i].player_id)
  }
}
this.setPools(ownedIdArray)
}

setPools = (array) => {
  let rawDrafted = [];
  let available = []
  let object = {}

  this.state.players.map(obj => {
    for(let i = 0; i < array.length; i++) {
      if(obj.player_id == array[i]) {
        rawDrafted.push(obj)
      }}})
    
    for(let k = 0; k < this.state.players.length; k++) {
      if(array.indexOf(this.state.players[k].player_id) === -1) {
          available.push(this.state.players[k])
          }
         }

  let drafted = [...new Set(rawDrafted)]
  object[1] = drafted
  object[2] = available
  return object
}

handleDraft = (player_id) => {
  return fetch(ownerUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept' : 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify ({
      user_id: localStorage.user_id,
      player_id: player_id
    })
  })
  .then(res => res.json())
  .then(data => this.setLiveDraftedState(data))
  }

  setLoginStatus = (boolean) => {
  this.setState({
    loggedin: boolean
  })
  }

render() {
  return (
  <>
  <Router>
    <div className="App">
        <Route exact path='/' render={(props) => <Login {...props} setLoginStatus={this.setLoginStatus}/>}/>
        <Route path="/players" render={() => 
        <PlayerContainer 
        stats={this.state}
        value={this.state}
        core={this.state.playersCore} setLoginStatus={this.handleDraft}/>
        }/>
        <Route path="/leagues" render={() => <LeagueContainer leagues={this.state}/>}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/draft" render={() => <DraftContainer players={this.state.players} draft={this.handleDraft}/>}/>
        <Route path="/owned" render={() => <Reference drafted={this.state.drafted} mount={this.fetchDrafted} players={this.state.players}/>}/>
    </div>
  </Router>
 </>
  )
}
}



export default App;
