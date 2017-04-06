var proposalCtrl = angular.module('proposalCtrl',[]);

// module.controller(ctrlName, fn)
proposalCtrl.controller('proposalsCtrl',['$scope','$http','$location',
    function($scope,$http,$location){
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
    }
]);