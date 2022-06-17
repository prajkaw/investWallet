// const nodeLibs = require('node-libs-browser');

// module.exports = {
//   resolver: {
//     extraNodeModules: nodeLibs
//   }
// };

import extraNodeModules from 'node-libs-browser';
export const resolver = {
  extraNodeModules: {
    crypto: './node_modules/crypto-js',
    },
};
export const transformer = {
  getTransformOptions: async () => ({
    transform: {
      experimentalImportSupport: false,
      inlineRequires: false,
    },
  }),
};

