import { combineReducers } from 'redux';
import { productsReducer, selectedProductReducer } from './product.reducer';

export { default as productSaga } from './product.saga';

const app = combineReducers({
  products: productsReducer,
  selectedProduct: selectedProductReducer,
});

export default app;
