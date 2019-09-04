import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Login from './component/Login'
import PlayerContainer from './component/PlayerContainer'
import LeagueContainer from './component/LeagueContainer'
import Signup from './component/Signup'
import DraftContainer from './component/DraftContainer'
import Reference from './component/Reference'

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

       leagues : {
         id: [],
         leagueName: [],
         people: []
       },
      //  playersValues: {
      //    displayName: [],
      //    position: [],
      //    playerId: [],
      //    drafted: false,
      //    team: [],
      //    byeweek: [],
      //    minPrice: [],
      //    maxPrice: [],
      //    avgPrice: []
      //  },
      //  playersCore : {
      //    displayName: [], 
      //    position: [],
      //    playerId: [],
      //    standDev: [],
      //    nerdRank: [],
      //    positionRank: [],
      //    overallRank: [],
      //   },
      //  playersStats: { 
      //    displayName: [],
      //    playerId:[],
      //    position:[],
      //    rushAtt: [],
      //    rushYards: [],
      //    fumbles: [],
      //    rec: [],
      //    recYards: [],
      //    recTd: [],
      //    attempts: [],
      //    passingYards: [],
      //    passingTd: [],
      //    passingInt: [],
      //    xp: [],
      //    fg: [],
      //    fantasyPoints: []
      //  },
       users: {
         id: "",
         username: "",
         RB1: ""

       },
       drafted : []
     }
  }

fetchLeagues = () => {
    fetch(leagueUrl)
    .then(res => res.json())
    .then(data => this.setLeagueState(data))
}

fetchValuePlayers = () => {
  return fetch(valueUrl)
  .then(res => res.json())
  .then(data => this.setPlayersValueState(data))
}

// fetchCorePlayers = () => {
//   return fetch(corePlayerUrl)
//   .then(res => res.json())
//   .then(data => this.setCorePlayersState(data))
// }

// fetchPlayerStats = () => {
//   return fetch(statUrl)
//   .then(res => res.json())
//   .then(data => this.setPlayerStatsState(data))
// }

componentDidMount() {
    this.fetchLeagues()
    // this.fetchPlayerStats()
    this.fetchValuePlayers()
    // this.fetchCorePlayers()
}

setLeagueState = (leagueInfo) => {
    leagueInfo.forEach(obj => {
        this.setState({
         leagues : {
           id: [...this.state.leagues.id, obj.id],
           leagues: [...this.state.leagues.leagueName, obj.league_name],
           people: [this.state.leagues.people, obj.people]
         }
        })
    })      
} 

setPlayersValueState = (playerValueInfo) => {
  playerValueInfo.forEach(obj => {
    this.setState({
      players : [...this.state.players, obj]
    })
  })
}

setLiveDraftedState = (ownerData) => {
  let obj = {ownerId: ownerData.owner_id, playerId: ownerData.player_id}
  this.setState({
    drafted:[...this.state.drafted, obj]
  })
}
  
findOwnedPlayers = () => {
  let drafted = this.state.drafted
  let ownerArray = drafted(player => player.ownerId == localStorage.user_id)
  let playerArray = ownerArray.map(obj => (
    obj.player_id)
  )
this.returnPlayerObjects(playerArray) 
}

returnPlayerObjects = (array) => {
  array[0].map(obj => obj.player_id)
}

  
// setCorePlayersState = (corePlayerInfo) => {
//   corePlayerInfo.forEach(obj => {
//     this.setState({
//       playersCore: {
//         displayName: [...this.state.playersCore.displayName, obj.display_name],
//         playerId : [...this.state.playersCore.playerId, obj.player_id],
//         position: [...this.state.playersCore.position, obj.position],
//         nerdRank: [...this.state.playersCore.nerdRank, obj.nerd_rank],
//         positionRank: [...this.state.playersCore.positionRank, obj.position_rank],
//         overallRank: [...this.state.playersCore.overallRank, obj.overall_rank],
//         standDev: [...this.state.playersCore.standDev, obj.stand_dev]
//     }
//   })
// })
// }

// setPlayerStatsState = (statsInfo) => {
//   statsInfo.forEach(obj => {
//     this.setState({
//       playersStats : {
//          rushAtt: [...this.state.playersStats.rushAtt, obj.rush_att],
//          rushYards: [...this.state.playersStats.rushYards, obj.rush_yards],
//          fumbles: [...this.state.playersStats.fumbles, obj.fumbles],
//          rec: [...this.state.playersStats.rec, obj.rec],
//          recYards: [...this.state.playersStats.recYards, obj.rec_yards],
//          recTd: [...this.state.playersStats.recTd, obj.rec_td],
//          attempts: [...this.state.playersStats.attempts, obj.attempts],
//          passingYards: [...this.state.playersStats.passingYards, obj.passing_yards],
//          passingTd: [...this.state.playersStats.passingTd, obj.passing_td],
//          passingInt: [...this.state.playersStats.passingInt, obj.passing_int],
//          xp: [...this.state.playersStats.xp, obj.xp],
//          fg: [...this.state.playersStats.fg, obj.fg],
//          fantasyPoints: [...this.state.playersStats.fantasyPoints, obj.fantasy_points]
//       }
//     })
//   })
// }

handleDraft = (player_id) => {
  return fetch(ownerUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept' : 'application/json'
    },
    body: JSON.stringify ({
      user_id: localStorage.user_id,
      player_id: player_id
    })
  })
  .then(res => res.json())
  .then(data => console.log(data))
  }

render() {
  return (
  <>
  <Router>
    <div className="App">
        <Route exact path='/' component={Login}/>
        <Route path="/players" render={() => 
        <PlayerContainer 
        stats={this.state}
        value={this.state}
        core={this.state.playersCore} handleDraft={this.handleDraft}/>
        }/>
        <Route path="/leagues" render={() => <LeagueContainer leagues={this.state}/>}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/draft" render={() => <DraftContainer players={this.state.players} draft={this.handleDraft}/>}/>
        <Route path="/owned" render={() => <Reference drafted={this.state.drafted}/>}/>
    </div>
  </Router>
 </>
  )
}
}



export default App;
