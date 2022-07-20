# How to use
1) * Click the **Use this template** button on github 
   * Create your new repository based on this template  
   **or** 
   * Clone this repo
   * Change the repo url with ```git remote set-url origin new.git.url/here```
2) Open it
3) Run ```npm i```
4) Run ```npm run prepare``` to enable precommit hook

# Supported commands
To start project in dev mode use:
```
npm run start
```
To build project use:
```
npm run build
```
To fix code style use:
```
npm run lint
```
To update all dependencies to the latest version use:
```
npm run monthly-maintenance
```

> Why webpack serve, but not webpack-dev-server? Because I like websokets :-) 
[Article](https://medium.com/@jeffrey.allen.lewis/development-servers-compared-webpack-dev-server-vs-webpack-serve-no-its-not-missing-an-r-745fc5f78c0a)