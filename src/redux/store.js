import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { CategoryReducer } from './reducer/CategoryReducer';
import { ProductReducer, productDetailReducer } from './reducer/ProductReducer';
import { cartReducer } from './reducer/CartReducer';
import { userReducer, userRegisterReducer } from './reducer/UserReducer';
import { myOrdersReducer, newOrderReducer } from './reducer/OrderReducer';

const reducer = combineReducers({
    c: CategoryReducer,
    pd: ProductReducer,
    pdetail: productDetailReducer,
    cart: cartReducer,
    auth: userRegisterReducer,
    user: userReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer


})
let initialState = {
    cart: {
        cartItems: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [],
        shippingInfo: localStorage.getItem("shippingInfo")
            ? JSON.parse(localStorage.getItem("shippingInfo"))
            : {},
    },
}

//middleware thunk

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;