import React, { useEffect, useState } from 'react';
import './Tendencias.css';
import { Link } from 'react-router-dom';

const trendingProducts = [
  {
    id: 1,
    name: 'Datejust 36',
    price: '$USD 12,750',
    image: 'https://timeandtidewatches.com/wp-content/uploads/2021/11/Photo-Nov-09-4-35-19-AM-scaled.jpg',
    description: 'Oyster, 36 mm, acero Oystersteel y oro blanco',
    longDescription: 'El Datejust 36 es un clásico atemporal, con una caja Oyster de 36 mm hecha de acero Oystersteel y oro blanco. Conocido por su elegancia y precisión, es una elección perfecta para cualquier ocasión. Este reloj combina la tradición con la innovación, ofreciendo una estética refinada y una funcionalidad excepcional.'
  },
  {
    id: 2,
    name: 'Submariner',
    price: '$USD 11,000',
    image: 'https://www.perodri.es/wp-content/uploads/rolex-submariner.jpg',
    description: 'Oyster, 41 mm, acero Oystersteel',
    longDescription: 'El Submariner es un reloj de buceo icónico, con una caja Oyster de 41 mm hecha de acero Oystersteel. Reconocido por su robustez y fiabilidad, es una herramienta esencial para la exploración submarina. Su diseño resistente al agua y su bisel giratorio unidireccional lo convierten en el compañero ideal para los aventureros del océano.'
  },
  {
    id: 3,
    name: 'GMT-Master II',
    price: '$USD 12,900',
    image: 'https://img.chrono24.com/images/uhren/36684545-ksxfxg51qzielxu5mujva2tj-ExtraLarge.jpg',
    description: 'Oyster, 40 mm, acero Oystersteel.',
    longDescription: 'El GMT-Master II es un reloj versátil, con una caja Oyster de 40 mm hecha de acero Oystersteel. Diseñado para viajeros frecuentes, ofrece la capacidad de mostrar múltiples zonas horarias simultáneamente. Su diseño robusto y su funcionalidad avanzada lo hacen perfecto para quienes cruzan fronteras y husos horarios.'
  }
];

const Tendencias = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setProductList(trendingProducts.slice(0, 3)); 
    };

    fetchProducts();
  }, []);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="tendencias-container">
      <div className="new-drop-text-container">
        <h2 className="new-drop-text">Productos en tendencia</h2>
      </div>

      <div className="trending-products">
        {productList.map((product, index) => (
          <div
            className={`trending-product ${index % 2 === 0 ? 'left' : 'right'}`}
            key={product.id}
            style={{ backgroundImage: `url(${product.image})` }}
          >
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="description">{product.description}</p>
              <p className="price">{product.price}</p>
              <Link to={`/product/${product.id}`} className="btn-details" onClick={handleLinkClick}>Ver Detalle</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tendencias;
