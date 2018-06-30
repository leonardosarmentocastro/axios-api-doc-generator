const appendContentToFile = require('./src/commons/utils/append-content-to-file');

const fileName = '/tmp/test.json';
const content = {
  tendiNada: 'mas show, kkkk'
};
appendContentToFile(fileName, content);
