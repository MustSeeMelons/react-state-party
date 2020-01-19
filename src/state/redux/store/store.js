import { createStore, combineReducers, applyMiddleware } from "redux";
import { itemReducer } from "../reducers/itemReducer";
import { cartReducer } from "../reducers/cartReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({});

export const store = createStore(
    combineReducers({
        itemReducer,
        cartReducer
    }),
    composeEnhancers(applyMiddleware())
);
