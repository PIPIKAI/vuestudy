const path = require('path')

module.exports = {
    entry : './src/main.js' ,
    output :{
        path :  path.resolve(__dirname , 'dist'),
        filename :'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.less$/,
            use: [
              {
                loader: "style-loader",
              },
              {
                loader: "css-loader",
              },
              {
                loader: "less-loader",
                options: {
                  lessOptions: {
                    strictMath: true,
                  },
                },
              },
            ],
          },
          {
              test: /\.(png|jpg|gif)$/i,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 8192,
                  },
                },
              ],
          },
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015']
              }
            }
          }
    ],
    },
    resolve :{
      // 别名
      alias :{
        'vue$' : 'vue/dist/vue.esm.js'
      }
    },
    plugins :{

    },
    
}