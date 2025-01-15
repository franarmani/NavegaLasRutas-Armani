import React, { useState, useContext } from 'react';
import './ProductDetail.css';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount'; 

const ProductDetail = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const { addItem } = useContext(CartContext);

  const handleAddToCart = (quantity) => {
    setShowModal(true);
    addItem(product, quantity);
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  };

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="product-detail-page">
      <div className="product-detail-container" style={{ backgroundImage: `url(${product.background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="product-image-carousel">
          <img src={product.image} alt={product.name} className="product-image" />
        </div>
        <div className="product-info-panel">
          <h1>{product.name}</h1>
          <p className="price">{product.price}</p>
          <p className="description">{product.longDescription || product.description}</p>
          <ItemCount stock={10} initial={1} onAdd={handleAddToCart} />
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Producto agregado</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
