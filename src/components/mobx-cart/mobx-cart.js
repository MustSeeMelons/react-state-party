import React from "react";
import { observer } from "mobx-react";
import { Cart } from "../cart/cart";
import { CartState } from "../../state/mobx/cart-state";

const MobXCart = observer(() => {
    return (
        <Cart
            items={CartState.items}
            total={CartState.totalAmount}
            onRemove={CartState.removeItem}
        />
    );
});

export { MobXCart };
