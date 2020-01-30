import { ITEMS_ARRAY } from "../../../config";

const itemReducer = function(
    state = {
        items: ITEMS_ARRAY
    },
    action
) {
    switch (action.type) {
        default:
            return state;
    }
};

export { itemReducer };
