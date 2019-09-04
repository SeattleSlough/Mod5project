import React from 'react'
import Owned from '../component/Owned'
import {Link} from 'react-router-dom'

class Reference extends React.Component {
    render() {
        return(
            <>
            <Link to='/draft'>Back To Draft</Link>
            {this.props.drafted.map(obj => (
                <Owned name={obj.display_name} id={obj.player_id}/>
            ))}
            </>
        )
    }
}

export default Reference