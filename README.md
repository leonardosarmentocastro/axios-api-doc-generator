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

TODO

3. Criar testes para a rota "/hello-world", tendo assim, um cenário real de multiplicos arquivos no "/tmp/axios...";
4. fazer funcionar com props
  4.0. [bug] O arquivo está com apenas 2 niveis de array quando deveria ter 3.
  4.1. editar o arquivo "api-docs.json" para ficar com informações bonitas iguais ao do protótipo no photoshop.
  E para que ele não seja sobescrito toda hora pela task "npm test", criar com o nome de "api-docs.example.json" e importá-lo no lugar do "api-docs.json" (só não esquecer de voltar o import depois).
5. exportar arquivo ".js", ".html" e ".css"
6. criar um método no "axios-api-doc-generator" que recebe o express's "app" e coloca uma rota "/api/docs
7. exportar o "config/jest/global-teardown.js" como uma função do "axios-api-doc-generator.js";

```
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

```html
<div className='api-call'>
  <p className='request-summary'>[get] /hello-world</p>
  <div className='cases -color-green'>
    <p className='case'>(200) must return an "message" on the body</p>
    <p className='case'>(200) must return an "potato" on the body</p>
  </div>

  <p className='request-summary'>[post] /users/sign-up</p>
  <div className='cases -color-red'>
    <p className='case -is-selected'>(500) must return an "error" object when receiving an empty "user"</p>
    <p className='case'>(500) must return an "error" object when receiving an empty "user.password"</p>
    <p className='case'>(500) must return an "error" object when receiving an empty "user.password" that is not strong enough</p>
  </div>
</div>
```