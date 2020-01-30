import { observable, action, computed } from "mobx";
import { ITEMS_ARRAY } from "../../config";
import { CartState } from "./cart-state";

class ItemListState {
    @observable
    items;

    constructor() {
        this.items = [...ITEMS_ARRAY];
    }

    @action
    addItem = item => {
        this.items.push(item);
    };

    @computed get itemAmounts() {
        return this.items.reduce((acc, item) => {
            acc[item.id] = CartState.items[item.id]
                ? CartState.items[item.id].count
                : 0;

            return acc;
        }, {});
    }
}

const instance = new ItemListState();

export { instance as ItemListState };
