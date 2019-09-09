import React from 'react';
import './buildControls.css';
import BuildControl from './buildControl/buildControl';
 


const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const BuildControls = (props) => (
    
         <div className="BuildControls">
         <p>current price: <strong>{props.price.toFixed(2)}</strong></p>

          {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label= {ctrl.label}
            type={ctrl.type}
            added={() => props.ingredientAdded(ctrl.type)}
            reduce={() => props.ingredientreduced(ctrl.type)}
            disabled = {props.disabled[ctrl.type]} />
          ))} 
          <button className="OrderButton" disabled={!props.purchasable } onClick={props.ordered}>ORDER NOW  </button>
        </div> 
    )

export default BuildControls;