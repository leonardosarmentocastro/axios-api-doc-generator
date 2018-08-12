const axiosApiDocGenerator = require('../../../../src/axios-api-doc-generator');
const {
  testsHelper: {
    API,
    closeWebserver,
    startWebserver,
  },
} = require('../../../helpers');
const usersValidator = require('../../validator');

beforeAll(async () => {
  return await startWebserver();
});

afterAll(async () => {
  await axiosApiDocGenerator.createApiDocsForTests();
  return await closeWebserver();
});

const ENDPOINT = '/api/users/sign-up';
describe(`[post] ${ENDPOINT}`, () => {
  it('(200) must return the "savedUser" from database on body', async () => {
    const user = {
      slack: {
        displayName: '@leonardo.caxumba',
      },
      password: '1q2w#E$R',
    };

    const response = await API.post(ENDPOINT, user)
    const { data: body } = response;

    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('slack.displayName', user.slack.displayName);
    expect(body).toHaveProperty('password', user.password);
    expect(body).toHaveProperty('createdAt');
  });

  it('(500) when receiving an empty user', () => {
    const user = {};

    return API.post(ENDPOINT, user)
      .catch(err => {
        const body = err.response.data;
        expect(body).toEqual(usersValidator.ERRORS.USER_IS_EMPTY);
      });
  });

  it('(500) when receiving an empty "user.slack.displayName"', () => {
    const user = {
      slack: {
        displayName: '',
      },
    };

    return API.post(ENDPOINT, user)
      .catch(err => {
        const body = err.response.data;
        expect(body).toEqual(usersValidator.ERRORS.NO_SLACK_DISPLAY_NAME_PROVIDED);
      });
  });

  it('(500) when receiving an empty "user.password"', () => {
    const user = {
      slack: {
        displayName: '@leonardo.caxumba',
      },
      password: '',
    };

    return API.post(ENDPOINT, user)
      .catch(err => {
        const body = err.response.data;
        expect(body).toEqual(usersValidator.ERRORS.NO_PASSWORD_PROVIDED);
      });
  });

  it('(500) when receiving an "user.password" that is not strong enough', () => {
    const user = {
      slack: {
        displayName: '@leonardo.caxumba',
      },
      password: 'not strong enough',
    };

    return API.post(ENDPOINT, user)
      .catch(err => {
        const body = err.response.data;
        expect(body).toEqual(usersValidator.ERRORS.PASSWORD_IS_NOT_STRONG_ENOUGH);
      });
  });
});
