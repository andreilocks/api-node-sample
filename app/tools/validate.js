const Promise = require('bluebird');
const pickFields = require('./pickFields');
const Joi = require('joi');

module.exports = function (data, schema) {
  return new Promise((resolve, reject) => {
    Joi.validate(pickFields(data, schema), schema, (err, value) => {
      if (err) return reject(err);
      return resolve(value);
    });
  });
}