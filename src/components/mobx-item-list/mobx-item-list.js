import React from "react";
import { ItemListState } from "../../state/mobx/items-state";
import { observer } from "mobx-react";
import { Item } from "../item/item";
import { CartState } from "../../state/mobx/cart-state";

const MobXItemList = observer(() => {
    return (
        <div>
            {ItemListState.items.map((item, index) => {
                return (
                    <Item
                        key={index}
                        item={item}
                        amounts={ItemListState.itemAmounts}
                        onAdd={() => {
                            CartState.addItem(item);
                        }}
                        onRemove={() => {
                            CartState.removeItem(item);
                        }}
                    />
                );
            })}
        </div>
    );
});

export { MobXItemList };
