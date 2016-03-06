import angular from 'angular';
import 'angular-ui-router';
import 'angular-material';
import 'angular-material/angular-material.css!';

import routeConfig from './ui-router';
import controller from './controller';
import myLibrary from 'lib';

angular
    .module('myModule', ['ui.router', 'ngMaterial', myLibrary.name])
    .config(routeConfig)
    .controller('Controller', controller);