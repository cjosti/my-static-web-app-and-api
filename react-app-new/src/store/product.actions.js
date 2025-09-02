export const LOAD_PRODUCT = 'LOAD_PRODUCT';
export const LOAD_PRODUCT_SUCCESS = 'LOAD_PRODUCT_SUCCESS';
export const LOAD_PRODUCT_ERROR = 'LOAD_PRODUCT_ERROR';

export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_ERROR = 'DELETE_PRODUCT_ERROR';

export const ADD_PRODUCT = '[Products] ADD_PRODUCT';
export const ADD_PRODUCT_SUCCESS = '[Products] ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_ERROR = '[Products] ADD_PRODUCT_ERROR';

// Defina as constantes de UPDATE para evitar no-undef
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_ERROR = 'UPDATE_PRODUCT_ERROR';

export const SELECT_PRODUCT = '[Product] SELECT_PRODUCT';

export const selectProductAction = (product) => ({
  type: SELECT_PRODUCT,
  payload: product,
});
export const loadProductsAction = () => ({ type: LOAD_PRODUCT });

export const updateProductAction = (product) => ({
  type: UPDATE_PRODUCT,
  payload: product,
});

// Envie apenas o id para alinhar com o saga (DELETE_PRODUCT -> payload: id)
export const deleteProductAction = (id) => ({
  type: DELETE_PRODUCT,
  payload: id,
});

export const addProductAction = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});
