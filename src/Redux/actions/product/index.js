import PRODUCT_ACTION_TYPES from './types';

export const createProduct = values => ({
  type: PRODUCT_ACTION_TYPES.CREATE_PRODUCT,
  data: { values },
});

export const createProductRequest = () => ({
  type: PRODUCT_ACTION_TYPES.CREATE_PRODUCT_REQUEST,
});

export const createProductSuccess = () => ({
  type: PRODUCT_ACTION_TYPES.CREATE_PRODUCT_SUCCESS,
});

export const createProductError = error => ({
  type: PRODUCT_ACTION_TYPES.CREATE_PRODUCT_ERROR,
  error,
});
