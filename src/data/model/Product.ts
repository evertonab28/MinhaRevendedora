import Category from './Category';
import Manufacturer from './Manufacturer';

export default interface Product {
  id: number;
  name: string;
  description: string;
  catalogId: string;
  price: number;
  quantity: number;
  image: string;
  manufacturer: Manufacturer;
  category: Category;
  createdAt: Date;
  updatedAt: Date;
}
