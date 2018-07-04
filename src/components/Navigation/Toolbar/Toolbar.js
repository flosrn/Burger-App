import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>Menu</div>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;