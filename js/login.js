var controllerCtrl = angular.module('loginCtrl',[]);

controllerCtrl.controller('loginCtrl',
	['$scope','$http', '$location', '$rootScope',
    function ($scope, $http, $location, $rootScope) {
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
	}
]);