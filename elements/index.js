const btn = require('./button');
const link = require('./link');
const menu = require('./menu');
const pill = require('./pill');
const breadcrumb = require('./breadcrumb');
const main = (theme) => {
  return {
    ...btn(theme),
    ...link(theme),
    ...menu(theme),
    ...pill(theme),
    ...breadcrumb(theme),
  };
};
module.exports = main;
