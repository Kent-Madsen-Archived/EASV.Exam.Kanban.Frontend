const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  
  devServer: 
  {
    allowedHosts: "all",
    client: {
      reconnect: 4
    },
    compress: true,
  },

  parallel: true
})