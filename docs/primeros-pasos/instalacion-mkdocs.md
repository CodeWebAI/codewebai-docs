# Instalación y Configuración de MkDocs

Para mantener la documentación de **CodeWebAI** estandarizada, utilizamos [MkDocs](https://www.mkdocs.org/) junto con el tema [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/). 

Esta guía detalla el proceso obligatorio para configurar el entorno de desarrollo local, asegurando que todos los colaboradores trabajen bajo las mismas condiciones, independientemente de su sistema operativo, e incluye una guía rápida de sintaxis para estandarizar nuestra escritura.

---

## 1. Prerrequisitos

Antes de comenzar, debes asegurarte de tener instalado Python y pip en tu sistema. MkDocs es un paquete de Python, por lo que requiere una versión reciente (recomendamos Python 3.8 o superior).

Verifica tu instalación ejecutando en tu terminal:
```
# En Windows
python --version

# En macOS / Linux
python3 --version
```

Nota: Si no tienes Python instalado, descárgalo desde [aqui](https://www.python.org) y asegúrate de marcar la opción "Add Python to PATH" durante la instalación en Windows

## 2. Creación del Entorno Virtual (Obligatorio)

Para evitar ensuciar el entorno global de tu sistema operativo y prevenir "dependency hell", exigimos el uso de entornos virtuales (venv) para trabajar en este repositorio.

### Windows

Abre tu terminal (PowerShell, CMD o Git bash) en la raíz del proyecto y ejecuta:
```
# Crear el entorno virtual
python -m venv .venv

# Activar el entorno virtual
source .venv/Scripts/activate
```

### MacOS / Linux

Abre tu terminal en la raíz del proyecto y ejecuta:
```
# Crear el entorno virtual
python3 -m venv venv

# Activar el entorno virtual
source venv/bin/activate
```
⚠️ Importante: Sabrás que el entorno está activo porque verás el prefijo (venv) al inicio de la línea de comandos en tu terminal. Debes activar este entorno cada vez que vayas a trabajar en la documentación.

Para desactivar el entrono virtual solo ejecuta el comando: 
```
# Windows
deactivate

# MacOS / Linux
deactivate
```
## 3. Instalación de Dependencias

Con el entorno virtual activo, procederemos a instalar MkDocs y las extensiones necesarias. Ejecuta el siguiente comando (es igual para todos los sistemas):

```
pip install mkdocs mkdocs-material
```

3.1. Configuración Inicial (Crea el Proyecto)

Asegúrate de estar en la **raíz** del repositorio. Ahora ejecuta el comando inicial que creará toda la estructura de carpetas y archivos necesarios:

```bash
mkdocs new <nombre_del_proyecto>
```


## 4. Comandos de Uso Diario

### Levantar el servidor local (Desarrollo)

```bash
mkdocs serve
```

### Construir el sitio estático (Producción)

```bash
mkdocs build
```

## 5. Guía Rápida de Sintaxis: Markdown vs HTML
Para escribir en nuestra documentación no necesitas usar etiquetas HTML complejas. Markdown nos permite estructurar el contenido de manera limpia y legible. A continuación, las equivalencias principales que usarás diariamente en CodeWebAI:

Títulos y Subtítulos (Headings)

En lugar de utilizar las etiquetas `<h1>`, `<h2>` o `<h3>` de HTML, en Markdown utilizamos el símbolo de almohadilla o gato (#):

```bash
# Esto es un Título (<h1>)
## Esto es un Subtítulo (<h2>)
### Esto es un Subtítulo (<h3>)
```

Formato de Texto

En lugar de las etiquetas `<b>` (o `<strong>`) y `<i>` (o `<em>`):


**Este texto aparecerá en negrita** <br>
*Este texto aparecerá en cursiva*<br>
***Este texto tendrá negrita y cursiva***<br>
`Este es un bloque de código en línea` (Ideal para nombrar variables o comandos)

Listas y Viñetas (Lists)

Para crear listas desordenadas (equivalente a `<ul>` y `<li>` en HTML) o listas numeradas (`<ol>` y `<li>`), usamos esta sintaxis:

```
* Primer elemento de una lista con viñetas
* Segundo elemento
  * Sub-elemento (indentado con espacios)

1. Primer paso de una lista ordenada
2. Segundo paso
```

Enlaces (Links)

En lugar de la etiqueta ancla `<a href="url">Texto</a>`:

```
[Texto que el usuario leerá](https://enlace-destino.com)
[Enlace a otra página interna](../estandares/index.md)
```
Imágenes y Alineación (`<img>`)

La sintaxis básica para insertar una imagen es similar a la de los enlaces, pero precedida por un signo de exclamación !.

Gracias a las extensiones que hemos configurado en nuestro mkdocs.yml, podemos controlar el tamaño y la alineación como si estuviéramos inyectando propiedades CSS (float, width), sin necesidad de escribir HTML:

```
# 1. Imagen básica (Equivale a <img src="..." alt="...">)
![Texto alternativo para accesibilidad](../assets/img/ejemplo.png)

# 2. Imagen alineada a la IZQUIERDA con ancho específico
![Icono](../assets/img/icono.png){: align="left" width="150px" }
El texto que escribas aquí flotará y se envolverá a la derecha de la imagen de manera automática.

# 3. Imagen alineada a la DERECHA
![Diagrama](../assets/img/diagrama.png){: align="right" width="300px" }
El texto que escribas aquí fluirá por el lado izquierdo de la imagen.
```

💡 Tip de Maquetación: Si estás intercalando imágenes flotantes y el diseño se "rompe" porque el texto es muy corto, puedes forzar un salto de línea limpio usando la etiqueta HTML: `<div style="clear: both;"></div>`.

Tablas (Tables)

Para tablas complejas con múltiples columnas y encabezados, Markdown estándar puede ser limitado. Aquí es donde MkDocs brilla con su extensión Table Extended:

```
| Encabezado 1 | Encabezado 2 | Encabezado 3 |
|--------------|:------------:|-------------:|
| Celda izquierda | Celda centrada | Celda derecha |
| Datos 1 | Datos 2 | Datos 3 |
```


| Encabezado 1 | Encabezado 2 | Encabezado 3 |
|--------------|:------------:|-------------:|
| Celda izquierda | Celda centrada | Celda derecha |
| Datos 1 | Datos 2 | Datos 3 |


Explicación de la sintaxis:

El guion : se usa para alinear el contenido: :-- (izquierda, por defecto), --: (derecha), :--: (centro).
Puedes mezclar contenido de texto, enlaces e incluso imágenes dentro de las celdas de la tabla.

Bloques de Alerta (Admonitions)

Son perfectos para destacar información crítica, advertencias o notas. Usamos el siguiente formato (compatible con el tema Material for MkDocs):

```
!!! note "Título Opcional"
    Contenido de la nota. Puede tener múltiples párrafos o listas dentro.


!!! warning "Atención"
    Este es un mensaje de advertencia.

!!! danger "Peligro"
    ¡No ejecutar esta acción sin supervisión!

```
!!! note "Título Opcional"
    Contenido de la nota. Puede tener múltiples párrafos o listas dentro.

<br>

!!! warning "Atención"
    Este es un mensaje de advertencia.
<br>
!!! danger "Peligro"
    ¡No ejecutar esta acción sin supervisión!

