# Sur Fly Fishing — sitio web

Sitio estático en HTML, CSS y JavaScript, preparado para publicarse gratis con GitHub Pages.

## Archivos
- `index.html`: contenido de la página.
- `style.css`: diseño responsive para celular y computadora.
- `script.js`: menú móvil, año automático y botón de WhatsApp.
- `assets/`: fotografías reales proporcionadas para el sitio.

## Antes de publicar
1. Abrí `script.js`.
2. Buscá esta línea:
   `const WHATSAPP_NUMBER = "";`
3. Pegá el número comercial con código de país, solo números y sin `+`, espacios ni guiones.
   Ejemplo de formato argentino: `5492991234567` (reemplazalo por el número real).
4. Guardá el archivo.

Si no completás el número, el botón de WhatsApp avisará que falta configurar el contacto.

## Publicar en GitHub Pages
1. Creá un repositorio público llamado `sur-fly-fishing`.
2. Subí todos los archivos y la carpeta `assets` manteniendo la estructura.
3. Entrá a **Settings → Pages**.
4. En **Build and deployment**, elegí **Deploy from a branch**.
5. Seleccioná la rama `main` y la carpeta `/ (root)`, y guardá.
6. Esperá a que termine la publicación. GitHub mostrará la URL pública en esa misma sección.

La dirección normalmente tendrá el formato:
`https://TU-USUARIO.github.io/sur-fly-fishing/`

## Nota
La página usa Google Fonts desde internet. El resto del sitio es estático. Revisá el texto y las fotos antes de publicarlo para confirmar que representan los servicios actuales.
