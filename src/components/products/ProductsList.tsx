'use client';

import Product from '@/data/model/Product';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Image from 'next/image';
import Real from '@/utils/Real';
import { Edit, Trash } from 'lucide-react';

export interface ProductsListProps {
  products: Product[];
  removeProduct?: (product: Product) => void;
  selectProduct: (product: Product) => void;
}

export default function ProductsList(props: ProductsListProps) {
  return (
    <div className="flex-grow border rounded-md">
      <Table>
        <TableHeader>
          <TableRow className="">
            <TableHead className="w-[720px] font-bold text-zinc-700">
              PRODUTO
            </TableHead>
            <TableHead className="font-bold text-zinc-700">PREÇO</TableHead>
            <TableHead className="font-bold text-zinc-700">ESTOQUE</TableHead>
            <TableHead className="w-[80px] text-right font-bold text-zinc-700">
              AÇÕES
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.products.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center font-black text-lg">
                Nenhum produto cadastrado
              </TableCell>
            </TableRow>
          ) : (
            props.products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="flex justify-self-start items-center flex-row-reverse gap-2">
                  {product.name}
                  <Image
                    src={product?.image || '/default-image.jpg'}
                    alt="Imagem do produto"
                    width={80}
                    height={80}
                  />
                </TableCell>
                <TableCell>{Real.format(product.price)}</TableCell>
                <TableCell className="text-right">
                  {product.quantity && product.quantity > 0 ? (
                    product.quantity
                  ) : (
                    <span className="bg-red-300 rounded-md p-1.5 text-red-900">
                      Sem estoque
                    </span>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <div className="inline-flex gap-1">
                    <button
                      className="hover:text-primary"
                      onClick={() => props.selectProduct(product)}>
                      <Edit size={16} />
                    </button>
                    <button
                      className="hover:text-primary"
                      onClick={() =>
                        props.removeProduct && props.removeProduct(product)
                      }>
                      <Trash size={16} />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
