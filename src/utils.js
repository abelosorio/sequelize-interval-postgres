'use strict';

const util = require('util');
const _ = require('lodash');

function getDataTypes(DataTypesOrSequelize) {
  if (DataTypesOrSequelize.name === 'Sequelize') {
    return DataTypesOrSequelize.DataTypes;
  } else {
    return DataTypesOrSequelize;
  }
}

function getSequelize(DataTypesOrSequelize) {
  if (DataTypesOrSequelize.name === 'Sequelize') return DataTypesOrSequelize;
}


/**
 * like util.inherits, but also copies over static properties
 * @private
 */
function inherits(constructor, superConstructor) {
  util.inherits(constructor, superConstructor); // Instance (prototype) methods
  _.extend(constructor, superConstructor); // Static methods
}

module.exports.inherits = inherits;
module.exports.getDataTypes = getDataTypes;
module.exports.getSequelize = getSequelize;
