const btn = require('./button');
const link = require('./link');
const menu = require('./menu');
const main = (theme) => {
  return {
    ...btn(theme),
    ...link(theme),
    ...menu(theme),
  };
};
module.exports = main;
