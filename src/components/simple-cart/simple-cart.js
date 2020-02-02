import React, { useContext } from "react";
import { Cart } from "../cart/cart";
import { GlobalContext } from "../../state/local/context";
import PropTypes from "prop-types";

const SimpleCart = props => {
    const context = useContext(GlobalContext);

    const total =
        Object.keys(context.cart).reduce((acc, key) => {
            const item = context.cart[key];
            return acc + item.price * item.count;
        }, 0) || 0;

    return (
        <Cart items={context.cart} total={total} onRemove={props.onRemove} />
    );
};

SimpleCart.propTypes = {
    onRemove: PropTypes.func
};

export { SimpleCart };
