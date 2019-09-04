import React from 'react'

function Draft(props) {
    return(
        <p>{props.name} {props.position}<button value={props.id} type="button" onClick={(e) => props.draft(e.target.value)}>Draft</button></p>
    )
}

export default Draft