import React, { useEffect, useState } from 'react';
import './ProductDetail.css';

const ProductDetail = ({ product }) => {
  const [detailedProduct, setDetailedProduct] = useState(null);

  useEffect(() => {
    if (product) {
      fetch(`https://fakestoreapi.com/products/${product.id}`)
        .then(response => response.json())
        .then(data => setDetailedProduct(data));
    }
  }, [product]);

  return (
    <div className="product-detail-container">
      {detailedProduct ? (
        <div className="product-detail-content">
          <h2>{detailedProduct.title}</h2>
          <img src={detailedProduct.image} alt={detailedProduct.title} />
          <p>{detailedProduct.description}</p>
          <p>Price: ${detailedProduct.price}</p>
          <p>Category: {detailedProduct.category}</p>
          <p>Rating: {detailedProduct.rating.rate} ({detailedProduct.rating.count} reviews)</p>
        </div>
      ) : (
        <p className="loading-message">Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetail;
