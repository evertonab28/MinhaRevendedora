import Id from '../model/Id';
import Product from '../model/Product';

const products: Product[] = [
  {
    id: Id.new(),
    name: 'Zaad Eau de Parfum 95ml',
    catalogId: 'B47950',
    price: 314.9,
    quantity: 10,
    image:
      'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/B47950/ZAAD_EDP_95ml-V6_B47950.jpg',
  },
  {
    id: Id.new(),
    name: 'Malbec Desodorante Colônia 100ml',
    catalogId: 'B84387',
    price: 169.9,
    quantity: 5,
    image:
      'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/product/B84387/3fcf35bd-e85f-416e-bbbb-755c89f39e95-bot-84387-malbec-malbec-desodorante-colonia-frontal-01.jpg',
  },
  {
    id: Id.new(),
    name: 'Egeo Original Desodorante Colônia 90ml',
    catalogId: 'B49812',
    price: 154.9,
    quantity: 8,
    image:
      'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/B49812/EGEO-DES-COL-ORIGNL-90ml-V2_B49812.jpg',
  },
  {
    id: Id.new(),
    name: 'Arbo Desodorante Colônia 100ml',
    catalogId: 'B74438',
    price: 169.9,
    quantity: 4,
    image:
      'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/product/B74438/dc3c1f13-3d21-4274-9d50-4be908bb3f35-74438.jpg',
  },
];

export default products;
