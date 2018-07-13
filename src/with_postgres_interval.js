'use strict';

const inherits = require('./utils').inherits;
const getDataTypes = require('./utils').getDataTypes;
const getSequelize = require('./utils').getSequelize;

function withPostgresInterval(DataTypesOrSequelize) {
  const DataTypes = getDataTypes(DataTypesOrSequelize);
  const Sequelize = getSequelize(DataTypesOrSequelize);

  function INTERVAL(options) {
    if (!(this instanceof INTERVAL)) return new INTERVAL(options);
  };
  inherits(INTERVAL, DataTypes.INTERVAL);

  INTERVAL.prototype.parse = function(value) {
    return value;
  };

  DataTypes.postgres.INTERVAL = INTERVAL;

  // T_interval
  DataTypes.INTERVAL.types.postgres = {
    oids: [1186],
    array_oids: [1187]
  };

  if (Sequelize) {
    Sequelize.DataTypes = DataTypes;

    return Sequelize;
  }

  return DataTypes;
}

module.exports = withPostgresInterval;
