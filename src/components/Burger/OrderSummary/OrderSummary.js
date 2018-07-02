import React from 'react';

import Aux from '../../../hoc/Aux';
// import classes from './OrderSummary.css';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
      </li>
    )
  })
  return (
    <Aux>
      <h3>Votre commande</h3>
      <p>Un délicieux burger avec les ingrédients suivant:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Passer au paiement</p>
    </Aux>
  )
};

export default orderSummary;