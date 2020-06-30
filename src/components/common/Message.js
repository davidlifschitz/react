import React, {Component} from 'react'

// function Message(props)
// {
//     return <p style={{color: props.color}}> {props.message}</p>
// }
class Message extends Component
{
    render()
    {
        let {messageObject} = this.props
        console.log(this.props)
        // return <p style={{color: color}}> {message}</p>
        return <div><p>Hello</p><p style={{color:messageObject.color}}>{messageObject.message}</p></div>
    }
    
}

export default Message