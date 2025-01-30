'use client';

import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';
import Product from '@/data/model/Product';
import productsList from '@/data/constants/products';

interface ProductsContextProps {
  products: Product[];
  selectedProduct: Partial<Product> | null;
  removeProduct: (product: Product) => void;
  selectProduct: (product: Partial<Product> | null) => void;
  saveProduct: (product: Product) => void;
}

interface ProductsProviderProps {
  children: ReactNode;
}

const ProductsContext = createContext<ProductsContextProps>({
  products: [],
  selectedProduct: null,
  removeProduct: () => {},
  selectProduct: () => {},
  saveProduct: () => {},
});

export default ProductsContext;

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>(productsList);
  const [selectedProduct, setSelectedProduct] =
    useState<Partial<Product> | null>(null);

  const removeProduct = useCallback(
    (product: Product) => {
      const newProducts = products.filter((p) => p.id !== product.id);
      setProducts(newProducts);
    },
    [products]
  );

  const selectProduct = useCallback((product: Partial<Product> | null) => {
    setSelectedProduct(product);
  }, []);

  const saveProduct = useCallback(
    (product: Product) => {
      const existingUser = products.find((p) => p.id === selectedProduct?.id);

      if (existingUser) {
        const newProducts = products.map((p) => {
          return p.id === selectedProduct?.id ? product : p;
        });
        setProducts(newProducts);
      } else {
        setProducts([...products, product]);
        console.table(product.name);
      }
    },
    [products, selectedProduct]
  );

  const contextProducts = useMemo(
    () => ({
      products,
      removeProduct,
      selectProduct,
      selectedProduct,
      saveProduct,
    }),
    [products, removeProduct, selectProduct, selectedProduct, saveProduct]
  );

  return (
    <ProductsContext.Provider value={contextProducts}>
      {children}
    </ProductsContext.Provider>
  );
}
