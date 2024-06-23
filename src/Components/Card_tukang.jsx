import React from 'react';
import Tukang1 from '../Assets/Img/Tukang1.png';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Andi Ac',
    href: '/deskripsi',
    imageSrc: Tukang1,
    imageAlt: 'Andi Ac image',
    price: 'Yogyakarta',
    color: 'Blue',
  },
  {
    id: 2,
    name: 'Ahmad Kasim',
    href: '/deskripsi',
    imageSrc: Tukang1,
    imageAlt: 'Ahmad Kasim image',
    price: 'Batu',
    color: 'Red',
  },
  {
    id: 3,
    name: 'Andi Ac',
    href: '/deskripsi',
    imageSrc: Tukang1,
    imageAlt: 'Andi Ac image',
    price: 'Yogyakarta',
    color: 'Blue',
  },
  {
    id: 4,
    name: 'Ahmad Kasim',
    href: '/deskripsi',
    imageSrc: Tukang1,
    imageAlt: 'Ahmad Kasim image',
    price: 'Batu',
    color: 'Red',
  },
  {
    id: 5,
    name: 'Andi Ac',
    href: '/deskripsi',
    imageSrc: Tukang1,
    imageAlt: 'Andi Ac image',
    price: 'Yogyakarta',
    color: 'Blue',
  },
  {
    id: 6,
    name: 'Ahmad Kasim',
    href: '/deskripsi',
    imageSrc: Tukang1,
    imageAlt: 'Ahmad Kasim image',
    price: 'Batu',
    color: 'Red',
  },
];

const CardTukang = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardTukang;
