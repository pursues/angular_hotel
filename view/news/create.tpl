<div class="app-news-create app-inner">
	<h1>新闻创建</h1>
	<form name="news" ng-submit="goToCreateNews()" class="container">
		<div class="row">
			<div class="col-lg-2"><label for="news_title">新闻标题：</label></div>
			<div class="col-lg-4"><input name="title" ng-model="data.title" required id="news_title" type="text" placeholder="请输入新闻标题"></div>
			<div class="col-lg-6"><span ng-show="news.title.$dirty && news.title.$invalid" class="text-danger">请输入新闻标题</span></div>
		</div>
		<div class="row">
			<div class="col-lg-2"><label for="news_writer">新闻作者：</label></div>
			<div class="col-lg-4"><input name="writer" ng-model="data.writer" required id="news_writer" type="text" placeholder="请输入新闻作者"></div>
			<div class="col-lg-6"><span ng-show="news.writer.$dirty && news.writer.$invalid" class="text-danger">新闻作者是必填的</span></div>
		</div>
		<div class="row">
			<div class="col-lg-2"><label for="news_content">新闻内容：</label></div>
			<div class="col-lg-4"><textarea name="content" ng-model="data.content" required id="news_content" placeholder="请输入新闻内容"></textarea></div>
			<div class="col-lg-6"><span ng-show="news.content.$dirty && news.content.$invalid" class="text-danger">必须填写新闻内容</span></div>
		</div>
		<div class="row">
			<div class="col-lg-10 col-lg-offset-2"><button ng-disabled="news.$invalid" type="submit" class="btn btn-success">提交</button></div>
		</div>
	</form>
</div>