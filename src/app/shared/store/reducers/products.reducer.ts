import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { IProduct, State } from '../../models/product';
import {
  counterDecrement,
  counterIncrement,
  fetchProducts,
  fetchProductsSuccess,
  pageSizeChange,
  searchProducts,
} from '../actions/products.actions';

export const initialState: State = {
  products: [],
  counter: 0,
  isLoading: false,
  search: '',
  filteredProducts: [],
  pageSize: 10,
};

export const productsReducer = createReducer(
  initialState,
  on(fetchProducts, (state) => ({ ...state, isLoading: true })),
  on(fetchProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    isLoading: false,
    filteredProducts: products,
  })),
  on(counterIncrement, (state) => ({ ...state, counter: state.counter + 1 })),
  on(counterDecrement, (state) => ({
    ...state,
    counter: Math.max(0, state.counter - 1),
  })),
  on(searchProducts, (state, { search }) => ({
    ...state,
    filteredProducts: state.products.filter(product =>
      product.title.toLowerCase().includes(search.toLowerCase())
    ),
  })),
  on(pageSizeChange, (state, { pageSize }) => ({
    ...state,
    pageSize
  }))
);
