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
