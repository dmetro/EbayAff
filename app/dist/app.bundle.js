(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/main');

    $stateProvider
      
     .state('main', {
         url: '/main',
         templateUrl: '/app/views/main/main.html',
         controller: require('controllers/main.js')
     })
    
};
},{"controllers/main.js":2}],2:[function(require,module,exports){
module.exports = function ($scope, BackendService, $state, menuService) {

    var data = {};
    data["providerId"] = 1;
    data["rotationId"] = 0;

    $scope.orders = {};
    $scope.rotetions = {};

    $scope.date;
    //function call
    // $scope.GetData();
    //BackendService.GetRotetions(1).then(function (response) {

    //    if (response != null) {
    //        if (response.data["Error"] != null) {

    //            $scope.rotetions = response.data.Data;
    //        }
    //        else {
    //            console.log("user Notok ")
    //        }
    //    }
    //});

    $scope.selectedItem = "0";

  

    //BackendService.getAllOrders(data).then(function (response) {

   

}
},{}],3:[function(require,module,exports){
angular.module('Course', ['ui.router', 'ui.bootstrap'])
    // Directives
    //.directive(....)

    // Services
    .service('API', require('./services/api.js'))
    .service('BackendService', require('./services/BackendService.js'))
    .service('menuService', require('./services/menuService.js'))

    // Routing
    .config(require('./config/routes.js'))
    .controller('main', function () { })
   
},{"./config/routes.js":1,"./services/BackendService.js":4,"./services/api.js":5,"./services/menuService.js":6}],4:[function(require,module,exports){
module.exports = function backend_service($q, $http) {

    this.login = function (data) {
        return $http.post('/api/user/login', data)
            .then(function (response) {
                return response
            },
        function (err) {
            err['text'] = 'Something happens when obtaining dictionary file for languages!';
            $state.go('error', { 'error_obj': err });
        })
    }

    this.getAllOrders = function (data) {

        return $http.post('/api/order/getorders/', data)
            .then(function (response) {
                return response
            },
        function (err) {
            err['text'] = 'Something happens when obtaining dictionary file for languages!';
            // $state.go('error', { 'error_obj': err });
        })
    }

    this.getAllOrdersBtRotation = function (data) {
        return $http.post('/api/order/getorders/', data)
            .then(function (response) {
                return response
            },
        function (err) {
            err['text'] = 'Something happens when obtaining dictionary file for languages!';
            // $state.go('error', { 'error_obj': err });
        })
    }

    this.GetRotetions = function (id) {
        return $http.get('/api/order/getRotations/' + id)
            .then(function (response) {
                return response
            },
        function (err) {
            err['text'] = 'Something happens when obtaining dictionary file for languages!';
            $state.go('error', { 'error_obj': err });
        })
    }

    this.GetAllProductsByCategoryName = function (data) {

        return $http.post('/api/order/getproductscategory/', data)
            .then(function (response) {
                return response
            },
        function (err) {
            err['text'] = 'Something happens when obtaining dictionary file for languages!';
            // $state.go('error', { 'error_obj': err });
        })
    }

    this.GetCategories = function (id) {
        return $http.get('/api/order/getcategories/' + id)
            .then(function (response) {
                return response
            },
        function (err) {
            err['text'] = 'Something happens when obtaining dictionary file for languages!';
            $state.go('error', { 'error_obj': err });
        })
    }

    this.triggerAccounting = function () {
        return $http.get('/api/order/triggeraccounting')
            .then(function (response) {
                return response
            },
        function (err) {
            err['text'] = 'Something happens while trigger accounting ';
            $state.go('error', { 'error_obj': err });
        })
    }
    
   
};
},{}],5:[function(require,module,exports){
module.exports = function ($q, $http) {
    function request(method, url, data) {
        var deferred = $q.defer();

        $http({
            method: method,
            url: url,
            data: data
        }).then(function (response) {
            deferred.resolve(response.data);
        }, function (response) {
            deferres.reject();
        });

        return deferred.promise;
    }

    function mock(func, timeout) {
        var deferred = $q.defer();
        setTimeout(function (f) {
            deferred.resolve(f());
        }, timeout, func);
        return deferred.promise;
    }

    return {
        // Basic functions
        GET: function (url, data) {
            return request('GET', url, data);
        },
        POST: function (url, data) {
            return request('POST', url, data);
        },

        // Functions
        getWorkers: function () {
            //return request('GET', '/api/worker/all');
            return mock(function () {
                var objs = [];
                for (var i = 0; i < 10; i++) {
                    objs.push({
                        Name: chance.first(),
                        CustomerId: i
                        
                    });
                }
                return objs;
            }, 1500);
        }
    };
};
},{}],6:[function(require,module,exports){
module.exports = function ($state) {


    console.log("d123");

    this.test = function () {
        console.log("test");
    }

    this.goTodepartment = function () {
        $state.go('department');
    }
    //$scope.goToDepartment =  function()
    //{
    //    $state.go('department');
    //}
}
},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvY29uZmlnL3JvdXRlcy5qcyIsImFwcC9jb250cm9sbGVycy9tYWluLmpzIiwiYXBwL2VudHJ5LmpzIiwiYXBwL3NlcnZpY2VzL0JhY2tlbmRTZXJ2aWNlLmpzIiwiYXBwL3NlcnZpY2VzL2FwaS5qcyIsImFwcC9zZXJ2aWNlcy9tZW51U2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcclxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9tYWluJyk7XHJcblxyXG4gICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgXHJcbiAgICAgLnN0YXRlKCdtYWluJywge1xyXG4gICAgICAgICB1cmw6ICcvbWFpbicsXHJcbiAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2FwcC92aWV3cy9tYWluL21haW4uaHRtbCcsXHJcbiAgICAgICAgIGNvbnRyb2xsZXI6IHJlcXVpcmUoJ2NvbnRyb2xsZXJzL21haW4uanMnKVxyXG4gICAgIH0pXHJcbiAgICBcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEJhY2tlbmRTZXJ2aWNlLCAkc3RhdGUsIG1lbnVTZXJ2aWNlKSB7XHJcblxyXG4gICAgdmFyIGRhdGEgPSB7fTtcclxuICAgIGRhdGFbXCJwcm92aWRlcklkXCJdID0gMTtcclxuICAgIGRhdGFbXCJyb3RhdGlvbklkXCJdID0gMDtcclxuXHJcbiAgICAkc2NvcGUub3JkZXJzID0ge307XHJcbiAgICAkc2NvcGUucm90ZXRpb25zID0ge307XHJcblxyXG4gICAgJHNjb3BlLmRhdGU7XHJcbiAgICAvL2Z1bmN0aW9uIGNhbGxcclxuICAgIC8vICRzY29wZS5HZXREYXRhKCk7XHJcbiAgICAvL0JhY2tlbmRTZXJ2aWNlLkdldFJvdGV0aW9ucygxKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgIC8vICAgIGlmIChyZXNwb25zZSAhPSBudWxsKSB7XHJcbiAgICAvLyAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGFbXCJFcnJvclwiXSAhPSBudWxsKSB7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAkc2NvcGUucm90ZXRpb25zID0gcmVzcG9uc2UuZGF0YS5EYXRhO1xyXG4gICAgLy8gICAgICAgIH1cclxuICAgIC8vICAgICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIE5vdG9rIFwiKVxyXG4gICAgLy8gICAgICAgIH1cclxuICAgIC8vICAgIH1cclxuICAgIC8vfSk7XHJcblxyXG4gICAgJHNjb3BlLnNlbGVjdGVkSXRlbSA9IFwiMFwiO1xyXG5cclxuICBcclxuXHJcbiAgICAvL0JhY2tlbmRTZXJ2aWNlLmdldEFsbE9yZGVycyhkYXRhKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgXHJcblxyXG59IiwiYW5ndWxhci5tb2R1bGUoJ0NvdXJzZScsIFsndWkucm91dGVyJywgJ3VpLmJvb3RzdHJhcCddKVxyXG4gICAgLy8gRGlyZWN0aXZlc1xyXG4gICAgLy8uZGlyZWN0aXZlKC4uLi4pXHJcblxyXG4gICAgLy8gU2VydmljZXNcclxuICAgIC5zZXJ2aWNlKCdBUEknLCByZXF1aXJlKCcuL3NlcnZpY2VzL2FwaS5qcycpKVxyXG4gICAgLnNlcnZpY2UoJ0JhY2tlbmRTZXJ2aWNlJywgcmVxdWlyZSgnLi9zZXJ2aWNlcy9CYWNrZW5kU2VydmljZS5qcycpKVxyXG4gICAgLnNlcnZpY2UoJ21lbnVTZXJ2aWNlJywgcmVxdWlyZSgnLi9zZXJ2aWNlcy9tZW51U2VydmljZS5qcycpKVxyXG5cclxuICAgIC8vIFJvdXRpbmdcclxuICAgIC5jb25maWcocmVxdWlyZSgnLi9jb25maWcvcm91dGVzLmpzJykpXHJcbiAgICAuY29udHJvbGxlcignbWFpbicsIGZ1bmN0aW9uICgpIHsgfSlcclxuICAgIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiYWNrZW5kX3NlcnZpY2UoJHEsICRodHRwKSB7XHJcblxyXG4gICAgdGhpcy5sb2dpbiA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvdXNlci9sb2dpbicsIGRhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBlcnJbJ3RleHQnXSA9ICdTb21ldGhpbmcgaGFwcGVucyB3aGVuIG9idGFpbmluZyBkaWN0aW9uYXJ5IGZpbGUgZm9yIGxhbmd1YWdlcyEnO1xyXG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2Vycm9yJywgeyAnZXJyb3Jfb2JqJzogZXJyIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nZXRBbGxPcmRlcnMgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9vcmRlci9nZXRvcmRlcnMvJywgZGF0YSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGVyclsndGV4dCddID0gJ1NvbWV0aGluZyBoYXBwZW5zIHdoZW4gb2J0YWluaW5nIGRpY3Rpb25hcnkgZmlsZSBmb3IgbGFuZ3VhZ2VzISc7XHJcbiAgICAgICAgICAgIC8vICRzdGF0ZS5nbygnZXJyb3InLCB7ICdlcnJvcl9vYmonOiBlcnIgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdldEFsbE9yZGVyc0J0Um90YXRpb24gPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL29yZGVyL2dldG9yZGVycy8nLCBkYXRhKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgZXJyWyd0ZXh0J10gPSAnU29tZXRoaW5nIGhhcHBlbnMgd2hlbiBvYnRhaW5pbmcgZGljdGlvbmFyeSBmaWxlIGZvciBsYW5ndWFnZXMhJztcclxuICAgICAgICAgICAgLy8gJHN0YXRlLmdvKCdlcnJvcicsIHsgJ2Vycm9yX29iaic6IGVyciB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuR2V0Um90ZXRpb25zID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9vcmRlci9nZXRSb3RhdGlvbnMvJyArIGlkKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgZXJyWyd0ZXh0J10gPSAnU29tZXRoaW5nIGhhcHBlbnMgd2hlbiBvYnRhaW5pbmcgZGljdGlvbmFyeSBmaWxlIGZvciBsYW5ndWFnZXMhJztcclxuICAgICAgICAgICAgJHN0YXRlLmdvKCdlcnJvcicsIHsgJ2Vycm9yX29iaic6IGVyciB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuR2V0QWxsUHJvZHVjdHNCeUNhdGVnb3J5TmFtZSA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL29yZGVyL2dldHByb2R1Y3RzY2F0ZWdvcnkvJywgZGF0YSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGVyclsndGV4dCddID0gJ1NvbWV0aGluZyBoYXBwZW5zIHdoZW4gb2J0YWluaW5nIGRpY3Rpb25hcnkgZmlsZSBmb3IgbGFuZ3VhZ2VzISc7XHJcbiAgICAgICAgICAgIC8vICRzdGF0ZS5nbygnZXJyb3InLCB7ICdlcnJvcl9vYmonOiBlcnIgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLkdldENhdGVnb3JpZXMgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL29yZGVyL2dldGNhdGVnb3JpZXMvJyArIGlkKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgZXJyWyd0ZXh0J10gPSAnU29tZXRoaW5nIGhhcHBlbnMgd2hlbiBvYnRhaW5pbmcgZGljdGlvbmFyeSBmaWxlIGZvciBsYW5ndWFnZXMhJztcclxuICAgICAgICAgICAgJHN0YXRlLmdvKCdlcnJvcicsIHsgJ2Vycm9yX29iaic6IGVyciB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudHJpZ2dlckFjY291bnRpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9vcmRlci90cmlnZ2VyYWNjb3VudGluZycpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBlcnJbJ3RleHQnXSA9ICdTb21ldGhpbmcgaGFwcGVucyB3aGlsZSB0cmlnZ2VyIGFjY291bnRpbmcgJztcclxuICAgICAgICAgICAgJHN0YXRlLmdvKCdlcnJvcicsIHsgJ2Vycm9yX29iaic6IGVyciB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgIFxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRxLCAkaHR0cCkge1xyXG4gICAgZnVuY3Rpb24gcmVxdWVzdChtZXRob2QsIHVybCwgZGF0YSkge1xyXG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICRodHRwKHtcclxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9LCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgZGVmZXJyZXMucmVqZWN0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1vY2soZnVuYywgdGltZW91dCkge1xyXG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoZikge1xyXG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGYoKSk7XHJcbiAgICAgICAgfSwgdGltZW91dCwgZnVuYyk7XHJcbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBCYXNpYyBmdW5jdGlvbnNcclxuICAgICAgICBHRVQ6IGZ1bmN0aW9uICh1cmwsIGRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoJ0dFVCcsIHVybCwgZGF0YSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBQT1NUOiBmdW5jdGlvbiAodXJsLCBkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KCdQT1NUJywgdXJsLCBkYXRhKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBGdW5jdGlvbnNcclxuICAgICAgICBnZXRXb3JrZXJzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vcmV0dXJuIHJlcXVlc3QoJ0dFVCcsICcvYXBpL3dvcmtlci9hbGwnKTtcclxuICAgICAgICAgICAgcmV0dXJuIG1vY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9ianMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ianMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5hbWU6IGNoYW5jZS5maXJzdCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDdXN0b21lcklkOiBpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ianM7XHJcbiAgICAgICAgICAgIH0sIDE1MDApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHN0YXRlKSB7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiZDEyM1wiKTtcclxuXHJcbiAgICB0aGlzLnRlc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ29Ub2RlcGFydG1lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHN0YXRlLmdvKCdkZXBhcnRtZW50Jyk7XHJcbiAgICB9XHJcbiAgICAvLyRzY29wZS5nb1RvRGVwYXJ0bWVudCA9ICBmdW5jdGlvbigpXHJcbiAgICAvL3tcclxuICAgIC8vICAgICRzdGF0ZS5nbygnZGVwYXJ0bWVudCcpO1xyXG4gICAgLy99XHJcbn0iXX0=
