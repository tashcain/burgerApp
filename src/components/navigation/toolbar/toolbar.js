import React from 'react';
import './toolbar.css';
import Logo from '../../logo/logo'; 
import NavigationItems from '../navigationItems/navigationItems';


export default function Toolbar(props) {
    return (
        <header className="Toolbar">
            <div ><button onClick={props.clicked}>menu</button></div>
            <Logo height='80%'/>
            <nav>
                <NavigationItems/>
            </nav>
        </header>
    )
}
