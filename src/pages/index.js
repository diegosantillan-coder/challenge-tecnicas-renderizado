import Head from 'next/head';
import ProductList from '../components/ProductList';
import { renderStrategy } from '../utils/renderStrategy';

export default function Home() {
  const products = renderStrategy();
  return (
    <div>
      <Head>
        <title>Plataforma de E-commerce</title>
      </Head>
      <h1>Lista de Productos</h1>
      <ProductList products={products} />
    </div>
  );
}