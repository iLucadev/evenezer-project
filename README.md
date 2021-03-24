---
  Node_dependencies:
    - ReactJS
    - Craco
    - Tailwind
---

# Evenezer

Este es un proyecto de ecommerce creado con [Facebook - ReactJS](https://github.com/facebook/create-react-app), [tailwindlabs - TailwindCSS](https://github.com/tailwindlabs/tailwindcss) como framework de CSS y [Google - Firebase](https://github.com/firebase/) como base de datos.

## Files Structure
En el directorio del proyecto se encuentra la siguiente estructura de carpetas:

1. containers: componentes controladores.
2. components: componentes.
3. hooks: custom hooks.
4. store: context components.
5. routers: custom routes.
6. firebase: firebase idexation component.
7. styles: css styles.

## Aplicación de React

Para inicializar la aplicación:

```
npm start
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```
npm test
```
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Funcionamiento

En el context GlobalContext se realiza el llamado a Firestore con el método GET para obtener productos y categorías, los que son enviados a partir del GlobalProvider a los componentes que los requieran.

La aplicación tiene las funcionalidades mínimas necesarias para una operación: una lista de productos categorizados, detalles de producto, un carrito de compras y un comprobante.
