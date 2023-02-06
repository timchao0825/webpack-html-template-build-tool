module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier'
    // 'stylelint-config-sass-guidelines'
  ],
  plugins: ['stylelint-scss', 'stylelint-order', 'stylelint-prettier'],
  rules: {
    'block-no-empty': true, // 禁止出現空塊
    'comment-no-empty': true, // 禁止空註釋
    'font-family-name-quotes': 'always-unless-keyword', // 指定字型名稱是否需要使用引號引起來 | 期待每一個不是關鍵字的字型名都使用引號引起來
    'font-weight-notation': 'numeric', // 要求使用數字或命名的 (可能的情況下) font-weight 值
    'property-no-vendor-prefix': true, // 禁止屬性使用瀏覽器引擎字首
    'value-no-vendor-prefix': [true, { ignoreValues: ['box'] }], // 禁止給值新增瀏覽器引擎字首
    'selector-no-vendor-prefix': true, // 禁止使用瀏覽器引擎字首
    'declaration-empty-line-before': 'never', // 要求或禁止在宣告語句之前有空行。
    'declaration-block-no-duplicate-properties': true, // 在宣告的塊中中禁止出現重複的屬性
    'declaration-block-no-redundant-longhand-properties': true, // 禁止使用可以縮寫卻不縮寫的屬性。
    'string-quotes': 'single', // 設定content "" 為單 ''
    'function-no-unknown': [true, { ignoreFunctions: ['map-get'] }], // 忽略檔案裡使用function時的錯誤
    'max-nesting-depth': null,
    'max-line-length': null,
    'selector-max-compound-selectors': null,
    'selector-pseudo-class-no-unknown': null,
    'selector-no-qualifying-type': null,
    'selector-class-pattern': null,
    'function-parentheses-newline-inside': null,
    'at-rule-no-unknown': null,
    'color-function-notation': 'legacy',
    'alpha-value-notation': 'number',
    'scss/no-global-function-names': null,
    'scss/comment-no-empty': null,
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'flex-wrap',
      'justify-content',
      'align-items',
      'float',
      'clear',
      'overflow',
      'overflow-x',
      'overflow-y',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'font-size',
      'font-family',
      'font-weight',
      'text-justify',
      'text-align',
      'text-indent',
      'text-overflow',
      'text-decoration',
      'white-space',
      'color',
      'background',
      'background-position',
      'background-repeat',
      'background-size',
      'background-color',
      'background-clip',
      'border',
      'border-style',
      'border-width',
      'border-color',
      'border-top-style',
      'border-top-width',
      'border-top-color',
      'border-right-style',
      'border-right-width',
      'border-right-color',
      'border-bottom-style',
      'border-bottom-width',
      'border-bottom-color',
      'border-left-style',
      'border-left-width',
      'border-left-color',
      'border-radius',
      'opacity',
      'filter',
      'list-style',
      'outline',
      'visibility',
      'box-shadow',
      'text-shadow',
      'resize',
      'transition'
    ]
  },
  ignoreFiles: [
    './node_modules/**/*.{css,scss,sass}',
    './dist/**/*.{css,scss,sass}'
  ]
}
