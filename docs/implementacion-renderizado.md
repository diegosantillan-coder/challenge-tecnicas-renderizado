# Cómo comprobar en la práctica las diferencias

Cuando ejecutes npm run build y luego npm start:

## Terminal de compilación (next build): Observarás los símbolos de Next.js para cada ruta:

- ● /ssg -> SSG (pre-renderizado estático con props).
- λ /ssr -> Server (renderizado en runtime por Node.js).
- ○ /csr -> Static shell (página estática cuya lógica de datos corre en el cliente).

- Ver código fuente (Ctrl + U en el navegador):

- En /ssg y /ssr: Los nombres de los productos aparecen directamente en el código HTML que devuelve el servidor (clave para el SEO).
- En /csr: En el código fuente solo verás <p>⏳ Cargando productos...</p>, demostrando que los motores de búsqueda básicos no verán los productos al instante.

## Recarga con F5:

- En /ssg: El timestamp nunca cambia.
- En /ssr: El timestamp cambia en cada recarga.
- En /csr: Verás el mensaje de carga durante 800ms antes de mostrar los productos.



Luego entra a http://localhost:3000
 y realiza estos 3 experimentos:

# Experimento 1: El código fuente HTML (Ctrl + U o Clic derecho → Ver código fuente de la página)

- En /ssg y /ssr: Verás los nombres de los productos (Laptop Pro 16", Teclado Mecánico...) directamente dentro del HTML que envió el servidor. Por eso ambas técnicas son excelentes para SEO (los robots de Google leen el contenido inmediatamente).

- En /csr: En el código fuente solo verás <p>⏳ Cargando productos desde el cliente...</p>. Los productos no están en el HTML inicial; se inyectan en el DOM después de que React descarga y ejecuta el JavaScript.

# Experimento 2: Comportamiento al recargar (F5) y Timestamps
- En /ssg: El timestamp se congela en el momento exacto en que se generó la página. Al recargar la página (F5), la hora no cambia.
- En /ssr: Cada vez que recargas (F5), el timestamp cambia inmediatamente, demostrando que el servidor de Node.js se ejecutó de nuevo en esa petición HTTP.
- En /csr: Al recargar, verás brevemente el mensaje "⏳ Cargando..." durante 800ms y luego los datos se renderizan en el navegador.

# Experimento 3: Pestaña Network (F12)

- Abre las herramientas de desarrollador (F12), ve a la pestaña Network (Red) y filtra por Fetch/XHR:
- En /ssg y /ssr: No verás ninguna llamada a /api/products desde el navegador (los datos ya vinieron embebidos en el HTML del servidor).
- En /csr: Verás la petición HTTP asíncrona hacia /api/products saliendo desde tu navegador.