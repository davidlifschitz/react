import React, {Fragment} from 'react'
import Item from './Item'
function Section(props)
{
    let {name, items} = props
    console.log(name,items)
    return (
        <div className = "menu-section">
            <Fragment>
            <h2>{props.name.toUpperCase()}</h2>
            {items.map((item,index) => 
            {
                return (<Item
                key={index}
                item = {item} />)
            })}
        </Fragment>
        </div>
        
    )    
}


export default Section