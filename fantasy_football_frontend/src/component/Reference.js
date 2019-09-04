import React from 'react'
import Owned from '../component/Owned'

class Reference extends React.Component {
    render() {
        return(
            <>
            {this.props.drafted.map(obj => (
                <Owned name={obj.display_name} id={obj.player_id}/>
            ))}
            </>
        )
    }
}

export default Reference