import {
  SELECT_PRODUCT,
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCT,
  LOAD_PRODUCT_ERROR,
  DELETE_PRODUCT_SUCCESS,
} from './product.actions';

// Estado com ambas as chaves para compatibilidade com o hook
const initial = { data: [], list: [], loading: false, error: '' };

export function productsReducer(state = initial, action) {
  switch (action.type) {
    case LOAD_PRODUCT:
      return { ...state, loading: true, error: '' };

    case LOAD_PRODUCT_SUCCESS: {
      const data = Array.isArray(action.payload) ? action.payload : [];
      return { ...state, data, list: data, loading: false, error: '' };
    }

    case LOAD_PRODUCT_ERROR:
      return { ...state, loading: false, error: action.payload || 'Erro' };

    case DELETE_PRODUCT_SUCCESS: {
      const id = action.payload;
      const data = state.data.filter((p) => String(p.id) !== String(id));
      return { ...state, data, list: data };
    }

    default:
      return state;
  }
}

// Mantém os exports já existentes
export function selectedProductReducer(state = {}, action) {
  switch (action.type) {
    case SELECT_PRODUCT:
      return action.payload ? { ...action.payload } : null;
    default:
      return state;
  }
}