// store the data retrieved for products by Apollo in this global state
const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";

// take the list of categories retrieved from the server by Apollo 
// and store it in this global state
const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";

// select a category from the state created by the UPDATE_CATEGORIES action 
// and display products for that category from list from UPDATE_PRODUCTS action
const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";

export { 
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
};