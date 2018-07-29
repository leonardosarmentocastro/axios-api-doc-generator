create **two `async` functions** in "axiosApiDocGenerator":
  1. `init`, responsible for:
    - deleting the "/tmp/axios-api-doc-generator" folder and creating it again;
  2. `finish`, responsible for:
    - read all ".json" files inside "/tmp/axios-api-doc-generator" and generate a static export of `storybook` on a specific folder of the user's project (in this case, `fifa-champs-backend`);

They will be used on the global setup of jest:
```js
// jest.config.js
module.exports = {
  globalSetup: axiosApiDocGenerator.init,
  globalTeardown: axiosApiDocGenerator.finish,
};
```

On `fifa-champs-backend`, we create a route like `/api/docs` which returns this `storybook` static html.

```js
TODO

4. fazer funcionar com props
5. exportar arquivo ".js", ".html" e ".css"
6. criar um método no "axios-api-doc-generator" que recebe o express's "app" e coloca uma rota "/api/docs


// ApiDoc.propTypes = {
//   apiCallDetails: {
//     requestDetails: PropTypes.shape({
//       method: PropTypes.string.isRequired,
//       path: PropTypes.string.isRequired,
//       headers: PropTypes.array,
//     }),
//     responseDetails: PropTypes.shape({
//       body: PropTypes.any.isRequired,
//       headers: PropTypes.array,
//       status: PropTypes.shape({
//         code: PropTypes.string.isRequired,
//         text: PropTypes.string.isRequired,
//       }),
//     }),
//     testResults: PropTypes.shape({
//       description: PropTypes.string.isRequired,
//       fullName: PropTypes.string.isRequired,
//     }),
//   },
// };

// export default ApiDoc;
```
