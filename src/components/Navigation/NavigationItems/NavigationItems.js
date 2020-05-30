import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Board</NavigationItem>
        <NavigationItem link="/games">Games</NavigationItem>
    </ul>
);

export default navigationItems;