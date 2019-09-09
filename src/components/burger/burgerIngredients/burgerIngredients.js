import React, { Component } from 'react';
import propTypes from 'prop-types';
import './burgerIngredients.css';
export default class BurgerIngredients extends Component {
    render(props) {
        
            let ingredients = null;

            switch(this.props.type) {
                case ('burger-bottom'):
                    ingredients = <div className = "BreadBottom"></div>;
                    break;
                case ('burger-top'):
                    ingredients = <div className = "BreadTop">
                        <div className ="Seeds1"></div>
                        <div className ="Seeds2"></div>
                    </div>;
                    break;
                case ('meat'):
                    ingredients = <div className = "Meat"></div>;
                    break;
                case ('cheese'):
                    ingredients = <div className = "Cheese"></div>;
                    break;
                case ('bacon'):
                    ingredients = <div className = "Bacon"></div>;
                    break;
                case ('salad'):
                    ingredients = <div className = "Salad"></div>;
                    break;                        
                default:
                    ingredients = null;
                }
        
                return ingredients;
        
    }
}


 BurgerIngredients.propTypes = {
     type : propTypes.string.isRequired
 }