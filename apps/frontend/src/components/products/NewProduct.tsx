import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ComboBox } from './ComboBox';
import Product from '@/data/model/Product';
import { useEffect, useState } from 'react';
import Id from '@/data/model/Id';

export interface NewProductProps {
  product: Partial<Product> | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  saveProduct: (product: Product) => void;
  selectProduct: (product: Partial<Product>) => void;
}

export default function NewProduct(props: NewProductProps) {
  const [formData, setFormData] = useState<Partial<Product>>({
    name: '',
    price: 0,
    catalogId: '',
    image: '',
  });

  useEffect(() => {
    if (props.product) {
      setFormData(props.product);
    } else {
      setFormData({ name: '', price: 0, catalogId: '', image: '' });
    }
  }, [props.product]);

  const handleInputChange = (field: keyof Product, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={props.open} onOpenChange={props.onOpenChange}>
      <DialogTrigger asChild>
        <Button onClick={() => props.selectProduct({ id: Id.new() })}>
          Novo Produto
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {props.product?.name ? 'Editar Produto' : 'Cadastrar novo produto'}
          </DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-x-2 gap-y-6">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="name" className="font-bold">
                Nome do Produto
              </Label>
              <Input
                id="name"
                value={formData.name || ''}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>
            <div className="grid flex-1 gap-2">
              <Label htmlFor="name" className="font-bold">
                Marca
              </Label>
              <ComboBox />
            </div>
            <div className="flex gap-4 justify-between">
              <div className="grid gap-2 flex-1">
                <Label htmlFor="price" className="font-bold">
                  Preço de Venda
                </Label>
                <Input
                  type="number"
                  id="price"
                  value={formData.price || ''}
                  onChange={(e) =>
                    handleInputChange('price', parseFloat(e.target.value))
                  }
                />
              </div>
              <div className="grid gap-2 flex-1">
                <Label htmlFor="catalogId" className="font-bold">
                  Código de Barras
                </Label>
                <Input
                  type="string"
                  id="catalogId"
                  value={formData.catalogId || ''}
                  onChange={(e) =>
                    handleInputChange('catalogId', e.target.value)
                  }
                />
              </div>
            </div>
            <div className="grid flex-1 gap-2">
              <Label htmlFor="image" className="font-bold">
                Imagem
              </Label>
              <Input
                type="string"
                id="image"
                value={formData.image || ''}
                onChange={(e) => handleInputChange('image', e.target.value)}
              />
            </div>
            <div className="grid flex-1 gap-2">
              <Label htmlFor="image" className="font-bold">
                Unidades em estoque
              </Label>
              <Input
                type="number"
                id="quantity"
                value={formData.quantity || ''}
                onChange={(e) => handleInputChange('quantity', e.target.value)}
              />
            </div>
          </div>
        </div>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button
              type="button"
              onClick={() => props.saveProduct(formData as Product)}>
              Salvar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
