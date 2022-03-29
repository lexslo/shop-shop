// store the data retrieved for products by Apollo in this global state
const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";

// take the list of categories retrieved from the server by Apollo 
// and store it in this global state
const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";

// select a category from the state created by the UPDATE_CATEGORIES action 
// and display products for that category from list from UPDATE_PRODUCTS action
const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";

const ADD_TO_CART = 'ADD_TO_CART';
const ADD_MULTIPLE_TO_CART = 'ADD_MULTIPLE_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';
const CLEAR_CART = 'CLEAR_CART';
const TOGGLE_CART = 'TOGGLE_CART';

export { 
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    ADD_TO_CART,
    ADD_MULTIPLE_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    CLEAR_CART,
    TOGGLE_CART
};