const path = require('path');
const { sync: glob } = require('glob');

const context = path.join(__dirname, 'src');
const pkg = require('./package.json');
const mode = process.env.NODE_ENV || 'development';

const entry = [
  path.join(context, `${pkg.name}.js`)
].concat(
  mode !== 'production' ? glob('**/*.html', {
    cwd: path.join(__dirname, 'test/fixtures'),
    absolute: true
  }) : []
);

module.exports = {
  context,
  mode,
  entry,
  output: {
    filename: `${pkg.name}.js`,
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /node_modules\/(?!(unique-selector)\/).*/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [ '@babel/preset-env' ],
          plugins: [
            '@babel/transform-runtime',
            '@babel/plugin-transform-spread'
          ]
        }
      }
    }, {
      test: /\.html$/,
      use: [{
        loader: 'file-loader',
        options: {
          emitFile: true,
          name: '[name].html'
        }
      }, {
        loader: 'extract-loader'
      }, {
        loader: 'html-loader',
        options: {
          attrs: [
            'script:src'
          ]
        }
      }]
    }]
  },
  resolve: {
    alias: {
      [pkg.name]: path.resolve(__dirname, pkg.name)
    }
  },
  optimization: {
    minimize: false
  },
  devServer: {
    index: 'index.html',
    open: true,
    //hot: true,
    inline: true,
    port: 3010,
    historyApiFallback: true,
    //contentBase: path.join(process.cwd(), 'src'),
    contentBase: './dist',
    stats: {
      colors: true
    }
  }
};
