import angular from 'angular';

import service from './service';

export default angular
    .module('myServiceModule', [])
    .service('myService', service);