angular.module('ebayAff', ['ui.router'])
    // Directives
    //.directive(....)

    // Services
    //.service('API', require('./services/api.js'))
    //.service('BackendService', require('./services/BackendService.js'))
    //.service('menuService', require('./services/menuService.js'))

    // Routing
    .config(require('./config/routes.js'))
    .controller('main', function () { })
   