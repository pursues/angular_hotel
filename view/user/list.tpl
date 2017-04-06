<div class="app-user-list app-inner">
	<h1>用户列表</h1>
	<!-- 定义标题 -->
	<div class="row title">
		<div class="col-lg-2">用户ID</div>
		<div class="col-lg-1">用户名</div>
		<div class="col-lg-1">性别</div>
		<div class="col-lg-2">密码</div>
		<div class="col-lg-2">电话</div>
		<div class="col-lg-4">简介</div>
	</div>
	<!-- 循环渲染列表内容 -->
	<div class="row" ng-repeat="item in list">
		<div class="col-lg-2"><a ng-href="#/userdetail/{{item.id}}">{{item.id}}</a></div>
		<div class="col-lg-1">{{item.username}}</div>
		<div class="col-lg-1">{{item.sex}}</div>
		<div class="col-lg-2">{{item.password}}</div>
		<div class="col-lg-2">{{item.telephone}}</div>
		<div class="col-lg-4">{{item.info}}</div>
	</div>
	<div class="pull-right">
		<ul class="pagination">
			<li><a ng-href="#/userlist/{{num - 1 < 1 ? 1 : num - 1}}">前一页</a></li>
			<li><a ng-href="#/userlist/{{+num + 1}}">后一页</a></li>
		</ul>
	</div>
</div>