const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  devServer: {
    host: 'kanban-frontend-ke7hp.ondigitalocean.app',
    port: 8080
  },
  parallel:true
})
