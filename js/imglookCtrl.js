var imglooksCtrl = angular.module('imglooksCtrl',[]);

imglooksCtrl.controller('imglookCtrl',['$scope','$http','$location',
    function($scope,$http,$location){
       
		// console.log($scope.data)
		$http
			// 发送请求 提交数据
			.post('action/imglook.json')
			// 提交成功，跳转到列表页
			// 成功时候回调函数
			.success(function (res) {
				if (res && res.errno === 0 && res.data) {
					// 存储数据
					$scope.list = res.data
				} else {
					alert('请求的数据失败')
				}
			})

	
    }
]);