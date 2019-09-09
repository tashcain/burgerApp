import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/burger/burger';
import BuildControls from '../../components/burger/buildControls/buildControls';
import Modal from  '../../components/UI/modal/modal';
import OrderSummary from '../../components/burger/orderSummary/orderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat:1.3,
    bacon:0.7
}

export default class BurgerBuilder extends Component {
    constructor(props){
        super(props);
        this.state ={
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4,
            purchasable: false,
            purchasing: false
        }
    }

    updatePurchasable (ingredients){
      
        const sum = Object.keys(ingredients) 
            .map(igkey => {
                return ingredients[igkey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
            this.setState({purchasable: sum > 0})
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1;
        const updatedingredients = {
            ...this.state.ingredients
        };
         updatedingredients[type] = updatedCount;
         const priceAddition = INGREDIENT_PRICES[type];
         const oldPrice = this.state.totalPrice;
         const newPrice = oldPrice + priceAddition;
         this.setState({
             totalPrice: newPrice,
             ingredients: updatedingredients
         })
         this.updatePurchasable(updatedingredients);
            }
            removeIngredientHandler = (type) => {
                
                const oldCount = this.state.ingredients[type];
                if(oldCount <= 0){
                    return;
                }
                const updatedCount = oldCount - 1;
                const updatedingredients = {
                    ...this.state.ingredients
                };
                 updatedingredients[type] = updatedCount;
                 const priceDeduction = INGREDIENT_PRICES[type];
                 const oldPrice = this.state.totalPrice;
                 const newPrice = oldPrice - priceDeduction;
                 this.setState({
                     totalPrice: newPrice,
                     ingredients: updatedingredients
                 })
                 this.updatePurchasable(updatedingredients);
                   
                }
    purchasehandler = () =>{
        this.setState({
            purchasing:true
        })
    }    
    
    purchaseCanceler= () => {
        this.setState({
            purchasing:false
        })
    }

    purchaseContinued = ()=>{
        alert("you continued");
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
            <Modal show={this.state.purchasing} modalClosed={this.purchaseCanceler}>
                <OrderSummary ingredients={this.state.ingredients } 
                purchasecancelled={this.purchaseCanceler}
                purchaseContinued={this.purchaseContinued}
                price={this.state.totalPrice}/>
            </Modal> 

            <Burger  ingredients = {this.state.ingredients}/>
            <BuildControls
            ingredientAdded = {this.addIngredientHandler}
            ingredientreduced = {this.removeIngredientHandler}
            disabled = {disabledInfo}
            purchasable={this.state.purchasable}
            ordered={this.purchasehandler}
            price={this.state.totalPrice}/>
            </Aux>
           
        )
    }
}
