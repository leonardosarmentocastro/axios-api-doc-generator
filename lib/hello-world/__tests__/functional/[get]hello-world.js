const axiosApiDocGenerator = require('../../../../src/axios-api-doc-generator');
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
