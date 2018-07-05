const getFormattedPathForJsonFile = (path) => {
  const formattedPathForJsonFile = path // "/users/sign-up"
    .replace(/\//, '') // "users/sign-up"
    .replace(/\//g, '_'); // "users_sign-up"

  return formattedPathForJsonFile;
}

module.exports = getFormattedPathForJsonFile;
