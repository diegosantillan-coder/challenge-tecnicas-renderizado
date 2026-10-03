# Comparativa Exhaustiva de Técnicas de Renderizado Web

## 1. Definición y Propósito (¿Qué es y Para qué sirve?)

### Client-Side Rendering (CSR)
* **¿Qué es?:** El servidor envía un documento HTML mínimo (un cascarón vacío con un contenedor `div id="__next"`) junto con los enlaces a los archivos JavaScript de la aplicación. El navegador descarga, interpreta y ejecuta el código React, realiza peticiones asíncronas (`fetch` / API REST / GraphQL) y construye el DOM directamente en el dispositivo del usuario.
* **¿Para qué sirve?:** Ideal para aplicaciones web ricas e interactivas (SPAs), paneles de administración privados, dashboards de métricas y aplicaciones tipo SaaS donde la indexación en motores de búsqueda (SEO) no es un requerimiento.

### Server-Side Rendering (SSR)
* **¿Qué es?:** Cada vez que un usuario o un crawler solicita una URL, el servidor de Node.js intercepta la petición, ejecuta la lógica de obtención de datos (`getServerSideProps`), renderiza el árbol de componentes React a una cadena de texto HTML completa y la envía como respuesta HTTP. Luego, el navegador descarga el bundle JS e hidrata la página para activar la interactividad.
* **¿Para qué sirve?:** Ideal para páginas públicas con datos altamente dinámicos y dependientes del contexto del usuario (geolocalización, cookies de sesión, inventario crítico en tiempo real) que requieren visibilidad garantizada en motores de búsqueda y redes sociales.

### Pre-rendering / Static Site Generation (SSG)
* **¿Qué es?:** El proceso de renderizado del HTML ocurre una sola vez durante el tiempo de compilación (`npm run build`) mediante `getStaticProps`. Se generan archivos `.html` y `.json` estáticos que se almacenan en disco y pueden distribuirse a nivel mundial a través de una red CDN.
* **¿Para qué sirve?:** Ideal para páginas cuyo contenido no cambia en cada milisegundo: catálogos de productos, blogs de marketing, páginas de aterrizaje (landing pages), documentación y términos legales.

---

## 2. Matriz Comparativa Técnica

| Criterio | CSR (Client-Side) | SSR (Server-Side) | SSG / Pre-render |
| :--- | :--- | :--- | :--- |
| **Punto de ejecución** | Navegador del usuario | Servidor Node.js (por request) | Servidor / CI-CD (en build) |
| **Tiempo al primer byte (TTFB)** | Rápido para el cascarón | Moderado a lento (depende de la BD) | Ultra rápido (< 50ms en CDN) |
| **Carga percibida (FCP / LCP)** | Lenta (espera descarga de JS + API) | Rápida (HTML ya viene con datos) | Inmediata (HTML estático) |
| **Impacto en SEO** | Bajo (requiere ejecución diferida de JS) | Óptimo (HTML 100% indexable) | Óptimo (HTML 100% indexable) |
| **Carga en el Servidor** | Mínima (solo endpoints de API) | Alta (renderiza HTML en cada visita) | Nula en runtime |
| **Costo de Infraestructura** | Bajo (alojamiento estático) | Medio/Alto (servidores con auto-scaling) | Muy bajo (Edge / CDN) |

---

## 3. Errores Comunes en la Implementación

1. **Uso indiscriminado de SSR para todo el sitio:**
   Provoca cuellos de botella en el servidor Node.js ante picos de tráfico ("Efecto Black Friday") e incrementa innecesariamente los costos de infraestructura cuando el 90% del contenido de la página es idéntico para todos los usuarios.
2. **Dependencia de objetos de navegador (`window`, `localStorage`) en SSR/SSG:**
   Intentar acceder a `window` dentro del ciclo inicial de renderizado en el servidor causa errores fatales de compilación o desajustes de hidratación (*Hydration Mismatch*).
3. **Cumulative Layout Shift (CLS) en CSR:**
   Renderizar listas sin reservar el espacio visual mediante Skeleton Loaders provoca molestos saltos visuales en la interfaz del usuario.
4. **Desaprovechar la caché en SSG (falta de ISR):**
   Recompilar la totalidad de un sitio con miles de productos cada vez que cambia un solo precio es insostenible sin Incremental Static Regeneration (`revalidate`).

---

## 4. Decisiones Arquitectónicas y Trade-offs

La elección de una técnica determina directamente:
* **Tasa de Conversión (e-commerce):** Cada segundo de retraso en el LCP reduce la conversión entre un 7% y un 20%. SSG ofrece la tasa de rebote más baja.
* **Presupuesto de Crawling (SEO):** Los motores de búsqueda indexan más páginas y más rápido cuando el contenido se entrega en el HTML estático inicial.
* **Escalabilidad y Disponibilidad:** Si la base de datos central experimenta lentitud o una caída temporal, un sitio con SSG/CDN sigue funcionando al 100% para los visitantes, mientras que un sitio basado puramente en SSR fallará con errores 500/504.