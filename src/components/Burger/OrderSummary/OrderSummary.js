import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';
// import classes from './OrderSummary.css';

class OrderSummary extends Component {
  componentWillUpdate() {
    // console.log('[OrderSummary] WillUpdate');
  }

  render () {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
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
        <p><strong>Prix total: {this.props.price.toFixed(2)} €</strong></p>
        <p>Passer au paiement</p>
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>ANNULER</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUER</Button>
      </Aux>
    )
  }
}

export default OrderSummary;