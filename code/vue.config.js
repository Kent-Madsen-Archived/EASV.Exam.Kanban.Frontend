const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  
  devServer: 
  {
    disableHostCheck: true,
    proxy: 'https://kanban-frontend-ke7hp.ondigitalocean.app/'
  },

  parallel: true
})