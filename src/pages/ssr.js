// src/pages/ssr.js
import Head from 'next/head';
import Link from 'next/link';
import ProductList from '../components/ProductList';
import { renderStrategy } from '../utils/renderStrategy';

export default function SSRPage({ products, requestTime }) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <Head><title>SSR - Server-Side Rendering</title></Head>
      <Link href="/">← Volver al inicio</Link>
      <h1>Técnica: Server-Side Rendering (SSR)</h1>
      <p><strong>Generado en el servidor a las:</strong> {requestTime}</p>
      <p style={{ color: 'blue' }}>
        ✓ <em>Cada vez que recargas la página (F5), la hora cambia inmediatamente porque el servidor la calcula en cada request.</em>
      </p>
      <ProductList products={products} />
    </div>
  );
}

// Next.js ejecuta esto en el servidor en cada petición
export async function getServerSideProps(context) {
  const products = renderStrategy();
  return {
    props: {
      products,
      requestTime: new Date().toLocaleTimeString()
    }
  };
}