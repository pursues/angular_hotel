var navCtrl = angular.module('navCtrl',[]);

navCtrl.controller('navCtrl',['$scope',
	function ($scope) {
		// 定义数据
		$scope.list = [
		// {
		// 	title:'home',
		// 	link:'#/'
		// },
		{
			title: 'HOME',
			childList: [
				{
					title: 'home',
					// 对于用户列表，我们发送请求的时候，要携带请求的页面，
					link: '#/'
				},
				{
					title: 'hotelnews',
					link: '#/hotelnews'
				},
				{
					title: 'imglook',
					link: '#/imglook'
				}
			]
		},
		{
			title: 'Forms',
			childList: [
				{
					title:'entertainment',
					link:'#/entertainment'
				},
				/*{
					title: 'Basic',
					link: '#/newslist/1'
				},*/
				{
					title: 'look',
					link: '#/createuser'
				},
				{
					title:'proposal',
					link:'#/proposal'
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
	}
])