import React from 'react';
import Products from '../../components/Products/Products';
import Filter from './components/Filter/Filter';

import image1 from '../../assets/img/items/01.jpg';
import image2 from '../../assets/img/items/02.jpg';
import image3 from '../../assets/img/items/03.jpg';
import image4 from '../../assets/img/items/04.jpg';

const items = [
  {
    id: 1,
    title: 'Item name 01',
    photos: [image1],
    price: 2544.4,
  },
  {
    id: 2,
    title: 'Item name 02',
    photos: [image2],
    price: 224.4,
  },
  {
    id: 3,
    title: 'Item name 03',
    photos: [image3],
    price: 224.4,
  },
  {
    id: 4,
    title: 'Item name 04',
    photos: [image4],
    price: 444.4,
  },
  {
    id: 5,
    title: 'Item name 01',
    photos: [image1],
    price: 2544.4,
  },
  {
    id: 6,
    title: 'Item name 02',
    photos: [image2],
    price: 224.4,
  },
  {
    id: 7,
    title: 'Item name 03',
    photos: [image3],
    price: 224.4,
  },
  {
    id: 8,
    title: 'Item name 04',
    photos: [image4],
    price: 444.4,
  },
  {
    id: 9,
    title: 'Item name 01',
    photos: [image1],
    price: 2544.4,
  },
  {
    id: 10,
    title: 'Item name 02',
    photos: [image2],
    price: 224.4,
  },
  {
    id: 11,
    title: 'Item name 03',
    photos: [image3],
    price: 224.4,
  },
  {
    id: 12,
    title: 'Item name 04',
    photos: [image4],
    price: 444.4,
  },
];

function ProductsScene() {
  return (
    <Products items={items}>
      <Filter />
    </Products>
  );
}

export default ProductsScene;
