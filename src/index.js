'use strict';

const withParentInterval = require('./with_parent_interval');
const withPostgresInterval = require('./with_postgres_interval');

module.exports = function (DataTypes) {
  return withPostgresInterval(
    withParentInterval(DataTypes)
  );
};
