# Práctica CSS: Unidades Relativas
## Cafetería Montaña - Sitio Web Practica Proyecto Integrador

Este es un sitio web ficticio para una **cafetería llamada "Cafetería Montaña"**. El proyecto incluye un diseño responsivo con un sistema de **modo oscuro** activable manualmente y un **modal** interactivo para mostrar el menú completo de la cafetería. Además, la página se adapta de manera adecuada a dispositivos de diferentes tamaños de pantalla.

## Características del Proyecto

* **Modo Oscuro**: Permite a los usuarios cambiar entre el tema claro y oscuro mediante un botón en la esquina superior derecha. También se guarda la preferencia del usuario utilizando `localStorage`.
* **Modal para el Menú**: Al hacer clic en el botón "Ver Menú", se abre un modal con los productos destacados y nuevos con imágenes.
* **Diseño Responsivo**: Utiliza **unidades relativas** (`rem`, `em`, `vw`, `vh`, `%`) para asegurar que el diseño se adapte de manera fluida a diferentes tamaños de pantalla.
* **Tecnologías Utilizadas**:

  * **HTML5**: Estructura básica y contenido del sitio.
  * **CSS3**: Estilos para la página, incluyendo el modo oscuro y diseño responsivo.
  * **JavaScript**: Lógica para la interacción del botón del modo oscuro y el manejo del modal.
  * **`localStorage`**: Para almacenar la preferencia de modo oscuro del usuario.

## Requisitos

* Navegador moderno (Chrome, Firefox, Safari, Edge).
* Conexión a Internet (para imágenes de ejemplo y recursos de la página).

## Estructura de Archivos

La estructura del proyecto es la siguiente:

```
/cafeteria-montana
│
├── index.html       # Página principal del sitio web
├── styles.css       # Archivo de estilos CSS
├── scripts.js       # Lógica de JavaScript para interacción
└── README.md        # Este archivo con la documentación
```

## Explicación Técnica

### 1. **Modo Oscuro**

* **Detección Automática**: El sitio web detecta automáticamente si el usuario tiene configurado un tema oscuro en su sistema operativo utilizando la consulta CSS `@media (prefers-color-scheme: dark)`.

* **Cambio Manual**: Los usuarios pueden activar o desactivar el modo oscuro manualmente haciendo clic en el botón "Dark Theme", ubicado en la esquina superior derecha. Esta preferencia se guarda en `localStorage` para persistirla en futuras visitas.

* **Implementación**:

  * En **CSS**, utilizamos variables de color (`--primary-color`, `--background-color`, etc.) para definir los estilos para los modos claro y oscuro.
  * En **JavaScript**, verificamos si el modo oscuro está habilitado al cargar la página y actualizamos el tema según la preferencia guardada.

### 2. **Modal del Menú**

* **Interactividad**: El botón "Ver Menú" abre un modal con la lista de productos disponibles. Los usuarios pueden cerrar el modal haciendo clic en la **X** en la esquina superior derecha o fuera del área del modal.

* **Implementación**:

  * El modal se oculta inicialmente con la propiedad `display: none`.
  * Utilizamos JavaScript para mostrar el modal cuando el usuario hace clic en "Ver Menú" y para cerrarlo cuando se hace clic en la **X** o fuera del modal.

### 3. **Diseño Responsivo**

El sitio web está diseñado para adaptarse a pantallas de diferentes tamaños, desde computadoras de escritorio hasta dispositivos móviles.

* **Uso de Unidades Relativas**:

  * `rem` y `em` se usan para la tipografía y márgenes, de modo que el texto y el espaciado escalen adecuadamente con el tamaño de la pantalla.
  * `vw` y `vh` se usan para elementos que deben ajustarse al tamaño del **viewport**.
  * `%` se usa en el ancho de los contenedores, permitiendo que los elementos dentro de ellos se ajusten de manera fluida.

### 4. **Uso de `localStorage`**

El sitio guarda la preferencia del usuario sobre el **modo oscuro** en el `localStorage` del navegador. Esto asegura que, si el usuario cambia el tema, esta preferencia se mantenga incluso después de recargar la página o regresar en futuras visitas.

### 5. **HTML Semántico**

El proyecto hace uso de etiquetas HTML5 semánticas como `<header>`, `<footer>`, `<nav>`, y `<section>`, lo que ayuda a mejorar la accesibilidad y el SEO.

---

