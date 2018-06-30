const requestInterceptor = require('./request/request-interceptor');
const responseInterceptor = require('./response/response-interceptor');

const axiosApiDocGenerator = {
  get requestInterceptor() { return { ...requestInterceptor }; },
  get responseInterceptor() { return { ...responseInterceptor }; },
};

module.exports = axiosApiDocGenerator;
