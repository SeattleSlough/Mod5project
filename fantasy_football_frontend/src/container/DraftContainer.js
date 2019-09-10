import React from 'react'
import Draft from '../component/Draft'
import {Link} from 'react-router-dom'


class DraftContainer extends React.Component {

    render() {
        return(
            <div> 
            <Link className="draftLink" to='/owned'>Your Players</Link>
            <div id="draftContainer">
                {this.props.players.map(obj => (
                    <Draft 
                    name={obj["display_name"]} 
                    id={obj["player_id"]} 
                    position={obj["position"]} 
                    cost={obj["max_price"]}
                    rank={obj["overall_rank"]}
                    positionRank={obj["position_rank"]}
                    points={obj["fantasy_points"]} 
                    draft={this.props.draft}
                    />
                    ))}
            </div>
            </div>
        )
    }

}

export default DraftContainer