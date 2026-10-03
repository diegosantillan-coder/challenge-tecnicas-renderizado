import React from 'react';

export default function ProductList({ products = [] }) {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <strong>{product.name}</strong> {product.price ? `— ${product.price}` : ''}
        </li>
      ))}
    </ul>
  );
}