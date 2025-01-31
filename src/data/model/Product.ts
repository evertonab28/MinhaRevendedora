import Category from './Category';
import Manufacturer from './Manufacturer';

export default interface Product {
  id: string;
  name: string;
  catalogId: string;
  price: number;
  quantity?: number;
  image?: string;
  manufacturer?: Manufacturer;
  category?: Category;
  createdAt?: Date;
  updatedAt?: Date;
}
