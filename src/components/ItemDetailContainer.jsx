import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import products from '../data/products';

const ItemDetailContainer = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return <ProductDetail product={product} addToCart={addToCart} />;
};

export default ItemDetailContainer;
