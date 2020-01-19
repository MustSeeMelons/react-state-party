const cartReducer = function(
    state = {
        items: {}
    },
    action
) {
    const itemId = action.payload && action.payload.item.id;
    if (itemId === undefined) {
        return state;
    }
    const item = state.items[itemId];

    switch (action.type) {
        case "add_to_cart":
            if (item) {
                const copy = {
                    ...state
                };

                copy.items[itemId].count++;

                return copy;
            } else {
                const copy = {
                    ...state
                };

                copy.items[itemId] = {
                    ...action.payload.item,
                    count: 1
                };

                return copy;
            }
        case "remove_from_cart":
            if (itemId) {
                const copy = {
                    ...state
                };

                if (copy.items[itemId].count === 1) {
                    delete copy.items[itemId];
                } else {
                    copy.items[itemId].count--;
                }
                return copy;
            }
            return state;
        default:
            return state;
    }
};

export { cartReducer };
