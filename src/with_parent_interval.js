'use strict';

const inherits = require('./utils').inherits;
const getDataTypes = require('./utils').getDataTypes;
const getSequelize = require('./utils').getSequelize;

function withParentInterval(DataTypesOrSequelize) {
  const DataTypes = getDataTypes(DataTypesOrSequelize);
  const Sequelize = getSequelize(DataTypesOrSequelize);

  function INTERVAL() {
    if (!(this instanceof INTERVAL)) return new INTERVAL(options);
  };
  inherits(INTERVAL, DataTypes.ABSTRACT);

  INTERVAL.key = 'INTERVAL';
  INTERVAL.prototype.toSql = function () {
    return 'INTERVAL';
  };

  DataTypes.INTERVAL = INTERVAL;

  if (Sequelize) {
    Sequelize.DataTypes = DataTypes;
    Sequelize.INTERVAL = INTERVAL;

    return Sequelize;
  }

  return DataTypes;
}

module.exports = withParentInterval;
