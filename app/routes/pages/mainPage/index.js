module.exports = {
  path: 'project',
  childRoutes: [{
    path: 'town/:page',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./Body'))
      })
    }
  }]
};
