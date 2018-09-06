
module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['last 5 versions']
    }
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins['postcss-px2rem'] = {
    remUnit: 37.5
  }
}
