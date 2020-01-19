const itemReducer = function(
    state = {
        items: [
            {
                id: 0,
                name: "Milk",
                price: 1.99
            },
            {
                id: 1,
                name: "Eggs",
                price: 3.45
            },
            {
                id: 2,
                name: "Bread",
                price: 1.0
            },
            {
                id: 3,
                name: "Butter",
                price: 2.5
            }
        ]
    },
    action
) {
    switch (action.type) {
        default:
            return state;
    }
};

export { itemReducer };
