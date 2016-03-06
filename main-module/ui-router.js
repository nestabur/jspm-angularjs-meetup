import template from './view.html!text';

function applicationRouteConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: "/home",
            template: template,
            controller: 'Controller as ctrl'
        });
}

applicationRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default applicationRouteConfig;
