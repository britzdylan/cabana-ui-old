const cabanaInfo = require('./package.json');
const config = require('./cabana.config.js');

const mainFunction = async ({ addComponents, config, theme }) => {
  let components = require('./elements/index.js');
  let logs = config('cabana.logs', true);
  if (logs === true) {
    console.log('=============================================');
    console.log(
      '\x1b[35m%s\x1b[0m',
      'CabanaUI ' + cabanaInfo.version,
      '\x1b[0m',
      cabanaInfo.homepage
    );
    console.log('=============================================');
  }

  addComponents(components(theme));
};

module.exports = require('tailwindcss/plugin')(mainFunction, {
  ...config,
});
