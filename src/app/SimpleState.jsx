import React, { useState } from "react";
import "./App.css";
import { GlobalContext } from "../state/local/context";
import { SimpleItemList } from "../components/simple-item-list/simple-item-list";
import { ITEMS_ARRAY } from "../config";
import { SimpleCart } from "../components/simple-cart/simple-cart";

function SimpleStateApp() {
    const addToCart = item => {
        setState(prevState => {
            const copy = { ...prevState };
            if (copy.cart[item.id]) {
                copy.cart[item.id].count++;
            } else {
                copy.cart[item.id] = { ...item, count: 1 };
            }

            return {
                ...copy
            };
        });
    };

    const removeFromCart = item => {
        setState(prevState => {
            const copy = { ...prevState };
            if (copy.cart[item.id].count === 1) {
                delete copy.cart[item.id];
            } else {
                copy.cart[item.id].count--;
            }

            return {
                ...copy
            };
        });
    };

    const [state, setState] = useState({
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        items: [...ITEMS_ARRAY],
        cart: {}
    });

    return (
        <GlobalContext.Provider value={state}>
            <div className="App">
                <header className="App-header">
                    <div>This is the Simple barn</div>
                </header>
                <SimpleItemList />
                <SimpleCart />
            </div>
        </GlobalContext.Provider>
    );
}

export default SimpleStateApp;
