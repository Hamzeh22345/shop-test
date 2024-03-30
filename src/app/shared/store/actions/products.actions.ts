import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../models/product';

export const fetchProducts = createAction('[Products] fetchProducts',props<{pageSize:number}>());
export const fetchProductsSuccess = createAction('[Products] fetchProductsSuccess', props<{ products: IProduct[],pageSize:number}>());
export const counterIncrement = createAction('[Products] counterIncrement');
export const counterDecrement = createAction('[Products] counterDecrement');
export const searchProducts = createAction('[Products] searchProducts', props<{ search: string }>());
export const pageSizeChange = createAction('[Products] pageSizeChange',props<{pageSize: number}>());

