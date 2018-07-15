// TODO:
// Replace the storybook for: "parceljs" along with react's server side rendering since
// native nodejs modules can't be used with webpack on "target: node".


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
