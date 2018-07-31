import React, { Component } from 'react';

import classes from './Others.css';
import Fries from '../../components/Fries/Fries';
import Return from '../../components/Navigation/Return/Return';
import BackDrop from '../../components/UI/Backdrop/Backdrop';
import Burger from '../../components/Burger/Burger';
// import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

class Others extends Component {
  
  

  render () {
    const fries = Object.keys(this.props.fries).map(key => (
      <p key={key}><strong>x{this.props.fries[key]}</strong> {key} </p>
    ))
    
    
    
    return (
      <div className={classes.Content} style={this.props.position}>
        <BackDrop show={this.props.show} clicked={this.props.hideSummary} />  
        <Return back={this.props.back} />
        <h3>Choisissez votre accompagnement</h3>
        <Fries add={this.props.othersMealAdded} />
        <div 
          className={classes.PriceBanner} 
          onClick={this.props.showSummary} 
          style={{ height: this.props.show ? '60%' : null }} 
          ref={this.props.refBanner}>
          <span>Total de votre commande : <strong>{this.props.price.toFixed(2)} €</strong></span>
          <div className={classes.Summary}>
            <span><strong>x1</strong></span>
            <Burger ingredients={this.props.ingredients} show={this.props.show} burger={this.props.burger}/>
          </div>
          {fries}
        </div>
        <button 
          className={classes.OrderButton}
          onClick={this.props.next}>
          SUIVANT
        </button>
      </div>
    )
  }
}

export default Others;