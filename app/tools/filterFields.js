const _ = require('lodash');

function getFields(item, fields) {
  const out = {};

  _.each(fields, (field) => {
    _.set(out, field, _.get(item, field)); 
  });

  return out;
}

module.exports = function getFieldsFromList(items, fields) {
  return items.map(item => getFields(item, fields));
}
