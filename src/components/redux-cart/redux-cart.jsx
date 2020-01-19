import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Cart } from "../cart/cart";
import { TotalCartAmountSelector } from "../../state/redux/selectors/selectors";

const ReduxCart = props => {
    return (
        <Cart
            items={props.items}
            total={props.total}
            onRemove={props.onRemove}
        />
    );
};

const mapStateToProps = state => {
    return {
        items: state.cartReducer.items,
        total: TotalCartAmountSelector(state)
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onRemove: item =>
            dispatch({ type: "remove_from_cart", payload: { item } })
    };
};

const ConnectedReduxCart = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxCart);

ConnectedReduxCart.propTypes = {
    items: PropTypes.object,
    total: PropTypes.number
};

export { ConnectedReduxCart as ReduxCart };
