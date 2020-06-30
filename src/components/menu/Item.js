import React, { Fragment } from 'react'

function Item(props)
{
    let {item } = props
    return (
        <div className= "menu-item">
        <Fragment>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
        </Fragment>
        </div>
        
    )
}

export default Item