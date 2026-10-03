// src/pages/index.js
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <Head>
        <title>Laboratorio de Técnicas de Renderizado</title>
      </Head>
      <h1>Laboratorio de Renderizado: CSR vs SSR vs SSG</h1>
      <p>Selecciona una técnica para observar su comportamiento:</p>
      <ul>
        <li>
          <Link href="/ssg"><strong>SSG (Static Site Generation)</strong></Link>
          : Pre-renderizado en build-time con <code>getStaticProps</code>.
        </li>
        <li>
          <Link href="/ssr"><strong>SSR (Server-Side Rendering)</strong></Link>
          : Renderizado dinámico en servidor con <code>getServerSideProps</code>.
        </li>
        <li>
          <Link href="/csr"><strong>CSR (Client-Side Rendering)</strong></Link>
          : Renderizado en el navegador con <code>useEffect</code> y API local.
        </li>
      </ul>
    </div>
  );
}