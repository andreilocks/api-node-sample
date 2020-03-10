const _ = require('lodash');

module.exports = function pickFields (data, schema) {
  return _.reduce(schema, (reducer, value, key) => {
    reducer[key] = data[key];
    return reducer;
  }, {});
}