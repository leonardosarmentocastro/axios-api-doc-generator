const COLOR_VARIANTS = {
  blue: '-color-blue',
  green: '-color-green',
  red: '-color-red',
  yellow: '-color-yellow',
};

const getColorVariantForHttpStatus = (httpStatus) => {
  const colorVariant = (() => {
    switch (true) {
      case (httpStatus >= 200 && httpStatus <= 299):
        return COLOR_VARIANTS.green;
      case (httpStatus >= 300 && httpStatus <= 399):
        return COLOR_VARIANTS.blue;
      case (httpStatus >= 400 && httpStatus <= 499):
        return COLOR_VARIANTS.yellow;
      case (httpStatus >= 500):
        return COLOR_VARIANTS.red;
    };
  })();

  return colorVariant;
};

export default getColorVariantForHttpStatus;
