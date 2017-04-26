(function(){
    function config($stateProvider,$locationProvider){
        $locationProvider
            .html5Mode({
            enabled: true,
            requireBase:false
        });
        
        $stateProvider
            .state('Rooms',{
              url:'/',
              controller: 'RoomsCtrl as roomsctrl',
              templateUrl: '/template/home.html'
        });
    }
    
    angular
        .module('blocChat', ['ui.router','firebase','ui.bootstrap'])
        .config(config);
})();