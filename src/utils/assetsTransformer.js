/* eslint no-use-before-define: 0 */ // --> OFF

const path = require('path');

module.exports = {
  process(src, filename) {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  },
};
