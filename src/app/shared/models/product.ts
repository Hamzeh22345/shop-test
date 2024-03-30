export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export interface State {
  products: IProduct[];
  filteredProducts: IProduct[]
  counter: number;
  isLoading: boolean;
  search: string;
}
