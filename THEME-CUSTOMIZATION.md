# Personalización del theme CodeWebAI

Documento interno del proyecto. Este archivo no forma parte del sitio publicado porque está ubicado en la raíz del repositorio y no está incluido en `nav`.

## Objetivo

Reemplazar la apariencia de Material for MkDocs por un theme propio basado en MkDocs y Tailwind CSS, conservando:

- Navbar y navegación principal.
- Navegación lateral jerárquica.
- Búsqueda del sitio.
- Cambio entre modo claro y oscuro.
- Persistencia del tema seleccionado.
- Enlace al repositorio de GitHub.
- Logo y favicon.
- Tabla de contenido en páginas internas.
- Copiado de bloques de código.
- Diseño responsive.
- Extensiones Markdown existentes.

## Dependencias

### Python

Archivo: `docs/requirements.txt`

```txt
mkdocs>=1.6.0,<2.0.0
pymdown-extensions>=10.0.0
```

`mkdocs-material` fue eliminado porque la interfaz se implementa con templates propios y Tailwind CSS.

### Node.js

Archivo: `package.json`

```json
{
  "packageManager": "pnpm@10.33.2",
  "devDependencies": {
    "@tailwindcss/cli": "^4.3.3",
    "tailwindcss": "^4.3.3"
  }
}
```

Instalar dependencias:

```powershell
pnpm install
pip install -r docs/requirements.txt
```

## Estructura del theme

```text
theme/
├── main.html
├── theme.yml
└── partials/
    ├── footer.html
    ├── navbar.html
    ├── search.html
    ├── sidebar.html
    └── toc.html
```

### `theme/main.html`

Template principal del sitio. Define:

- Metadatos HTML.
- Favicon.
- Carga de Tailwind compilado.
- Navbar.
- Sidebar.
- Contenido principal.
- Tabla de contenido.
- Footer.
- Scripts de interacción.

La variable `is_home` identifica `index.md`. En la página de inicio se ocultan el sidebar y la tabla de contenido; las páginas internas conservan ambos elementos.

### `theme/partials/navbar.html`

Contiene:

- Logo y nombre del sitio.
- Enlaces de navegación principal.
- Buscador.
- Botón de cambio de tema.
- Enlace al repositorio de GitHub.
- Botón de menú responsive.

### `theme/partials/sidebar.html`

Renderiza recursivamente la navegación definida en `mkdocs.yml`. Las secciones con elementos hijos utilizan `details` y `summary` para poder expandirse y contraerse.

### `theme/partials/toc.html`

Muestra la tabla de contenido de la página actual. Se carga únicamente en páginas internas.

### `theme/partials/footer.html`

Muestra el autor del sitio y el enlace al repositorio.

## Configuración de MkDocs

Archivo: `mkdocs.yml`

```yaml
theme:
  name: mkdocs
  custom_dir: theme
  language: es
  logo: assets/img/logoCWAI.svg
  favicon: assets/img/logoCWAI.svg

plugins:
  - search

extra_css:
  - assets/stylesheets/tailwind.css

extra_javascript:
  - assets/javascripts/theme.js
  - assets/javascripts/search.js
```

`name: mkdocs` se mantiene porque MkDocs necesita un theme base instalado. La apariencia final se reemplaza mediante `custom_dir: theme`; no se utiliza Material.

La configuración `nav`, las extensiones Markdown, el logo, el favicon, `repo_name` y `repo_url` se mantienen en `mkdocs.yml`.

## Tailwind CSS

### Archivos

```text
src/input.css
 docs/assets/stylesheets/tailwind.css
```

`src/input.css` es el archivo fuente. `docs/assets/stylesheets/tailwind.css` es el archivo compilado que carga MkDocs.

### Compilación durante el desarrollo

Desde la raíz del proyecto:

```powershell
pnpm exec tailwindcss -i .\src\input.css -o .\docs\assets\stylesheets\tailwind.css --watch
```

En otra terminal:

```powershell
mkdocs serve
```

### Compilación para producción

```powershell
pnpm exec tailwindcss -i .\src\input.css -o .\docs\assets\stylesheets\tailwind.css --minify
mkdocs build --strict
```

El servidor de MkDocs no recompila automáticamente Tailwind. Por eso el proceso `--watch` debe permanecer activo durante el desarrollo.

## Diseño visual

El CSS define variables para:

- Colores de texto.
- Texto secundario.
- Bordes.
- Superficies.
- Color de acento.
- Cabecera.
- Sombras.

El modo oscuro se activa mediante:

```css
:root[data-theme="dark"]
```

La interfaz utiliza una cabecera azul-violeta, fondo oscuro en modo oscuro, contenido central amplio y navegación responsive.

## Funcionalidades JavaScript

### `docs/assets/javascripts/theme.js`

Implementa:

- Detección inicial de `prefers-color-scheme`.
- Persistencia mediante `localStorage`.
- Alternancia entre `light` y `dark`.
- Menú lateral responsive.
- Botones para copiar bloques de código.

La clave utilizada en `localStorage` es:

```text
codewebai-theme
```

### `docs/assets/javascripts/search.js`

Implementa:

- Carga de `search/search_index.json` generado por MkDocs.
- Filtrado de resultados por título y contenido.
- Resultados desplegables bajo el campo de búsqueda.
- Atajo `Ctrl + K` o `Cmd + K`.
- Cierre de búsqueda con `Escape`.

## Imágenes y texto lateral

En `docs/index.md` las imágenes de las secciones utilizan atributos como:

```markdown
![Dev](assets/img/developer.png){: width="540px" align="left" }
```

```markdown
![Estándares](assets/img/estandares.png){: width="540px" align="right" }
```

El CSS permite que el texto permanezca junto a la imagen mediante `float`, conservando la alineación izquierda o derecha. Para evitar que el texto quede cortado, las imágenes de la página de inicio se limitan proporcionalmente:

```css
.home-shell .prose-content img[align="left"],
.home-shell .prose-content img[align="right"] {
  width: min(55%, 540px) !important;
}
```

Para cambiar manualmente el tamaño:

- Reducir `55%` para dejar más espacio al texto.
- Aumentar `55%` para hacer la imagen más grande.
- Cambiar `540px` para definir otro límite máximo.

Ejemplo:

```css
width: min(45%, 460px) !important;
```

En móvil, los floats se desactivan y las imágenes ocupan el ancho disponible:

```css
.prose-content img[align="left"],
.prose-content img[align="right"] {
  float: none;
  width: 100% !important;
}
```

Esto evita que el texto quede comprimido o recortado en pantallas pequeñas.

## Justificación del contenido

Los párrafos del contenido principal utilizan:

```css
.prose-content p {
  text-align: justify;
}
```

La navegación, los botones, el código y los elementos de interfaz no se justifican para conservar su legibilidad.

## Archivos principales

```text
mkdocs.yml
package.json
docs/requirements.txt
src/input.css
theme/main.html
theme/theme.yml
theme/partials/navbar.html
theme/partials/sidebar.html
theme/partials/search.html
theme/partials/toc.html
theme/partials/footer.html
docs/assets/javascripts/theme.js
docs/assets/javascripts/search.js
docs/assets/stylesheets/tailwind.css
docs/index.md
```

## Validación

Comprobar después de realizar cambios:

```powershell
pnpm exec tailwindcss -i .\src\input.css -o .\docs\assets\stylesheets\tailwind.css --minify
mkdocs build --strict
```

Validar manualmente:

- Navegación entre páginas.
- Menú responsive.
- Búsqueda.
- Cambio y persistencia del tema.
- Enlace de GitHub.
- Logo y favicon.
- Tabla de contenido en páginas internas.
- Ausencia de tabla de contenido en inicio.
- Texto junto a las imágenes.
- Visualización responsive de imágenes.
- Copiado de bloques de código.
