import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

// create new Context object
const StoreContext = createContext();
// React component that makes state data accessible to all components
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        categories: [],
        currentCategory: ''
    });

    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
}

const useStoreContext = () => {
    return useContext(StoreContext);
}

export { StoreProvider, useStoreContext };
