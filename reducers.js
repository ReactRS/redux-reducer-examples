import './actions'
import { combineReducers } from 'redux'

const initialState = {
  cart: [],
  rawCost: 0,
  rawCostPlusTax: 0,
  costAfterDiscount: 0,
  discountsEnabled: false,
  discountRate: 0
}

function cartReducer(state = [], action){
  switch (action.type){
    case 'ADD_ITEM_TO_CART':
      Object.assign({}, state, {
        cart: [
          ...state.cart,
          inventory[action.name]
        ]
      });
    case 'REMOVE_ITEM_FROM_CART':
    default:
      return state;
  }
}

function discountReducer(state = {}, action){
  switch (action.type){
    case 'ENABLE_DISCOUNTS':
      return {
        discountsEnabled: true,
        discountRate: action.discountRate
      }
    case 'DISABLE_DISCOUNTS':
      return {
        discountsEnabled: false,
        discountRate: 0
      }
    default:
      return state;
  }
}

function priceCalcReducer(state = {}, action){
  switch (action.type){
    case 'EVAL_CART_TOTAL':
      state
    default:
      return state;
  }
}

const mainReducer = combineReducers({
  cartReducer,
  discountReducer,
  priceCalcReducer
});

export default mainReducer