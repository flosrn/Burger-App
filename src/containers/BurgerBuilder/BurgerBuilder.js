import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENT_PRICES = {
  salad: 0.7,
  cheese: 0.6,
  bacon: 1,
  meat: 2,
}

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    },
    totalPrice: 7.5,
    purchasable: false,
    purchasing: false
  }
  

  addIngredientHandler = (type) => {
    this.setState((prevState) => {
      const updatedIngredients = {...prevState.ingredients};
      updatedIngredients[type] += 1;
      return {
        ingredients: updatedIngredients,
        totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type]
      }
    })
    this.updatePurchaseState();
  }

  removeIngredientHandler = (type) => {
    this.setState((prevState) => {
      const updatedIngredients = {...prevState.ingredients};
      updatedIngredients[type] -= 1;
      if (updatedIngredients[type] < 0) {
        return;
      }
      return {
        ingredients: updatedIngredients,
        totalPrice: prevState.totalPrice - INGREDIENT_PRICES[type]
      }
    })
    this.updatePurchaseState();
  }

  updatePurchaseState() {
    this.setState((prevState) => {
      const ingredients = {...prevState.ingredients}
      console.log('ingredients: ', ingredients);
      const sum = Object.keys(ingredients).map(igKey => {
        return ingredients[igKey];
      }).reduce((sum, el) => {
        return sum + el;
      }, 0);
      console.log('sum: ', sum);
      return {
        purchasable: sum > 0
      }
    })
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }
  
  render () {
    const disabledInfo = {
      ...this.state.ingredients
    }
    console.log('disabledInfo: ', disabledInfo);
    
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing}>
          <OrderSummary ingredients={this.state.ingredients}/>
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler} 
          disabled={disabledInfo}
          price={this.state.totalPrice} 
          purchasable={this.state.purchasable} 
          ordered={this.purchaseHandler} />
      </Aux>
    )
  }
}

export default BurgerBuilder;