'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import NewProduct from '../../components/products/NewProduct';
import ProductsList from '@/components/products/ProductsList';
import ProductsContext from '@/context/ProductsContext';
import { useContext, useState } from 'react';

export default function Products() {
  const {
    products,
    removeProduct,
    selectedProduct,
    selectProduct,
    saveProduct,
  } = useContext(ProductsContext);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div>
      <h1 className="ml-10 -mt-6 text-xl font-black">Produtos</h1>
      <div className="flex gap-2 flex-col">
        <div className="flex justify-end -mt-6">
          <NewProduct
            product={selectedProduct}
            open={isDialogOpen}
            onOpenChange={setIsDialogOpen}
            saveProduct={saveProduct}
            selectProduct={selectProduct}
          />
        </div>
        <div className="flex gap-2 mt-2">
          <div className="hidden sm:block w-64">
            <Card>
              <CardHeader className="p-4 pl-6">
                <CardTitle className="text-xl">Marcas</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col p-0">
                <button className="hover:bg-primary/60 bg-primary text-white hover:text-white h-11 flex pl-6 p-2">
                  Boticário
                </button>
                <button className="hover:bg-primary  hover:text-white h-11 flex pl-6 p-2">
                  Natura
                </button>
              </CardContent>
            </Card>
          </div>
          <ProductsList
            products={products}
            removeProduct={removeProduct}
            selectProduct={(product) => {
              selectProduct(product);
              setIsDialogOpen(true);
            }}
          />
        </div>
      </div>
    </div>
  );
}
