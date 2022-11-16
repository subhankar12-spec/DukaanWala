import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  getProductDetailsReducer,
  getProductReducer,
} from './reducers/productReducer';
import { userReducer } from './reducers/userReducer';
import { cartReducer } from './reducers/cartReducer';
import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
} from './reducers/orderReducer';

const reducer = combineReducers({
  getProducts: getProductReducer,
  getProductDetails: getProductDetailsReducer,
  user: userReducer,
  cart: cartReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
