import React from "react";
import { connect } from "react-redux";
import { Item } from "../item/item";
import {
    ItemInCartCheckSelector,
    CartItemAmountSelector
} from "../../state/redux/selectors/selectors";

const ReduxItemList = props => {
    return (
        <div>
            {props.items.map((item, index) => {
                return (
                    <Item
                        key={index}
                        item={item}
                        onAdd={props.addToCart}
                        onRemove={props.removeFromCart}
                        contained={props.contains[item.id]}
                        amounts={props.amounts}
                    />
                );
            })}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        items: state.itemReducer.items,
        contains: ItemInCartCheckSelector(state),
        amounts: CartItemAmountSelector(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addToCart: item => dispatch({ type: "add_to_cart", payload: { item } }),
        removeFromCart: item =>
            dispatch({ type: "remove_from_cart", payload: { item } })
    };
};

const ConnectedReduxItemList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxItemList);

export { ConnectedReduxItemList as ReduxList };
