import React from 'react'

function Draft(props) {
    return(
        <div className="draftPlayer"><strong>{props.name}</strong> 
        <br />
        {props.position}
            <div>
                overall rank: {props.rank}
                <br />
                position rank: {props.positionRank}
                <br />

                max cost: {props.cost}
                <br />
                projected points: {props.points}
            </div>
            <br />
            <button value={props.id} type="button" onClick={(e) => props.draft(e.target.value)}>Draft</button>
        </div>
    )
}

export default Draft