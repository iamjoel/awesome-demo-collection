module.exports = {
  settings: {
    'import/resolver': {
      webpack: {
          config: {
              resolve: {
                  extensions: ['.js', '.jsx', '.ts', '.tsx'],
                  alias: {
                      '@': 'src',
                  },
              },
          },
      },
  },
  }
}