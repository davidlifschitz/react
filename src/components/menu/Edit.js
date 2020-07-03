import React from 'react'
import './edit.css'
class Edit extends React.Component 
{ 
    constructor(props) 
    { super(props) 
        this.state = { 
            name : '',
            category: 'entrees',
            price: '9.99', 
            message: '',
        } 
        this.handleChange = this.handleChange.bind(this)   
        this.handleSubmit = this.handleSubmit.bind(this)   
    } 
    handleSubmit(e)
    {
        let {name, price, category} = this.state
        e.preventDefault()
    
        // lets build up our item like:
        /*
        {
            "category": "entrees",
            "item": 
            {
                "name": "House Fried Rice"
                "price": 9.99
                "vegetarian": false
            }
        }
        */
       let data = {category, item: {name, price}}
       console.log('Save my item to Firebase here', data)
       fetch('https://restaurant-api-js01lc-app.appspot.com/menu/add', 
       {
           method: 'POST', //GET, POST, PUT, PATCH, DELETE
           headers: 
           {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(data) //must match  "Content-Type"
       })
       .then(response => {
           if(response.status === 200)
           { 
               console.log('item saved')
               this.setState({ name: '', message: 'Item Saved!'})
               setTimeout(() => {
                   this.setState({message: ''})
               }, 6000)
           } else {
            console.log('item not saved')
           }
           
       })
       .catch(err => console.log('Got back error: ' + err))
    }
    handleChange(event) {
        let newState = {}
        newState[event.target.name] = event.target.value
        // {price: 11:99}
        // {name: "Mu Shu"}
        // {category: "appetizers"}
        this.setState(newState)
       }
    
       componentDidMount()
       {
           if(window.myname)
           {
               this.setState({name: window.myname})
           }
       }
       componentWillUnmount()
       {
           window.myname = this.state.name
       } 
       render() { 
           let {name, price, category, message} = this.state
           return (
               <section>
                   <h1>Add new Menu Item:</h1>
                   <hr />
                   <form onSubmit={this.handleSubmit}>
                    <label>
                        Category:
                        <select name="category" value= {category} onChange={this.handleChange}>
                            <option value="appetizers">  Appetizers</option>
                            <option value="soups">  Soups</option>
                            <option value="entrees">  Entrees</option>
                            <option value="drinks">  Drinks</option>
                        </select>
                    </label>
                       <label htmlFor="name">
                           Name:
                 <input name="name" type="text" value={name}
                               onChange={this.handleChange} />
                       </label>
                       <label htmlFor="price">
                           Price:
                           <input name="price" value = {price} onChange={this.handleChange} type="number" min="0.00" max="99.99" step="0.01"/>
                       </label>
                       <br />
                       <button className='save-button' type="submit">SAVE</button>
                   </form>
                   {message &&
                   <h2>{message}</h2>}
               </section>
               )   
            } 
        }

export default Edit