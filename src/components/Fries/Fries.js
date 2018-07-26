import React, { Component } from 'react';

import classes from './Fries.css';
import fries from '../../assets/images/fries/fries.png';
import potatoes from '../../assets/images/fries/potatoes.png';
import nuggets from '../../assets/images/fries/nuggets.png';

const othersMeal = [
  {label: 'Frites', type: 'fries', price: '3', path: fries},
  {label: 'Potatoes', type: 'potatoes', price: '3', path: potatoes},
  {label: 'Nuggets', type: 'nuggets', price: '4', path: nuggets},
]

class Fries extends Component {

  click = (type) => {
    const mealType = this[`mealType${type}`];
    mealType.style.backgroundColor = "#b3dcff";
  }

  render () {
    return (
      <div className={classes.FriesContainer}>
        {othersMeal.map(meal => (
          <div onClick={() => { this.props.add(meal.type); this.click(meal.type) }} ref={refMeal => {this[`mealType${meal.type}`] = refMeal}} key={meal.label}>
            <img src={meal.path} alt={meal.label}/>
            <p>{meal.label}</p>
            <span>{meal.price} €</span>
          </div>
        ))}
      </div>
    )
  }
}

export default Fries;
