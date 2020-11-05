// const path = require('path'); const HtmlWebpackPlugin = require('html-webpack-plugin');
// module.exports = {  //This property defines where the application starts  entry:'./src/index.js',
// //This property defines the file path and the file name which will be used for deploying the bundled file  output:{    path: path.join(__dirname, '/dist'),    filename: 'bundle.js'  },
//  //Setup loaders  module: {    rules: [      {        test: /\.js$/,         exclude: /node_modules/,        use: {          loader: 'babel-loader'        }      }    ]  },
//  // Setup plugin to use a HTML file for serving bundled js files plugins: [    new HtmlWebpackPlugin({      template: './src/index.html'    })  ]}

//const HtmlWebPackPlugin = require("html-webpack-plugin");

var path = require('path');
//var SRC_DIR = path.join(__dirname, '/src/js/components');
// var DIST_DIR = path.join(__dirname, '/dist');
module.exports = {
    entry: __dirname + '/client/src/index.jsx',
    module: {
        rules: [
            {
                test: [/\.jsx$/],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/client/dist'
    }
};

// module.exports = {
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: "babel-loader"
//                 }
//             },
//             {
//                 test: /\.html$/,
//                 use: [
//                     {
//                         loader: "html-loader"
//                     }
//                 ]
//             }
//         ]
//     },
//     plugins: [
//         new HtmlWebPackPlugin({
//             template: "./src/index.html",
//             filename: "./index.html"
//         })
//     ]
// };

// module.exports = {
//     entry: `${SRC_DIR}/App.js`,
//     output: {
//         filename: 'bundle.js',
//         path: DIST_DIR
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.jsx?/,
//                 include: SRC_DIR,
//                 loader: 'babel-loader',
//                 query: {
//                     presets: ['react', 'es2015']
//                 }
//             }
//         ]
//     }
// };