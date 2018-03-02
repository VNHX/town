module.exports = {
  path: 'project',
  childRoutes: [{
    path: 'town',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./Body'))
    })
    }
  }
  ]
};
