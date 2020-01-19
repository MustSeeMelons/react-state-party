/**
 * Returns an array showing which items are in the cart,
 * Possible bottleneck if there a lot of items, should be returned by the
 * backend, or calculated on a per page basis
 */
export const ItemInCartCheckSelector = state => {
    return state.itemReducer.items.reduce((acc, cartItem) => {
        acc[cartItem.id] = state.cartReducer.items[cartItem.id] !== undefined;

        return acc;
    }, {});
};

/**
 * Returns the amount of each item in the cart,
 * if its not in the cart, 0 is returned
 */
export const CartItemAmountSelector = state => {
    return state.itemReducer.items.reduce((acc, cartItem) => {
        acc[cartItem.id] = state.cartReducer.items[cartItem.id]
            ? state.cartReducer.items[cartItem.id].count
            : 0;

        return acc;
    }, {});
};

/**
 * Calculated the total price amount for the cart
 */
export const TotalCartAmountSelector = state => {
    return (
        Object.keys(state.cartReducer.items).reduce((acc, key) => {
            const item = state.cartReducer.items[key];
            return acc + item.price * item.count;
        }, 0) || 0
    );
};
