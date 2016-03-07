# jspm-angularjs-meetup

This repository contains the code used for the AngularJS Zürich's meetup [Lazy loading in Angular 1.X with JSPM](http://www.meetup.com/AngularJS-ZRH/events/228787617)

Below are the steps followed during the meetup.

Prerrequisites:
* node
* gulp

1. Run the example and open in your browser http://localhost:8088/index.html    
    
    ```
    cd main-module        
    npm install
    gulp
    ```
    
2. Open the browser inspection (javascript console and network usage)
    
    > **console output:** all libraries missing, angular application cannot be loaded
    
3. install jspm and initialize main-module
    
    ```
    npm install jspm
    jspm init (take all default values)
    ```
    
4. install dependencies
    
    ```
    jspm install angular angular-material angular-ui-router css text npm:clean-css
    gulp
    ```
    
    Reload your browser. You should see a nice message from the controller ;)
5. link local dependency
    * switch to lib-module-integration branch
        ```
        git checkout lib-module-integration
        ```

    * register lib-module in local jspm registry (link)     
        ```
        cd ../lib-module
        jspm link github:lib-module
        ```

    * install lib-module in main-module    
        ```
        cd ../main-module
        jspm install github:lib-module --link
        gulp
        ```
    Reload your browser. Now the message has been adapted by the lib-module library.
6. create the bundle
        
    ```
    jspm bundle index.js bundle.js -minify --inject
    gulp
    ```
        
    Reload your browser and check the network, all your app is now bundled within a single javascript file!! (bundle.js)