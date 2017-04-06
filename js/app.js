var angulars = angular.module('myApp',
    ['ui.router','controllerCtrl','loginCtrl',
    'navCtrl','createCtrl','proposalCtrl',
    'hotelnewsCtrl','imglooksCtrl','entertainmentCtrl']);

angulars.factory('checkLogin', function ($rootScope, $location) {
    return function () {
        // 检测根作用域是否有username
        if ($rootScope.username === undefined) {
            // 没有登录跳转到登录页
            $location.path('/login')
        }
    }
})
// 根作用域检测是否登录
.run(function ($rootScope, $http, $location) {
    // 监听传送的消息
    // $rootScope.$on('username', function (obj, username) {
    //  // console.log(arguments)
    //  $rootScope.username = username
    // })
    // 检测是否登录
    $http
        .get('action/checkLogin.php')
        // 成功时候回调函数
        .success(function (res) {
            // 检测是否有data数据，
            // 有data数据，说明登录了
            if (res && res.errno === 0 && res.data) {
                // 存储数据
                $rootScope.username = res.data.username;
                // 登录成功，进入首页
                $location.path('/')
            } else {
                // 进入登录页面
                $location.path('/login')
            }
        })
    // 在路由事件中检测登录，就不需要在每一个页面中检测了
    $rootScope.$on('$stateChangeSuccess', function () {
        if ($rootScope.username === undefined) {
            // 没有登录跳转到登录页
            $location.path('/login')
        }
    })
})
//定义配置
angulars.config(function ($stateProvider) {
    
    $stateProvider
        // 首页状态
        .state('home', {
            url: '/',
            templateUrl: 'view/home.tpl',
            controller: 'homeCtrl'
        })
        // 登录页状态
        .state('login', {
            url: '/login',
            templateUrl: 'view/login.tpl',
            controller: 'loginCtrl'
        })
        .state('createUser', {
            url: '/createuser',
            templateUrl: 'view/user/create.tpl',
            controller: 'createUserCtrl'
        })
        //酒店信息页面
        .state('hotelnews',{
            url:'/hotelnews',
            templateUrl:'view/hotelnews.tpl',
            controller:'hotelnewCtrl'
        })
        //建议页面
        .state('proposal',{
            url:'/proposal',
            templateUrl:'view/proposal.tpl',
            controller:'proposalsCtrl'
        })
        //图片浏览页面
        .state('imglook',{
            url:'/imglook',
            templateUrl:'view/imglook.tpl',
            controller:'imglookCtrl'
        })
        .state('entertainment',{
            url:'/entertainment',
            templateUrl:'view/entertainment.tpl',
            controller:'entertainmentsCtrl'
        })
})