module.exports = {
  mode: "development",
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'dist/bundle.js',
    libraryTarget: "var",
    library: "abc"
  }
}
