// src/pages/api/products.js
import { renderStrategy } from '../../utils/renderStrategy';

export default async function handler(req, res) {
  // Simulamos latencia de red de 800ms
  await new Promise((resolve) => setTimeout(resolve, 800));
  
  const products = renderStrategy();
  res.status(200).json({
    products,
    timestamp: new Date().toLocaleTimeString()
  });
}