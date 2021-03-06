# Webpack Multiple Page bundler

## πProject Infomation

- **Platform**: compatible with **> IE 11** and ** > iOS Safari 9**

- **Language**: ECMAScript 6+ transpiled by [Babel 7](https://babeljs.io/)

- **Coding Style**: [Recommended](https://standardjs.com) (with [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) & [StyleLint](https://stylelint.io/))

- **Bundler**: [Webpack Bundler](https://webpack.js.org/)

- **Preprocess**: scss/sass

## π File Structure

```shell
βββ assets            # site assets
β  βββ fonts          # font file
β  βββ favicon        # favicon
βββ images            # images file
βββ js                # js file
βββ pages             # web view page
βββ scss              # style file
βββ .babelrc
βββ .editorconfig
βββ .eslintignore
βββ .eslintrc.js
βββ .gitignore
βββ .prettierrc.js
βββ .stylelintrc.js
βββ package.json
βββ postcss.config.js
βββ README.md
```

## πNotice

```
HTML img tag src need using
<%= require('../images/xxx.png') %>

Template folder file using html loader, no need use require
src="../images/xxx"
```

## πRequirements

To run this project, youβll need to install [Node.js](https://nodejs.org/en/). The latest version of Node.js is recommended.

The dependencies of this project are managed with npm (see installation guide [here](https://www.npmjs.com/get-npm)). However you can simply use the node package manager, npm for your dependency management.

## β¬Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload
$ npm run dev

# build for production
$ npm run prod

```

## π« Licence

Copyright Β© 2021 Tim Chao
