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
  searchProductsRequest,
} from '../actions/products.actions';

export const initialState: State = {
  products: [],
  counter: 0,
  isLoading: false,
  search: '',
  filteredProducts: [],
  pageSize: 10,
  dataLength: 0,
  isSearching : false,
};

export const productsReducer = createReducer(
  initialState,
  on(fetchProducts, (state, { pageSize }) => ({
    ...state,
    pageSize,
    isLoading: true,
  })),
  on(fetchProductsSuccess, (state, { products, pageSize }) => ({
    ...state,
    pageSize,
    products,
    dataLength: products.length,
    isLoading: false,
    filteredProducts: products,
  })),
  on(counterIncrement, (state) => ({ ...state, counter: state.counter + 1 })),
  on(counterDecrement, (state) => ({
    ...state,
    counter: Math.max(0, state.counter - 1),
  })),
  on(searchProductsRequest, (state) => ({
    ...state,
    isSearching:true,
   
  })),
  on(searchProducts, (state, { search }) => ({
    ...state,
    isSearching:false,
    filteredProducts: state.products.filter((product) =>
      
      product.title.toLowerCase().includes(search.toLowerCase())
    ),
  })),
  on(pageSizeChange, (state, { pageSize }) => ({
    ...state,
    pageSize,
  }))
);
