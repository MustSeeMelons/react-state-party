import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { ReduxList } from "../components/redux-item-list/redux-item-list";
import { store } from "../state/redux/store/store";
import { ReduxCart } from "../components/redux-cart/redux-cart";

function ReduxApp() {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <div>This is the Redux barn</div>
                    <ReduxList />
                    <ReduxCart />
                </header>
            </div>
        </Provider>
    );
}

export default ReduxApp;
