import { json } from 'react-router-dom';
import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO,
} from '../constants/CartConstants'
import axios from 'axios';

export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`/getallproductdetail/${id}`);
    console.log(data);

    dispatch({
        type: ADD_TO_CART,
        payload: {
            product: data.product._id,
            name: data.product.name,
            price: data.product.price,
            image: data.product.image.url,
            stock: data.product.Stock,
            quantity,
        },
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
};
export const saveShippingInfo = (data) => async (dispatch) => {
    console.log(data)
    dispatch({
        type: SAVE_SHIPPING_INFO,
        payload: data,
    });

    localStorage.setItem("shippingInfo", JSON.stringify(data));
};
export const RemoveItemFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type: REMOVE_CART_ITEM,
        payload: id,
    });

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}

