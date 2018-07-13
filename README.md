# sequelize-interval-postgres

[![NPM version](https://img.shields.io/npm/v/sequelize-interval-postgres.svg)](https://www.npmjs.com/package/sequelize-interval-postgres)

Add support for **INTERVAL** data-type for **PostgreSQL** in **Sequelize**.

## Motivation

Read:
-   https://github.com/sequelize/sequelize/issues/2572
-   https://github.com/sequelize/sequelize/issues/4900

## Install

```bash
npm install --save sequelize-interval-postgres
```

## Use to define models

`models/my_model.js`
```javascript
const withInterval = require('sequelize-interval-postgres');

module.exports = function (sequelize, SequelizeDataTypes) {
  const DataTypes = withInterval(SequelizeDataTypes);

  const MyModel = sequelize.define('myModel', {
    someIntervalField: {
      type: DataTypes.INTERVAL
    },

    // ...
  });

  // ...

  return MyModel;
};
```

## Use in migrations

`migrations/<timestamp>-add-some-interval-field-to-my-model.js`
```javascript
const withInterval = require('sequelize-interval-postgres');

module.exports = {
  up: function (queryInterface, SequelizeBase) {
    const Sequelize = withInterval(SequelizeBase);

    return queryInterface.addColumn('myModel', 'someIntervalField', {
      type: Sequelize.INTERVAL
    });
  },

  // ...
};
```
