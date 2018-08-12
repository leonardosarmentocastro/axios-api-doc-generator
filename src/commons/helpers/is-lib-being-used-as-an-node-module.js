const isLibBeingUsedAsAnNodeModule = () => !(process.cwd().includes('axios-api-doc-generator'));

module.exports = isLibBeingUsedAsAnNodeModule;
