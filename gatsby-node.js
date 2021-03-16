const path = require('path');
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty',
    },
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        sections: path.resolve(__dirname, 'src/sections'),
        scss: path.resolve(__dirname, 'src/scss'),
      },
    },
  });
};
