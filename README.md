<p align="center">
  <a href="https://edicsonabel.com">
    <img width="100" alt="Edicson Abel" src="src/assets/icon.svg" />
  </a>
  <h1 align="center">Edicson Abel</h1>
</p>

En este sitio encontraras varios apartados que me gustaría compartir con ustedes, ya sean artículos, proyectos realizados, información acerca de mí y algunas cosas más que estaré añadiendo.

## 🌐 Acerca del sitio
El sitio está hecho con [Gatsby][linkgatsby] ya que quise realizar una SPA con [React][linkreact] donde pudiese colocar mis artículos. Asimismo, hago uso de [Prism][linkprism] para el resaltado de sintaxis de código, [Algolia][linkalgolia] como buscador de artículos, [JavaScript Standard Style][linkstandard] como linter y formateador, [SASS][linksass] como preprocesador de estilos y [Markdown][linkmd] para la redacción de artículos debido a que es un lenguaje de marcado ligero.

## 🚥 Comandos
Lo primero que debemos hacer es instalar los paquetes necesarios del proyecto.
```bash
# npm
npm install

# yarn
yarn install
```

Luego, iniciar el proyecto de forma local.
```bash
# npm
npm run start

# yarn
yarn start
```

Una vez que tengamos nuestros cambios hechos y queramos construir el proyector, usamos el comando.
```bash
# npm
npm run build

# yarn
yarn build
```

Si queremos observar el proyecto construido o luego del `build`, usamos el comando.
```bash
# npm
npm run serve

# yarn
yarn serve
```

En tal caso que queramos borrar el cache del proyecto, usamos el comando.
```bash
# npm
npm run clean

# yarn
yarn clean
```

Un comando útil es el de formateo, que nos permite formatear todos los archivos según la configuración de `standard`.
```bash
# npm
npm run format

# yarn
yarn format
```

## 🔖 Crear artículos
Los artículos se crean en la ruta `src/posts/` con el modelo de archivo `<slug-del-artículo>.{md, mdx}.`

Para que pueda compilarse correctamente, debemos agregar los metadatos según este ejemplo:
> Archivo: `src/posts/que-es-eslint-y-por-que-deberias-utilizarlo.mdx`
```mdx
---
title: '¿Qué es ESLint y por qué deberías utilizarlo?'
date: 2022-03-24 07:00:00
image: '../../assets/images/eslint-header.png'
author: 'edicsonabel'
excerpt: 'ESLint es un linter para JavaScript y TypeScript alojado en npm, utilizado para analizar, advertir y arreglar errores en nuestro código. La extensión de ESLint en VSCode nos facilita la sintaxis cuando hacemos uso del autofix.'
tags:
  - eslint
  - javascript
  - vscode
---

Contenido del artículo...
```

## 🎨 Estilos en los artículos
Cuando estemos escribiendo algún artículo, a veces es necesario usar algunas de estas clases.

### Videos de YouTube
Si queremos que nuestro video sea responsivo al insertar un `iframe` de YouTube, debemos rodear el `iframe` con un `div` que contenga la clase `yt-video`.
```html
<div className="yt-video">
  <iframe src="https://www.youtube.com/embed/5L5KxvsHZ2Q?rel=0&amp;showinfo=0" />
</div>
```

### Logos
Cuando tengamos insertar una imagen que no queramos que sea el 100% del `container` y/o queremos que se vea como un logo, debemos rodear la etiqueta `img` con un `figure` de clase `logo`. 
```html
<figure className='logo'>
  <img alt='Logo de Error Lens en VS Code' src='../../assets/images/error-lens-logo-vscode.webp' />
</figure>
``` 


[linkgatsby]: https://www.gatsbyjs.com/ "Enlace del sitio web de Gatsby"
[linkreact]: https://reactjs.org/ "Enlace del sitio web de React"
[linkalgolia]: https://www.algolia.com/ "Enlace del sitio web de Algolia"
[linkprism]: https://prismjs.com/ "Enlace del sitio web de Prism"
[linkstandard]: https://standardjs.com/ "Enlace del sitio web de JavaScript Standard Style"
[linksass]: https://sass-lang.com/ "Enlace del sitio web de SASS"
[linkmd]: https://daringfireball.net/projects/markdown/ "Enlace del sitio web de Markdown"
