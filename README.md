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
// TODO:
// Replace the storybook for: "parceljs" along with react's server side rendering since
// native nodejs modules can't be used with webpack on "target: node".
// import fs from 'fs';
// import React from 'react';
// import { storiesOf } from '@storybook/react';

// import ApiDoc from './components/ApiDoc';
// import { getApiDocsFiles } from '../commons/utils';

// (async () => {
//   // [
//   //   [{ ...details of all "GET /hello-world" api calls }],
//   //   [{ ...details of all "POST /users/sign_up" api calls }],
//   //   ...
//   // ]
//   const apiDocsFiles = await getApiDocsFiles();

//   apiDocsFiles.forEach(apiDocFile => {
//     const [ firstApiCallDetails ] = apiDocFile;
//     const {
//       requestDetails: {
//         method,
//         path
//       }
//     } = firstApiCallDetails;

//     // Creates a story for the giving API call
//     const apiCall = `[${method}] ${path}`; // [GET] /hello-world
//     let stories = storiesOf(apiCall, module);

//     // Creates a showcase of each API call scenario specified on functional tests.
//     apiDocFile.forEach(apiCallDetails => {
//       const { testResult } = apiCallDetails;
//       stories = stories.add(testResult.fullname, () => (
//         <ApiDoc
//           apiCallDetails={apiCallDetails}
//         />
//       ));
//     });
//   });
// })();
```
