import React from 'react';
import './navigationItems.css';
import NavigationItem from './navigationItem/navigationItem';

const NavigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link='/' active>
            burgerBuilder
        </NavigationItem>
        <NavigationItem link='/'>
             Checkout
        </NavigationItem>
    </ul>
)


export default NavigationItems;
