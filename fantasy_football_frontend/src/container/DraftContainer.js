import React from 'react'
import Draft from '../component/Draft'
import {Link} from 'react-router-dom'


class DraftContainer extends React.Component {

    render() {
        return(
            <div> 
            <Link to='/owned'>Your Players</Link>
            <div>
                {this.props.players.map(obj => (
                    <Draft name={obj["display_name"]} id={obj["player_id"]} position={obj["position"]} draft={this.props.draft}/>
                    ))}
            </div>
            </div>
        )
    }

}

export default DraftContainer