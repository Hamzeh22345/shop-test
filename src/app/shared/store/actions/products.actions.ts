import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../models/product';

export const fetchProducts = createAction('[Products] fetchProducts');
export const fetchProductsSuccess = createAction('[Products] fetchProductsSuccess', props<{ products: IProduct[] }>());
export const counterIncrement = createAction('[Products] counterIncrement');
export const counterDecrement = createAction('[Products] counterDecrement');
export const searchProducts = createAction('[Products] searchProducts', props<{ search: string }>());
