import React from "react";
import "./App.css";
import { MobXItemList } from "../components/mobx-item-list/mobx-item-list";
import { MobXCart } from "../components/mobx-cart/mobx-cart";

function MobXApp() {
    return (
        <div className="App">
            <header className="App-header">
                <div>This is the MobX barn</div>
            </header>
            <MobXItemList />
            <MobXCart />
        </div>
    );
}

export default MobXApp;
