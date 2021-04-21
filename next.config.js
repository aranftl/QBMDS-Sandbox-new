
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['x8ztdr6NwjtFcF6gdhDwfr'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  