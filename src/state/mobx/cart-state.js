import { observable, action, toJS, computed } from "mobx";

class CartState {
    @observable items = {};

    @action addItem = item => {
        const itemCopy = toJS(this.items);
        if (itemCopy[item.id]) {
            itemCopy[item.id].count++;
        } else {
            itemCopy[item.id] = {
                ...item,
                count: 1
            };
        }

        this.items = itemCopy;
    };

    @action removeItem = item => {
        const itemCopy = toJS(this.items);
        if (itemCopy[item.id].count === 1) {
            delete itemCopy[item.id];
        } else {
            itemCopy[item.id].count--;
        }

        this.items = itemCopy;
    };

    @computed get totalAmount() {
        return (
            Object.keys(this.items).reduce((acc, key) => {
                const item = this.items[key];
                return acc + item.price * item.count;
            }, 0) || 0
        );
    }
}

const instance = new CartState();
export { instance as CartState };
