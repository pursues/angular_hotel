// 获取应用程序
angular.module('myApp', ['ui.router'])
// 定义配置
.config(function ($stateProvider) {
	
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
		// 定义六个页面的状态
		// 用户相关的有三个页面
		.state('createUser', {
			url: '/createuser',
			templateUrl: 'view/user/create.tpl',
			controller: 'createUserCtrl'
		})
		// 用户列表页面
		.state('userList', {
			url: '/userlist/:pageNum',
			templateUrl: 'view/user/list.tpl',
			controller: 'userListCtrl'
		})
		// 用户详情页面
		.state('userDetail', {
			url: '/userdetail/:userId',
			templateUrl: 'view/user/detail.tpl',
			controller: 'userDetailCtrl'
		})
		// 新闻列表
		.state('newsList', {
			url: '/newslist/:pageNum',
			templateUrl: 'view/news/list.tpl',
			controller: 'newsListCtrl'
		})
		// 新闻详情
		.state('newsDetail', {
			url: '/newsdetail/:newsId',
			templateUrl: 'view/news/detail.tpl',
			controller: 'newsDetailCtrl'
		})
		// 创建新闻
		.state('createNews', {
			url: '/createnews',
			templateUrl: 'view/news/create.tpl',
			controller: 'createNewsCtrl'
		})
})
// 用户创建页面控制器
.controller('createUserCtrl', function ($scope, $http, $location) {
	$scope.goToCreateUser = function () {
		// console.log($scope.data)
		$http
			// 发送请求 提交数据
			.post('action/createuser.php', $scope.data)
			// 提交成功，跳转到列表页
			.success(function (res) {
				if (res && res.errno === 0) {
					// 跳转到列表页 默认是第一页
					$location.path('/userlist/1')
				} else {
					alert('注册失败')
				}
			})

	}
})
// 用户列表控制器
.controller('userListCtrl', function ($scope, $stateParams, $http) {
	// 保存页码
	$scope.num = $stateParams.pageNum;
	$http
		// 获取数据
		.get('action/userlist.php', {
			params: {
				num: $scope.num
			}
		})
		// 监听返回的数据
		.success(function (res) {
			if (res && res.errno === 0 && res.data) {
				// 存储数据
				$scope.list = res.data
			} else {
				alert('请求的数据不村咋')
			}
			// console.log($scope)
		})
	// console.log($stateParams)
})
// 用户详情控制器
.controller('userDetailCtrl', function ($scope, $stateParams, $http) {
	// 根据id请求数据
	$http
		.get('action/userdetail.json?id=' + $stateParams.userId)
		// 将返回的数据存储，并渲染到页面中
		.success(function (res) {
			if (res && res.errno === 0 && res.data) {
				$scope.data = res.data;
			} else {
				alert('请求失败');
			}
		})
})
// 新闻列表控制器
.controller('newsListCtrl', function () {})
// 新闻详情控制器
.controller('newsDetailCtrl', function () {})
// 创建新闻控制器
.controller('createNewsCtrl', function ($scope, $http, $location) {
	// 点击提交按钮时候，提交数据
	$scope.goToCreateNews = function () {
		// 提交数据
		$http
			.post('action/createnews.php', $scope.data)
			// 成功进入列表页
			.success(function (res) {
				if (res && res.errno === 0) {
					// 进入列表页
					$location.path('/newslist/1')
				} else {
					alert('提交失败')
				}
			})
	}
	
})
// 定义导航控制器
.controller('navCtrl', function ($scope) {
	// 定义数据
	$scope.list = [
		{
			title: '用户模块',
			childList: [
				{
					title: '用户列表',
					// 对于用户列表，我们发送请求的时候，要携带请求的页面，
					link: '#/userlist/1'
				},
				{
					title: '创建用户',
					link: '#/createuser'
				}
			]
		},
		{
			title: '新闻模块',
			childList: [
				{
					title: '新闻列表',
					link: '#/newslist/1'
				},
				{
					title: '创建新闻',
					link: '#/createnews'
				}
			]
		}
	]
	// 绑定切换导航内容事件
	$scope.toggleList = function (e) {
		// 获取点击的元素
		var dom = $(e.target);
		dom.siblings().slideToggle()
		// console.log(dom)
	}
})
// 首页控制器
.controller('homeCtrl', function ($scope, $interval) {
	// checkLogin();
	// 定义时间
	$scope.date = new Date();
	// 循环定时器
	$interval(function () {
		// 更新时间
		$scope.date = new Date();
	}, 1000)
})
// 登录页控制器
.controller('loginCtrl', function ($scope, $http, $location, $rootScope) {
	// 定义提交事件
	$scope.goToLogin = function () {
		// console.log($scope.data)
		// post请求提交数据
		$http
			.post('action/login.php', $scope.data)
			.success(function (res) {
				// console.log(res)
				// 判断请求成功返回数据
				if (res && res.errno === 0) {
					// 保存数据
					$rootScope.username = res.data.username;
					// $scope.$emit('username', res.data.username)
					// 跳转页面
					$location.path('/')
				} else {
					alert('登录失败')
				}
			})
	}
})
// 封装检测用户登录的服务
// .factory('checkLogin', function ($rootScope, $location) {
// 	return function () {
// 		// 检测根作用域是否有username
// 		if ($rootScope.username === undefined) {
// 			// 没有登录跳转到登录页
// 			$location.path('/login')
// 		}
// 	}
// })
// 根作用域检测是否登录
.run(function ($rootScope, $http, $location) {
	// 监听传送的消息
	// $rootScope.$on('username', function (obj, username) {
	// 	// console.log(arguments)
	// 	$rootScope.username = username
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