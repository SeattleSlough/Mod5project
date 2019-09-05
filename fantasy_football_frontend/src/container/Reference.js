import React from 'react'
import Owned from '../component/Owned'
import {Link} from 'react-router-dom'
import { arrayPattern } from '@babel/types';

class Reference extends React.Component {

    constructor() {
        super();
        this.state = {
            owned : []
        }
    }

    componentDidMount() {
        this.findOwnedPlayers()
    }

    findOwnedPlayers = () => {
        let drafted = this.state.drafted
        let ownerArray = drafted.find(player => player.ownerId == localStorage.user_id)
        let playerArray = ownerArray.map(obj => (
          obj.player_id)
        )
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
       console.log(found)
       this.setOwnedState(found)
      }

    setOwnedState = (array) => {
        array.map(obj => {
            this.setState({
                owned: [...this.state.owned, obj]
            })
        })
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