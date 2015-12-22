
export const inventory = {
  "toothbrush": {
    name: "Toothbrush",
    price: 0.99
  },
  "pencil": {
    name: "4B Pencil",
    price: 1.99
  },
  "pastrami": {
    name: "Pastrami",
    price: 9.99
  }
}

/*
 *
state = {
  cart:[ { items } ],
  rawCost:Number,
  rawCostPlusTax:Number,
  costAfterDiscount:Number,
  discountsEnabled:Boolean,
  discountRate:( 0 < rate < 100)
}
 *
 */

export function addItemToCart(name){
  return {
    type: "ADD_ITEM_TO_CART",
    name
}

export function removeItemFromCart(name){
  return {
    type: "REMOVE_ITEM_FROM_CART",
    name
}

export function applyDiscountToCart(discountRate){
  return {
    type: "APPLY_DISCOUNT_TO_CART",
    discountRate
  }
}

export function evalCartTotal(){
  return {
    type: "EVAL_CART_TOTAL"
  }
}

export function enableDiscounts(){
  return {
    type: "ENABLE_DISCOUNTS"
  }
}

export function disableDiscounts(){
  return {
    type: "DISABLE_DISCOUNTS"
  }
}
