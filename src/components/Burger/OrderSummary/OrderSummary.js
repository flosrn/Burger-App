import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';
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
      <p><strong>Prix total: {props.price.toFixed(2)} €</strong></p>
      <p>Passer au paiement</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>ANNULER</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUER</Button>
    </Aux>
  )
};

export default orderSummary;