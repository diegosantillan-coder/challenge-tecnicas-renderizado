# INFORME CSR, SSR, PRE-RENDER

## Client Side Rendering(CSR):
El renderizado por el lado del cliente te da la ventaja de que todo el html, css, javascript se renderiza desde el navegador del cliente, dando una carga inicial mas lenta pero la interaccion se siente mas rápida para contenido que requiere muchos cambios y dashboards, sin embargo esto reduce drásticamente el SEO.

## Server Side Rendering(SSR):
Con el SSR, cada vez que un usuario hace clic en un enlace o visita una URL, el servidor procesa la solicitud, consulta la base de datos y genera un archivo HTML completo con todo el contenido. Luego, envía este HTML ya construido al navegador del usuario.

## Pre Render
Tanto la Generación de Sitios Estáticos (SSG) como el Renderizado del Lado del Servidor (SSR) son técnicas de pre-renderizado.

En el SSG, el pre-renderizado ocurre una sola vez al compilar la web (build time).

En el SSR, el pre-renderizado ocurre en el servidor cada vez que alguien pide la página (request time).

En contraste directo, el CSR (Renderizado del Cliente) es la ausencia de pre-renderizado, ya que la página nace vacía y se llena en el navegador.

