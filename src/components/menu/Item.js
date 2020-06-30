import React, { Fragment } from 'react'

function Item(props) {
    let { item } = props
    return (
        <div className="menu-item">

            <h3>{item.name}</h3>
            <p>{item.price}</p>

        </div>

    )
}

export default Item