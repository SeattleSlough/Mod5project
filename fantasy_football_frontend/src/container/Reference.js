import React from 'react'
import Owned from '../component/Owned'
import {Link} from 'react-router-dom'

class Reference extends React.Component {

    constructor() {
        super();
        this.state = {
            owned: []
        }
    }

    componentDidMount() {
        this.props.mount()
        this.findOwnedPlayers()
    }

    componentWillReceiveProps(props) {
        this.findOwnedPlayers()
    }

    findOwnedPlayers = () => {
        let playerArray = []
        let drafted = this.props.drafted
        for(let i = 0; i < drafted.length; i++){
            if(drafted[i].user_id == localStorage.user_id) {
                playerArray.push(drafted[i].player_id)
            }
        }
        this.returnPlayerObjects(playerArray, this.props.players) 
      }
      
      returnPlayerObjects = (arrayOfIds, arrayOfPlayerObjects) => {
        let found = []
        arrayOfPlayerObjects.map(item => {
          for(let i = 0; i < arrayOfIds.length; i++){
            if(item.player_id == arrayOfIds[i]){
              found.push(item)
            }
        }
    })
    let uniqueFound = [...new Set(found)]
    console.log(uniqueFound)
    this.setOwnedState(uniqueFound)
      }

    setOwnedState = (array) => {
            this.setState({
                owned: [...array]
            }, () => console.log(this.state.owned))
        // })
    }

    render() {
        return(
            <>
            <Link to='/draft'>Back To Draft</Link>
            {this.state.owned.map(obj => (
                <Owned name={obj.display_name} id={obj.player_id}/>
            ))}
            </>
        )
    }
}

export default Reference