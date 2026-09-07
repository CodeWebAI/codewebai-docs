# Definicion de Extensiones o librerias.
Dentro del desarrollo de la documentacion para CodeWebAI tenemos incluidas extensiones y librerias que nos permiten el buen funcionamiento y presentacion de nuestra empresa.

## Lista de Extensiones
### 1.  - attr_list
 Esta extension permite personalizar elementos Markdown agregándoles atributos.
Ejemplo
``` 
# Título
{: .mi-clase }
```
Esto permite aplicar cosas como:

- clases CSS
- identificadores (id)
- algunos atributos HTML
- estilos o comportamientos definidos por el tema

Un uso muy común es darle una clase específica a un elemento para modificar su apariencia mediante CSS.

### 2. md_in_html 

  Esta extension permite mezclar HTML y Markdown dentro del mismo bloque.

  Ejemplo

  **HTML**

```
  <div>
Este es un texto.
</div>
```

**Markdown**

``` 
<div markdown="1">

## Este es un título

Este texto está escrito en **Markdown**.

</div>
```