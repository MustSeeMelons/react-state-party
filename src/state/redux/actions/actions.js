export const setItems = function(items) {
    return {
        type: "set_items",
        payload: {
            items: items
        }
    };
};

export const addToCart = function(item) {
    return {
        type: "add_to_cart",
        payload: {
            item
        }
    };
};

export const removeFromCart = function(item) {
    return {
        type: "remove_from_cart",
        payload: {
            item
        }
    };
};
