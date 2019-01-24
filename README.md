# Starter Theme for [Hugo](http://gohugo.io/)

## Installation

```
git init
git submodule add https://github.com/jimfrenette/hugo-starter.git themes/starter
```

## Dev Hugo Templates

```
cd www
hugo server -D
```
Preview the site, e.g., [`localhost:1313`](http://localhost:1313/)


## Dev UI
prior to using the [webpack-plugin-serve](https://github.com/shellscape/webpack-plugin-serve) dev server, generate the site with `hugo`
```
cd www
hugo
```

## Comments

To enable DISQUS comments, add `disqusShortname = YOURSHORTNAME` to your config file.


## Production

To run in production (e.g. to have Google Analytics show up), run `HUGO_ENV=production` before your build command. For example:

```
HUGO_ENV=production hugo
```
