const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports={
  entry:'./src/js/index.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'js/bundle.js',


  },
  devServer:{
    contentBase: './dist'
  },
  plugins:[
    new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './src/index.html'
  })
],
module: {
  rules: [
    {
      test: /\.js$/, //irregular expression
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }
      , {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ],
        },
    {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader',
         ],
       },
  ]
},

};
