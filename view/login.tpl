<!-- <div class="app-login">
	<div class="login-container">
		<h2>请您登录</h2>
		<form name="login" ng-submit="goToLogin()">
			<div class="form-group">
				<label for="user_name">用户名：</label>
				<input ng-model="data.username" name="username" id="user_name" ng-required="true" type="text" placeholder="请输入用户名">
			</div>
			<div class="form-group">
				<label for="pass_word">密&emsp;码：</label>
				<input ng-model="data.password" name="password" id="pass_word" ng-required="true" type="password" placeholder="请输入密码">
			</div>
			<div class="text-container text-danger">
				输入过并且不合法
				<p ng-show="login.username.$dirty && login.username.$invalid">用户名必填</p>
				<p ng-show="login.password.$dirty && login.password.$invalid">密码必填</p>
			</div>
			<div class="btn-container">
				<button ng-disabled="login.$invalid" type="submit" class="btn btn-success">登录</button>
			</div>
		</form>
	</div>
</div> -->
<div class="app-login">
<div class="login_bj">
<div class="zhuce_body">
    <div class="zhuce_kong login_kuang">
    	<div class="zc">
        	<div class="bj_bai">
            <h3>登录</h3>
       	  	  <form  name="login" ng-submit="goToLogin()">
                <input ng-model="data.username" name="username" id="user_name" ng-required="true" type="text" placeholder="请输入用户名" class="kuang_txt">
              <input ng-model="data.password" name="password" id="pass_word" ng-required="true" type="password" placeholder="请输入密码" class="kuang_txt">
                <div>
               		<a href="#">忘记密码？</a><input name="" type="checkbox" value="" checked><span>记住我</span> 
                </div>
                <input ng-disabled="login.$invalid" type="submit" class="btn btn-success btn_zhuce"type="button"  value="登录">
                
                </form>
            </div>
        	<div class="bj_right">
            	<p>使用以下账号直接登录</p>
                <a href="#" class="zhuce_qq">QQ注册</a>
                <a href="#" class="zhuce_wb">微博注册</a>
                <a href="#" class="zhuce_wx">微信注册</a>
                <p>已有账号？<a href="#">立即登录</a></p>
            
            </div>
        </div>
    </div>

</div>

</div>

</div>