import React from 'react'

function Item (props) {

    return (<p>{props.name}<button value={props.name} type="button" onClick={(e) => props.handleDraft(e.target.value)}>Draft</button></p>
    )
}

export default Item