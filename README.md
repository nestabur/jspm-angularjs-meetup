# jspm-angularjs-meetup

This repository contains the code used for the AngularJS Zürich's meetup [Lazy loading in Angular 1.X with JSPM](http://www.meetup.com/AngularJS-ZRH/events/228787617)

Below are the steps followed during the meetup.

1. Run the example and open in your browser http://localhost:8088
``` 
gulp
```
2. Open the browser inspection (javascript console and network usage)
> **console output:** all libraries missing, angular application cannot be loaded
3. install dependencies
```
jspm install angular
jspm install angular-material
jspm install angular-ui-router
jspm install css
jspm install text
```
4. link local dependency
    * switch to lib-module-integration branch
```
git checkout lib-module-integration
```
    * register lib-module in local jspm registry (link) 
```
cd lib-module
jspm link github:lib-module
```
    * install lib-module in main-module
```
cd main-module
jspm install github:lib-module --link
```
5. create the bundle
```
jspm bundle index.js bundle.js -minify --inject
```