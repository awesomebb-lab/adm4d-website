# ADM4D — sitio web

Sitio de una sola página para ADM4D (diseño y construcción, Panamá).
HTML, CSS y JavaScript puros. Sin dependencias, sin build, sin framework.

## Estructura

```
index.html                 página completa
assets/css/style.css       estilos y tokens de diseño
assets/js/main.js          menú fijo y calendario de reservas
assets/img/                fotografías, logo y favicon
```

## Ver en local

Abrir `index.html` con doble clic, o servirlo:

```bash
python3 -m http.server 8000
# luego abrir http://localhost:8000
```

## Publicar en GitHub Pages

1. Crear un repositorio nuevo en GitHub (por ejemplo `adm4d-web`).
2. Subir estos archivos:

```bash
git init
git add .
git commit -m "Sitio ADM4D"
git branch -M main
git remote add origin https://github.com/USUARIO/adm4d-web.git
git push -u origin main
```

3. En GitHub: **Settings → Pages → Source: Deploy from a branch → main / (root)**.
4. El sitio queda en `https://USUARIO.github.io/adm4d-web/`.

Para un dominio propio (adm4d.com), agregar el dominio en Settings → Pages y crear
el registro DNS que GitHub indique. Netlify o Vercel también sirven: arrastrar la
carpeta basta, no hay paso de compilación.

## Qué falta reemplazar

- `assets/img/*.jpg` — fotos de archivo temporales; sustituir por obras reales
  conservando el mismo nombre de archivo y no hay que tocar el HTML.
- Correo `hola@adm4d.com` y teléfono `+507 6000-0000` en `index.html`.
- Nombres, años y metros de los cuatro proyectos.
- Enlaces de Instagram y LinkedIn en el pie.
- El calendario abre el correo con la fecha y hora elegidas. Para reuniones
  automáticas, conectar Zoom/Calendly en `assets/js/main.js` (función de envío).

## Sistema de diseño

- Fondo `#f3f3f2`, texto `#1a1a1e`, acento marrón `#6f4e37` (solo en puntos).
- Titulares: Instrument Serif. Interfaz: Cormorant Garamond.
- Retícula de 5 columnas con líneas de 1px visibles en toda la página.
- Sin sombras, sin degradados, sin esquinas redondeadas (salvo círculos).
- Tema claro fijo.
