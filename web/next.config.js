const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images:{
    domains:['localhost:4000/img/','localhost:4000/' ],
  }
}