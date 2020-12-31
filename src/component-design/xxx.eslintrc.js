// 加了 eslintrc 会验证 interface 后面的没有逗号。这和代码格式化冲突。
module.exports = {
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            alias: {
              '@': 'src'
            }
          }
        }
      }
    }
  }
}
