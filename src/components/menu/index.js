import React, { Fragment } from 'react'
import Section from './Section'
import "./menu.css"

let ourMenu = {
    appetizers: [{	
      name: 'Egg Rolls',
      price: 3.99,
      vegetarian: false
    }, {
      name: 'Spring Roll',
      price: 1.99,
      vegetarian: true
    }, {
      name: 'Spare Ribs',	
      price: 5.99,	
      vegetarian: false	
    }],	
    soups: [{	
      name: 'Egg Drop',	
      price: 3.99,	
      vegetarian: false	
    }, {	
      name: 'Wonton',	
      price: 3.99,	
      vegetarian: false	
    }, {	
      name: 'Vegetable',	
      price: 3.99,	
      vegetarian: true	
    }],	
    entrees: [{	
      name: 'Kung Pao Chicken',	
      price: 12.99,	
      vegetarian: false	
    }, {	
      name: 'Buddha\'s Delight',	
      price: 11.99,	
      vegetarian: true	
    }, {	
      name: 'General Tso Chicken',	
      price: 12.99,	
      vegetarian: false	
    }, {	
      name: 'Sesame Beef',	
      price: 14.99,	
      vegetarian: false	
    }],
    drinks: [
        {
            name: "thai iced tea",
            price: 3.00,
            vegetarian: true
        }]	
  }

  function Menu(props)
  {
      let sections = Object.keys(ourMenu)
      console.log(sections)
    return (
      <Fragment>
         <h1>Chopstix menu.</h1>
         {sections.map((section,index) => {
            return (
            <Section 
            key={index}
            items={ourMenu[section]}
            name = {section} />
            )
         })}
      </Fragment>
      )
  }
  export default Menu