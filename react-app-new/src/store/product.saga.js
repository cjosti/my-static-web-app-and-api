import { all, call, put, takeEvery } from 'redux-saga/effects';
import { loadProductsApi, deleteProductApi } from './product.api';
import {
  LOAD_PRODUCT,
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCT_ERROR,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
} from './product.actions';

export function* loadingProductsAsync() {
  try {
    const data = yield call(loadProductsApi);
    yield put({ type: LOAD_PRODUCT_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: LOAD_PRODUCT_ERROR, payload: err?.message || 'Erro ao carregar' });
  }
}

export function* watchLoadingProductsAsync() {
  yield takeEvery(LOAD_PRODUCT, loadingProductsAsync);
}

export function* deletingProductAsync({ payload: id }) {
  try {
    yield call(deleteProductApi, id); // 200/204 esperado
    // Atualiza o estado removendo localmente
    yield put({ type: DELETE_PRODUCT_SUCCESS, payload: id });
    // Opcional: re-carregar do servidor para garantir sync
    // yield put({ type: LOAD_PRODUCT });
  } catch (err) {
    console.error('[SAGA] delete error', err);
  }
}

export function* watchDeletingProductAsync() {
  yield takeEvery(DELETE_PRODUCT, deletingProductAsync);
}

export function* productSaga() {
  yield all([
    watchLoadingProductsAsync(),
    watchDeletingProductAsync(),
  ]);
}

export default productSaga;