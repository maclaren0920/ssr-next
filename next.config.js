const withSass = require('@zeit/next-sass');
module.exports = withSass({
  poweredByHeader: false,
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
  typescript: {
    ignoreDevErrors: true,
  },
})