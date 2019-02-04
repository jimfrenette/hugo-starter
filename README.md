# Starter Theme for [Hugo](http://gohugo.io/)

## Installation

For example, if your Hugo website is in the `www` folder.
```
cd www

git init

git submodule add https://github.com/jimfrenette/hugo-starter.git themes/starter
```

## Dev Hugo Templates

```
cd www

hugo server -D
```
Preview the site, e.g., [`localhost:1313`](http://localhost:1313/)


## Generate Site

Prior to using the [webpack-plugin-serve](https://github.com/shellscape/webpack-plugin-serve) dev server, generate the site with `hugo`

```
cd www

hugo
```

## Webpack Dev UI

Install node modules

```
cd www/themes/starter

npm i
```

By default, the generated html files are ouput into the `./public` folder. e.g., `www/public`. If you have customized the output directory in the site config `publishDir` property, update the respective `webpack/dev.config.js` webpack-plugin-serve static path. e.g.,

```
const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');

const serve = new Serve({
    host: 'localhost',
    static: ['../../public/'],
    open: true,
    liveReload: true
});
```

When you’re ready to develop your theme CSS and JavaScript, run the npm run dev command. This will launch the webpack development server, with watch enabled to build the css and javascrpt as changes are saved to the src. Live reload is also enabled so the changes are immediately rendered in the web browser.

```
cd www/themes/starter
    
npm run dev
```

Build for production with npm run build. CSS and JavaScript files will be output into the starter themes dist folder. e.g.,

```
cd www/themes/starter
    
npm run build
```

## Comments

To enable DISQUS comments, add `disqusShortname = YOURSHORTNAME` to your config file.


## Production

To run in production (e.g. to have Google Analytics show up), run `HUGO_ENV=production` before your build command. For example:

```
HUGO_ENV=production hugo
```
