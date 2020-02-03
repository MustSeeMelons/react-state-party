import React, { useContext } from "react";
import { Item } from "../item/item";
import { GlobalContext } from "../../state/local/context";

const SimpleItemList = props => {
    const context = useContext(GlobalContext);

    const amounts = context.items.reduce((acc, item) => {
        acc[item.id] = context.cart[item.id] ? context.cart[item.id].count : 0;

        return acc;
    }, {});

    return (
        <div>
            {context.items.map((item, index) => {
                return (
                    <Item
                        key={index}
                        item={item}
                        amounts={amounts}
                        onAdd={() => {
                            context.addToCart(item);
                        }}
                        onRemove={() => {
                            context.removeFromCart(item);
                        }}
                    />
                );
            })}
        </div>
    );
};

export { SimpleItemList };
