import React from "react";
import "./cart.css";
import PropTypes from "prop-types";
import { Item } from "../item/item";

const hasItems = items => {
    return Object.keys(items).length > 0;
};

const Cart = props => {
    const title = hasItems(props.items) ? (
        <p className="cart-title">Your cart: </p>
    ) : (
        <p className="cart-title">Your cart is empty.</p>
    );

    return (
        <div className="cart">
            {title}
            {Object.keys(props.items).map((key, index) => {
                return (
                    <Item
                        inCart={true}
                        key={index}
                        item={props.items[key]}
                        onRemove={() => props.onRemove(props.items[key])}
                    />
                );
            })}
            <p className="cart-total">{`Total: ${props.total.toFixed(2)}$`}</p>
        </div>
    );
};

Cart.propTypes = {
    items: PropTypes.object,
    total: PropTypes.number,
    onRemove: PropTypes.func
};

export { Cart };
