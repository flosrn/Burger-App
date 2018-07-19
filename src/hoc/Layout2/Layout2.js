import React, { Component } from 'react';

import Aux from '../Aux/Aux';

import classes from './Layout2.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false,
    nextPage: false
  }

  sideDrawerToggleHandler = () => {
    this.setState(( prevState ) => {
      return {
        showSideDrawer: !prevState.SideDrawer
      }
    });
  }

  goToNextPage = () => {
    this.setState({nextpage: true});
  }

  sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer: false});
  }

  render () {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer showSideDrawer={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
        
      </Aux>
    )
  }
}

export default Layout;