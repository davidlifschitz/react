import React, { Fragment } from 'react'

function Item(props) {
    let { item } = props
    return (
        <div className="menu-item">

            <h3>{item.name}</h3>
            <p>{Number(item.price).toFixed(2)}</p>

        </div>

    )
}

export default Item