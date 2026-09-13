# Flujo de trabajo de Git
## 1. Objetivo

El objetivo de esta sección es documentar el flujo de trabajo utilizado para administrar los cambios realizados en los proyectos mediante Git y GitHub, estableciendo una forma organizada de trabajar y colaborar.
## 2. ¿Qué es Git?

Git es un sistema de control de versiones que permite registrar y administrar los cambios realizados en los archivos de un proyecto.

Su utilización permite:

* Mantener un historial de modificaciones.
* Identificar quién realizó un cambio.
* Recuperar versiones anteriores.
* Trabajar mediante diferentes ramas.
* Integrar cambios realizados por diferentes desarrolladores.
* Mantener organizado el desarrollo del proyecto.

## 3. ¿Qué es GitHub?

GitHub es una plataforma que permite alojar repositorios Git de manera remota.

Dentro del flujo de trabajo, Git se utiliza principalmente desde el equipo local mediante Git Bash, mientras que GitHub permite almacenar el repositorio y facilitar la colaboración entre los integrantes del equipo.

## 4. Flujo General  de Git
 ```
 FLUJO DE TRABAJO GENERAL
 Repositorio en GitHub
        ↓
   Clonar repositorio
        ↓
    Crear una rama
        ↓
   Realizar cambios
        ↓
    Revisar cambios
        ↓
      Commit
        ↓
       Push
        ↓
   Pull Request
        ↓
 Revisión del código
        ↓
      Merge
  
 ```
## 5. Descripción de cada etapa

Antes de comenzar se debe comprobar que Git se encuentra instalado correctamente mediante el siguiente comandoB en Git Bash:

 ```
git --version
 ``` 

Este comando muestra la versión de Git instalada en el equipo y permite comprobar que la herramienta se encuentra disponible para utilizarse.

### 5.1 Clonar el repositorio

Consiste en obtener una copia local del proyecto almacenado en GitHub.

Esto permite trabajar con los archivos directamente desde el equipo de desarrollo.

comando para clonar un repositorio:

 ```
git clone URL_del_repositorio
ejemplo:
git clone https://github.com/organizacion/proyecto.git
 ```
### 5.2 Crear una rama y cambiarse a Ella.

La rama permite desarrollar una funcionalidad, corrección o modificación sin afectar directamente la rama principal del proyecto.

Por ejemplo

 ```
 git branch nombre de la rama
 git checkout  Dep-Montse
 ó
 git checkout -b feature/nueva-funcionalida
 ```

### 5.3 Realizar cambios

Una vez creada la rama, se realizan las modificaciones correspondientes al requerimiento o tarea asignada.

Estos cambios pueden incluir:

- Modificación de código.
- Creación de archivos.
- Corrección de errores.
- Actualización de estilos.
- Modificación de documentación.

### 5.4 Revisar los cambios

Antes de guardar los cambios en Git, es recomendable verificar qué archivos fueron modificados.

 ```
git status
 ```

Este comando permite conocer el estado actual del repositorio.

### 5.5 Crear un commit

El commit permite registrar un conjunto de cambios en el historial del repositorio.

 ```
git add .
git commit -m "Descripción del cambio"
 ```

El mensaje debe describir de manera clara qué se modificó.

### 5.6 Enviar los cambios a GitHub

Después de realizar el commit, los cambios se envían al repositorio remoto:

```
git push origin nombre-de-la-rama
 ```

Esto permite que los demás integrantes del equipo puedan acceder a los cambios realizados.

### 5.7 Pull Request

El Pull Request permite solicitar que los cambios realizados en una rama sean revisados antes de incorporarlos a la rama principal.

Durante esta etapa se puede verificar:

- Funcionamiento del código.
- Calidad del código.
- Cumplimiento de estándares.
- Posibles errores.
- Compatibilidad con el proyecto.

### 5.8 Revisión y Merge

Después de la revisión, los cambios pueden integrarse a la rama correspondiente mediante un Merge (fusión).

De esta manera, los cambios aprobados pasan a formar parte del código principal del proyecto.

## 6. Sugerencia del estandar de trabajo.

Para mantener un flujo de desarrollo organizado, los cambios correspondientes a nuevas funcionalidades, correcciones o modificaciones independientes deberán realizarse mediante ramas de trabajo, evitando modificar directamente la rama principal del proyecto.

Cada cambio deberá ser registrado mediante un commit descriptivo y posteriormente enviado al repositorio remoto para su revisión e integración.