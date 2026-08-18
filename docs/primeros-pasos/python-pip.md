# Instalación de Python y Pip

Bienvenido al equipo. Aunque el desarrollo de nuestros productos core se centra en otros ecosistemas (como Node.js para nuestro backend en NestJS o el entorno móvil con React Native), **Python es una dependencia obligatoria en CodeWebAI**. 

Lo utilizamos para gestionar, compilar y probar localmente toda nuestra documentación técnica estructurada con MkDocs.

En esta guía te explicaremos cómo instalar Python y su gestor de paquetes (`pip`) de manera limpia y estandarizada, dependiendo de tu sistema operativo.

---

## 1. Instalación en Windows

Para los desarrolladores que utilizan Windows, el proceso más seguro es utilizar el instalador oficial.

**Pasos:**

1. Dirígete a la [página oficial de descargas de Python](https://www.python.org/downloads/windows/).
2. Descarga el instalador ejecutable de la versión estable más reciente (recomendamos Python 3.10 o superior).
3. **⚠️ PASO CRÍTICO:** Al abrir el instalador, en la primera pantalla, **debes marcar obligatoriamente la casilla que dice *"Add python.exe to PATH"*** (o *"Add Python to environment variables"*). Si omites este paso, ningún comando funcionará en tu terminal.
4. Haz clic en *"Install Now"* y permite que finalice el proceso.
5. Al terminar, si ves una opción que dice *"Disable path length limit"*, haz clic en ella. Esto evitará futuros errores con rutas de archivos muy largas en Windows.

**Verificación:**

Abre una nueva ventana de **PowerShell** o **CMD** y ejecuta:

```powershell
python --version
pip --version
```
!!! note 
    Si ambos comandos devuelven una versión, estás listo.

## 2. Instalación en macOS

En macOS, desaconsejamos fuertemente modificar la versión de Python que viene instalada por defecto con el sistema operativo. La mejor práctica para un entorno de desarrollo es utilizar Homebrew.

**Pasos:**

Si aún no tienes Homebrew instalado, abre tu Terminal y ejecuta:

```bash
/bin/bash -c "$(curl -fsSL [https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh](https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh))"
```

Una vez que tengas Homebrew, instala Python ejecutando:

```bash
brew install python
```

!!! note
    Homebrew instalará automáticamente tanto Python como pip de manera segura en tu directorio de usuario.

**Verificación:**

En macOS, debes usar explícitamente el sufijo 3 para referirte a la versión que acabas de instalar:

```bash
python3 --version
pip3 --version
```

## 3. Instalación en Linux

La mayoría de las distribuciones de Linux (como Ubuntu, Debian o Fedora) ya vienen con Python preinstalado. Sin embargo, es fundamental actualizarlo y asegurarnos de tener todas las herramientas de compilación necesarias.

**Pasos:**

**Ubuntu / Debian:**
Ejecuta los siguientes comandos para actualizar los repositorios e instalar Python y pip (a veces viene empaquetado como `python3-pip`):

```bash
sudo apt update
sudo apt install python3 python3-pip
```
**Fedora / CentOS:**
Utiliza `dnf` para actualizar e instalar las herramientas:

```bash
sudo dnf update
sudo dnf install python3 python3-pip
```
**Verificación:**
Al igual que en macOS, en Linux usarás el sufijo `3`:
```bash
python3 --version
pip3 --version
```

!!! warning "¡Cuidado con el comando `python`!" 
    En muchos sistemas Linux, el comando `python` podría apuntar a una versión muy antigua de Python 2 (que ya no tiene soporte). **Siempre debes usar `python3`** en lugar de `python` para evitar conflictos con las herramientas del sistema.

**💡 Reglas de Oro de CodeWebAI (Senior Dev Tips)**
Antes de que empieces a instalar paquetes a lo loco, todo desarrollador de nuestro equipo debe adherirse a las siguientes dos reglas al trabajar con Python:

**Mantén pip actualizado:**
El gestor de paquetes se actualiza frecuentemente. Es una buena práctica correr este comando tras tu instalación inicial:

```bash
# Windows
python -m pip install --upgrade pip

# macOS / Linux
python3 -m pip install --upgrade pip
```

**Cero instalaciones globales (El pecado capital):**

NUNCA ejecutes `pip install <paquete>` a nivel global en tu máquina (y mucho menos uses `sudo pip install` en Linux/Mac). Instalar paquetes globalmente es la receta perfecta para crear conflictos de dependencias entre distintos proyectos.

En CodeWebAI exigimos el uso de Entornos Virtuales (venv) para aislar las dependencias de nuestra documentación.

👉 Dirígete a la [siguiente sección](../primeros-pasos/instalacion-mkdocs.md) para aprender a configurar tu entorno virtual antes de instalar MkDocs.

