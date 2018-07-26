import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
  { label: 'Salade', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Fromage', type: 'cheese' },
  { label: 'Steak', type: 'meat' },
]

const  buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Prix: <strong>{props.price.toFixed(2)}</strong> €</p>
    {controls.map(ctrl => (
      <BuildControl 
        key={ctrl.label} 
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]} />
    ))}
    <button 
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}>
      COMMANDER
    </button>
    <button 
      className={classes.OrderButton}
      onClick={props.next}>
      NEXT
    </button>
 
  </div>
)

export default buildControls;