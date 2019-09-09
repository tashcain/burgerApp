import React from 'react';
import './logo.css';
import BurgerLogo from '../../assets/images/burger-logo.png.png';

export default function Logo(props) {
    return (
        <div className="Logo" style={{height: props.height}}>
            <img src={BurgerLogo} alt="MyBurger"/>
        </div>
    )
}
