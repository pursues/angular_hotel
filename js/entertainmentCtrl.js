var entertainmentCtrl = angular.module('entertainmentCtrl',[]);

entertainmentCtrl.controller('entertainmentsCtrl',['$scope','$http','$location',
    function($scope,$http,$location){
       	// console.log($scope.data)
		$http
		// 发送请求 提交数据
		.post('action/entertainment.php', $scope.data)
		// 提交成功，跳转到列表页
		.success(function (res) {
			if (res && res.errno === 0 && res.data) {
				$scope.data = res.data;
				console.log($scope.data)
			} else {
				alert('请求失败');
			}
		})
    }
]);