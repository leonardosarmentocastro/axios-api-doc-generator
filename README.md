# axios-api-doc-generator

Automatically generates API documentation based on your application functional tests.

![](https://i.imgur.com/qRW2Pge.png)


## Table of contents

1. [How does it works](#how-does-it-works)
1. [Motivations](#motivations)
1. [How to use it in your project](#how-to-use-it-in-your-project)
1. [Contribute](#contribute)


## How does it works

- 💻 **You write functional tests for your API endpoints** using [axios](https://github.com/axios/axios) and [jest](https://github.com/facebook/jest)
- 📕 `axios-api-doc-generator` intercepts all the calls done by your `axios` instance and store each request/response information
- 📦 After all tests have finished running, it uses [`Parcel.js bundler`](https://github.com/parcel-bundler/parcel) to build a web application that displays all information done by API calls on tests
- 💝 You plug-in the `axios-api-doc-generator` as a middleware in your [`Express`](https://expressjs.com/) web server so it exposes a `/api/docs` endpoint that renders the web application as a static file


## Motivations

_**Enforce the development of functional tests by earning something tangible from it.**_

Usually, API contract changes are done on code and documentations gets obsolete since it's usually a `.yml` or `@jsdoc` that no one cares about or forgets to update it.

This package was built with the mindset that **all changes should be made in code**.


## How to use it in your project

  > **All the examples above using the `axios-api-doc-generator` are based on the code under the `/lib` folder.**

  1. [Pre requirements](#1-pre-requirements)
  2. [Setup an axios instance](#2-setup-an-axios-instancet8c~)
  3. [Collecting data from API calls](#3-collecting-data-from-api-calls)
  4. [Connecting with jest](#4-connecting-with-jest)
  5. [Exposing the endpoint for documentation](#5-exposing-the-endpoint-for-documentation)


### 1. Pre requirements

- Use [`Express`](https://expressjs.com/) as your web server

- Use [`jest`](https://github.com/facebook/jest) as **test runner**

  ```bash
  $ npm install --save-dev jest
  # $ yarn add --dev jest
  ```

- Use [`axios`](https://github.com/axios/axios) to **perform API calls** to your server

  ```bash
  $ npm install --save-dev axios
  # $ yarn add --dev axios
  ```

- Install `axios-api-doc-generator`

  ```bash
  $ npm install --save-dev axios-api-doc-generator
  # $ yarn add --dev axios-api-doc-generator
  ```


### 2. Setup an axios instance

`axios-api-doc-generator` needs to track all request/response information of your API calls.

To do so, **create an `axios` instance to be used inside your functional tests:**

**lib/helpers/tests-helper.js**
```js
const { requestInterceptor, responseInterceptor } = require('axios-api-doc-generator');

const API = (() => {
  const ip = '127.0.0.1';
  const port = 8080;
  const instance = axios.create({
    baseURL: `http://${ip}:${port}`, // Address where your server is exposed
  });

  // Intercept all API calls during tests so API documentation can be generated automatically.
  instance.interceptors.request.use(requestInterceptor.onSuccess);
  instance.interceptors.response.use(responseInterceptor.onSuccess, responseInterceptor.onError);

  return instance;
})();

module.exports = API;
```

### 3. Collecting data from API calls

The interceptor connected to your `API` instance [will store all information into a singleton](#list-of-improvements).

At every test file that you want to write api docs for, [you must call `createApiDocsForTests` after all tests are run](#list-of-improvements):

**lib/hello-world/__tests__/functional/[get]hello-world.js**
```js
const axiosApiDocGenerator = require('axios-api-doc-generator');
const {
  testsHelper: {
    API,
    closeWebserver,
    startWebserver,
  },
} = require('../../../helpers');

beforeAll(async () => {
  return await startWebserver();
});

afterAll(async () => {
  await axiosApiDocGenerator.createApiDocsForTests(); // This is where the magic happens.
  return await closeWebserver();
});

const ENDPOINT = '/api/hello-world';
describe(`[get] ${ENDPOINT}`, () => {
  it('(200) must return an "{ message: \"Hello world\" }"', async () => {
    const response = await API.get(ENDPOINT);
    const { data: body } = response;

    expect(body).toHaveProperty('message', 'Hello world');
  });
});

```

### 4. Connecting with jest

For now, the solution is bound to **jest** because we relly on its global hooks to execute tasks:

* Before/after all tests of all files are run
* Capture the description of each test

To do so, in your **jest configuration file(`package.json` or `jest.config.js`)** you must specify:
```json
// Pretend we store all those files at `<rootDir>/config/jest/`
{
  "globalSetup": "<rootDir>/config/jest/global-setup.js",
  "globalTeardown": "<rootDir>/config/jest/global-teardown.js",
  "setupTestFrameworkScriptFile": "<rootDir>/config/jest/setup-test-framework-script-file.js"
}
```

**config/jest/global-setup.js**
```js
const axiosApiDocGenerator = require('axios-api-doc-generator');
module.exports = (globalConfig) => axiosApiDocGenerator.jestGlobalSetup(globalConfig);
```

**config/jest/global-teardown.js**
```js
const axiosApiDocGenerator = require('axios-api-doc-generator');
module.exports = (globalConfig) => axiosApiDocGenerator.jestGlobalTearDown(globalConfig);
```

**config/jest/global-teardown.js**
```js
const axiosApiDocGenerator = require('axios-api-doc-generator');
axiosApiDocGenerator.jestSetupTestFrameworkScriptFile();
```

After all this is done, running your tests with `npm test` shall already produce a web application under `axios-doc-generator/dist/web` folder.


### 5. Exposing the endpoint for documentation

Lastly, use your node http server(known as `app` under `express` terminology) to expose the endpoint `/api/docs`:

**lib/webserver/webserver.js**
```js
const express = require('express');

const app = express();
axiosApiDocGenerator.connectStaticFilesServirgMiddleware(app);

const port = 8080;
const ip = '127.0.0.1';
app.listen(port, ip, () => console.log(`Server is running on port ${port}`));
```

Run your tests with `npm test` then open your favorite browser at http://127.0.0.1:8080 to see:
![](https://i.imgur.com/qRW2Pge.png)

-----

## Contribute

Here you can find a list of proposed improvements.

In case you liked the idea of this package and want to make it better, feel free to open organized pull requests for it.

1. Use `memory-cache` to store request/response information instead of using a singleton to write json files at `/tmp`folder;
2. Automatically generates documentation for each API call, eliminating the need to call `createApiDocsForTests`;
3. Try to turn it agnostic to test runner(jest) so we don't need `config/jest/*.js` files;
4. Try to turn it agnostic to http library(axios).
