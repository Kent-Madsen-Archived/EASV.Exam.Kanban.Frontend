const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  
  devServer: 
  {
    allowedHosts: ['127.0.0.1', 'https://kanban-frontend-ke7hp.ondigitalocean.app/']
  },

  parallel: true
})