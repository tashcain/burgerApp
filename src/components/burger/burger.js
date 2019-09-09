import React from 'react';
import './burger.css';
import BurgerIngredients from './burgerIngredients/burgerIngredients';

export default function Burger(props) {  
    let transformedingredients = Object.keys(props.ingredients)
          .map(igKey => {
              return [...Array(props.ingredients[igKey])].map((_,i) => {
                  console.log(igKey+i);
                 return  <BurgerIngredients key ={igKey + i} type={igKey}/>;
              })
          })
          .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

        if(transformedingredients.length === 0) {
            transformedingredients = <p>start adding ingredients</p>;
        }
          
          
    return ( 
        <div className= "burgerdiv">
            <BurgerIngredients type="burger-top"/>
            {transformedingredients}
            <BurgerIngredients type="burger-bottom"/>
        </div>
    )
  
}
