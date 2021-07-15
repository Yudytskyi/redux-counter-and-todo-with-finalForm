import { takeLatest } from 'redux-saga/effects';
import * as productSagas from './productSagas';
import PRODUCT_ACTION_TYPES from '../actions/product/types';

function* rootSaga() {
  yield takeLatest(
    PRODUCT_ACTION_TYPES.CREATE_PRODUCT,
    productSagas.createProduct
  );
}

export default rootSaga;
