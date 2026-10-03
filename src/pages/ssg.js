// src/pages/ssg.js
import Head from 'next/head';
import Link from 'next/link';
import ProductList from '../components/ProductList';
import { renderStrategy } from '../utils/renderStrategy';

export default function SSGPage({ products, buildTime }) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <Head><title>SSG - Static Site Generation</title></Head>
      <Link href="/">← Volver al inicio</Link>
      <h1>Técnica: Static Site Generation (SSG)</h1>
      <p><strong>Generado en tiempo de compilación:</strong> {buildTime}</p>
      <p style={{ color: 'green' }}>
        ✓ <em>Si recargas la página (F5), la hora no cambiará porque fue empaquetada durante el build.</em>
      </p>
      <ProductList products={products} />
    </div>
  );
}

// Next.js ejecuta esto durante "npm run build"
export async function getStaticProps() {
  const products = renderStrategy();
  return {
    props: {
      products,
      buildTime: new Date().toLocaleTimeString()
    }
    // Opcional: revalidate: 60 (para Incremental Static Regeneration - ISR)
  };
}