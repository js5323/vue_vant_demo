module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['last 5 versions']
    },
    'postcss-px2rem': {
      remUnit: 37.5
    },
    'precss': {},
    'postcss-theme-variables': {
      vars: {
        'button-primary-background-color': '#03A9F4',
        'button-warning-background-color': '#03A9F4',
        'button-danger-background-color': '#03A9F4',
      }
    }
  }
}
