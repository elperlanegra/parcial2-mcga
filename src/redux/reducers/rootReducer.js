import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { providersReducer } from './providersReducer';
//import { providersReducer } from './providersReducer';

export const rootReducer = combineReducers({
  providers: providersReducer,
  products: productsReducer
});
