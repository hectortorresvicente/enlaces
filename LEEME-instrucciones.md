# Tarjeta digital / Link in Bio — Héctor Torres Vicente

## Qué incluye
- `index.html`: página web adaptada a móvil y ordenador.
- `enlaces.js`: **único archivo que debes editar** para añadir o modificar redes y proyectos.
- `favicon.svg`: pequeño símbolo de la web.
- `qr-enlaces.png`: código QR con los colores de la tarjeta.
- `qr-enlaces-negro.png`: QR clásico de máxima legibilidad para imprimir.
- `qr-enlaces.svg`: QR vectorial para impresión.
- `tarjeta-qr-para-compartir.png`: tarjeta gráfica para compartir.

## Publicar gratis con GitHub Pages (recomendado)
1. Inicia sesión en GitHub con tu cuenta `hectortorresvicente`.
2. Abre https://github.com/new
3. En **Repository name** escribe exactamente: `enlaces`.
4. Marca **Public** y pulsa **Create repository**.
5. En el repositorio abre **Add file > Upload files** y sube los archivos de esta carpeta **descomprimidos** (mínimo `index.html`, `enlaces.js`, `favicon.svg`, `qr-enlaces.png`).
6. Pulsa **Commit changes** para guardar.
7. Entra en **Settings > Pages**. En **Build and deployment** selecciona **Deploy from a branch**. En **Branch** escoge `main`, carpeta `/ (root)` y pulsa **Save**.
8. Abre https://hectortorresvicente.github.io/enlaces/ cuando GitHub haya terminado de publicar. La primera publicación puede tardar varios minutos (GitHub documenta hasta 10 minutos).

**No se ha publicado automáticamente nada en tu cuenta.** Los archivos se entregan preparados; has de seguir estos pasos.

## Cómo añadir otra web sin cambiar el QR
1. Abre tu repositorio GitHub: https://github.com/hectortorresvicente/enlaces
2. Abre `enlaces.js` y pulsa el icono del lápiz (Edit this file).
3. Dentro de `enlaces: [ ... ]`, añade otro bloque:

```js
,
{
  grupo: "paginas",
  titulo: "Mi página personal",
  detalle: "Mi sitio web",
  url: "https://ejemplo.com",
  icono: "web"
}
```

Si el elemento anterior ya acaba en coma, no añadas otra. También puedes copiar un bloque existente y ponerlo después, separado por coma.
4. Pulsa **Commit changes**. Después de publicarse el cambio, se verá automáticamente en la misma web. **El QR no se modifica**.

## Para probar la web sin publicar
Abre `index.html` con Chrome, Edge o Firefox. Como `enlaces.js` es un archivo separado JavaScript, funcionará localmente sin instalar nada.

## Atención al QR
El QR incluido está generado específicamente para esta URL:
**https://hectortorresvicente.github.io/enlaces/**

**No funcionará hasta que esa dirección esté publicada**. Si eliges otra URL, **genera otro QR** para la URL definitiva antes de imprimirlo.

## Otros servicios gratuitos
- Linktree: https://linktr.ee/ (editor sencillo, URL propia de Linktree)
- Cloudflare Pages: https://pages.cloudflare.com/ (publicación directa de esta carpeta o ZIP, pero otra URL; habría que rehacer el QR).

## Privacidad
Has indicado que deseas mostrar correo y número móvil públicamente. Ambos quedan visibles en la página y podrán ser indexados o recogidos por terceros. Para evitar spam, puedes quitarlos de `enlaces.js` en cualquier momento; el QR seguirá apuntando a la página.

## Instagram
Se ha utilizado **@htr_torresvi**, leído del nombre visible bajo el QR de Instagram que enviaste. **No se ha podido comprobar si el perfil está activo**, porque Instagram restringe la consulta sin sesión. Revisa ese enlace al publicar.

## Coste
Generar estos QR es gratis. GitHub Pages es gratuito en repositorios públicos bajo GitHub Free. No necesitas comprar dominio. La permanencia depende de que conserves tu cuenta, la publicación activa y de que el proveedor mantenga el servicio bajo estas condiciones.
