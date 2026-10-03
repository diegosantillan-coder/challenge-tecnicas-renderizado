// src/pages/csr.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ProductList from '../components/ProductList';

export default function CSRPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clientTime, setClientTime] = useState(null);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setClientTime(data.timestamp);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <Head><title>CSR - Client-Side Rendering</title></Head>
      <Link href="/">← Volver al inicio</Link>
      <h1>Técnica: Client-Side Rendering (CSR)</h1>
      
      {loading ? (
        <p style={{ color: 'orange' }}>⏳ Cargando productos desde el cliente...</p>
      ) : (
        <>
          <p><strong>Datos obtenidos por el cliente a las:</strong> {clientTime}</p>
          <p style={{ color: 'orange' }}>
            ✓ <em>El HTML inicial que viaja por internet NO contiene los productos. Se cargan asíncronamente en el navegador.</em>
          </p>
          <ProductList products={products} />
        </>
      )}
    </div>
  );
}