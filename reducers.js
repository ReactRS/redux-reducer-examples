import './actions'

const initialState = {
  cart: [],
  rawCost: 0,
  rawCostPlusTax: 0,
  costAfterDiscount: 0,
  discountsEnabled: false,
  discountRate: 0
}



function mainReducer(state = initialState, action){
  switch (action.type){
    case 'ADD_ITEM_TO_CART':
      Object.assign({}, state, {
        cart: [
          ...state.items,
          inventory[action.name]
        ]
      });
    case 'REMOVE_ITEM_FROM_CART':
      Object.assign({}, state, {


      });
    case 'APPLY_DISCOUNT_TO_CART':
      Object.assign({}, state,{
        discountRate: action.discountRate
      }); 
    case 'EVAL_CART_TOTAL':
      Object.assign({}, state,{
        rawCost:(function(){
          let priceArray = state.cart.map((item) => {
            return item.price;
          });
          return priceArray.reduce((price1, price2) => {
            return price1 + price2;
          });
        })();
      }); 
    case 'ENABLE_DISCOUNTS':
      Object.assign({}, state,{
        discountsEnabled:true
      }); 
    case 'DISABLE_DISCOUNTS':
      Object.assign({}, state,{
        discountsEnabled:false
      }); 
    default:
      return state
  }

}



