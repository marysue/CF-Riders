import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import authentication from './authentication';
import accessories from './accessories';
import bicycles from './bicycles';
import clothing from './clothing';
import selectedProduct from './selectedProduct';
import cart from './cart';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  authentication,
  clothing,
  bicycles,
  accessories,
  cart,
  selectedProduct
});

const configureStore = initialState => {
  console.log("Inside configureStore");
  return createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
  );
};

export default configureStore;
