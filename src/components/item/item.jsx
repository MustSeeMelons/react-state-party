import React from "react";
import "./item.css";
import PropTypes from "prop-types";

const Item = props => {
    const amount = props.amounts ? props.amounts[props.item.id] : "-";
    const showOnRemove = props.inCart || props.amounts[props.item.id] > 0;
    const price = props.inCart
        ? props.item.count * props.item.price
        : props.item.price;

    return (
        <div
            className={`item ${props.inCart ? "in-cart" : ""}`}
            onClick={props.inCart ? undefined : e => props.onAdd(props.item)}
        >
            <p className="item-name">{props.item.name}</p>
            {props.inCart && (
                <p>{`${props.item.count} x ${props.item.price.toFixed(2)}`}</p>
            )}
            <p className="item-price">{`${price.toFixed(2)}$`}</p>
            {showOnRemove && (
                <div
                    className="item-remove"
                    onClick={e => {
                        e.stopPropagation();
                        props.onRemove(props.item);
                    }}
                >
                    {amount}
                </div>
            )}
        </div>
    );
};

Item.propTypes = {
    item: PropTypes.object,
    onAdd: PropTypes.func,
    onRemove: PropTypes.func,
    inCart: PropTypes.bool,
    amounts: PropTypes.object
};

export { Item };
