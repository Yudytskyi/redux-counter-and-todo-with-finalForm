import { put } from 'redux-saga/effects';
import {
  createProductRequest,
  createProductSuccess,
  createProductError,
} from '../actions/product';

const API = { createProduct: () => {} };

export function* createProduct({ values }) {
  yield put(createProductRequest());
  try {
    const { data } = yield API.createProduct(values);
    yield put(createProductSuccess(data));
  } catch (error) {
    yield put(createProductError(error));
  }
}
