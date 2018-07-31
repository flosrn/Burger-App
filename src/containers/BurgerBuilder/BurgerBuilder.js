import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Others from '../Others/Others';


const INGREDIENT_PRICES = {
  salad: 0.7,
  cheese: 0.6,
  bacon: 1,
  meat: 2,
}

const OTHERS_MEAL_PRICE = {
  fries: 3,
  potatoes: 3,
  nuggets: 4
}

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    },
    fries: {
      fries: 0,
      potatoes: 0,
      nuggets: 0
    },
    totalPrice: 7.5,
    purchasable: false,
    purchasing: false,
    index: 1,
    showSummary: false,
    littleBurger: true,
    bannerShow: false
  }

  constructor(props) {
    super(props);
    this.banner = React.createRef();
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

  addOthersMealHandler = (type) => {
    this.setState((prevState) => {
      const updatedFries = {...prevState.fries};
      updatedFries[type] += 1;
      return {
        fries: updatedFries,
        totalPrice: prevState.totalPrice + OTHERS_MEAL_PRICE[type]
      }
    })
  }

  updatePurchaseState() {
    this.setState((prevState) => {
      const ingredients = {...prevState.ingredients}
      const sum = Object.keys(ingredients).map(igKey => {
        return ingredients[igKey];
      }).reduce((sum, el) => {
        return sum + el;
      }, 0);
      return {
        purchasable: sum > 0
      }
    })
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  purchaseContinueHandler = () => {
    alert('you continue');
  }

  showSummaryHandler = () => {
    this.setState({showSummary: true});
  }

  hideSummaryHandler = () => {
    console.log(this.state.index);
    this.setState({showSummary: false});
    // console.log(this.banner.current.clientHeight);
    if(this.state.index > 1) {
      console.log(this.banner.current.clientHeight);
      // if(this.banner.current.clientHeight < 100) {
      //   this.setState({littleBurger: false});
      //   console.log('test');
      // }
    }
  }

  next = () => {
    this.setState(prevState => {
      return {
        index: prevState.index + 1
      };
    });
  }

  back = () => {
    this.setState(prevState => {
      return {
        index: prevState.index - 1
      };
    });
  }
  
  render () {
    const disabledInfo = {
      ...this.state.ingredients
    }
    
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    let pos = null;

    if (this.state.index >= 2) {
      pos = { right: "0px" };
    }

    

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary 
            ingredients={this.state.ingredients} 
            price={this.state.totalPrice}
            purchaseCanceled={this.purchaseCancelHandler} 
            purchaseContinued={this.purchaseContinueHandler} />
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler} 
          disabled={disabledInfo}
          price={this.state.totalPrice} 
          purchasable={this.state.purchasable} 
          ordered={this.purchaseHandler} 
          next={this.next} />
          <Others 
            fries={this.state.fries}
            ingredients={this.state.ingredients}
            showSummary={this.showSummaryHandler} 
            hideSummary={this.hideSummaryHandler}
            price={this.state.totalPrice}
            othersMealAdded={this.addOthersMealHandler}
            position={pos} 
            back={this.back}
            show={this.state.showSummary} 
            burger={this.state.littleBurger}
            refBanner={this.banner}
            index={this.state.index}/>
      </Aux>
    ) 
  }
}

export default BurgerBuilder;