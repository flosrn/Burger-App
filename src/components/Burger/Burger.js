import React from 'react';

import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />
    });
  }).reduce((arr, el) => {
    return arr.concat(el);
  }, [])

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add some ingredients</p>
  }
  
  return (
    <div 
      className={classes.Burger} 
      style={{
        width: props.show || props.burger ? '80px' : null,
        height: props.show || props.burger ? '80px' : null,
        overflow: props.show || props.burger ? 'hidden' : null 
      }}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default burger;
