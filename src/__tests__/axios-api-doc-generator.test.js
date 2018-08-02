const axiosApiDocGenerator = require('../axios-api-doc-generator');
const {
  testsHelper: {
    API,
    closeWebserver,
    startWebserver,
  },
} = require('../../lib/helpers');

beforeAll(async () => await startWebserver());

afterAll(async () => await closeWebserver());
// afterAll(async () => {
//   await axiosApiDocGenerator.createApiDocsForTests();
//   return await closeWebserver();
// });

describe('Generating API DOCS for:', () => {
  describe('[GET] /hello-world', () => {
    const specs = {
      apiCall: {
        request: {
          method: 'get',
          path: '/hello-world',
          config: {
            headers: { 'request-custom-header': 12345 },
          }
        },
        response: {
          body: { message: "Hello world" },
          headers: { 'response-example-custom-header': 'example-value' },
          status: {
            code: 200,
            text: 'OK',
          }
        }
      },
    };
    let requestDetails = null;
    let responseDetails = null;

    beforeAll(async () => {
      const { path, config } = specs.apiCall.request;
      await API.get(path, config);

      const apiCall = axiosApiDocGenerator.singletons.apiCalls[0];
      requestDetails = apiCall.requestDetails;
      responseDetails = apiCall.responseDetails;
    });

    describe('[singleton] "request details" must match the following:', () => {
      it('"method": "get"', () => {
        expect(requestDetails.method)
          .toBe(specs.apiCall.request.method);
      });

      it('"path": "/hello-world"', () => {
        expect(requestDetails.path)
          .toBe(specs.apiCall.request.path);
      });

      it(`"headers": ${JSON.stringify(specs.apiCall.request.config.headers)}`, () => {
        expect(requestDetails.headers)
          .toMatchObject(specs.apiCall.request.config.headers);
      });
    });

    describe('[singleton] "response details" must match the following:', () => {
      it('"body": "{ message: "Hello world" }"', () => {
        expect(responseDetails.body)
          .toMatchObject(specs.apiCall.response.body);
      });

      it(`"headers": ${JSON.stringify(specs.apiCall.response.headers)}`, () => {
        expect(responseDetails.headers)
          .toMatchObject(specs.apiCall.response.headers);
      });

      it(`"status.code": ${JSON.stringify(specs.apiCall.response.status.code)}`, () => {
        expect(responseDetails.status.code)
          .toBe(specs.apiCall.response.status.code);
      });

      it(`"status.text": ${JSON.stringify(specs.apiCall.response.status.text)}`, () => {
        expect(responseDetails.status.text)
          .toBe(specs.apiCall.response.status.text);
      });
    });

    describe('generated ".json" file', () => {
      // TODO...
      // beforeAll(async () => await axiosApiDocGenerator.createApiDocsForTests());

    });
  });
});
