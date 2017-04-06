<div class="app-entertainment">
<div data-spy="scroll" class="scollrs" data-target="#navbar-example" data-offset="0" 
	>

	<!-- 点选 -->
	<div class="col-md-12 col-sm-12">
		<div class="panel panel-default">
			<div class="panel-heading">
			Basic Tabs
			</div>
		<div class="panel-body">
			<ul class="nav nav-tabs">
			    <li class="active"><a href="#home" data-toggle="tab">Home</a>
			    </li>
			    <li class=""><a href="#profile" data-toggle="tab">Profile</a>
			    </li>
			</ul>


		<!-- 更改区 -->
		<div class="tab-content">
		    <div class="tab-pane fade active in" id="home">
		        <h4>Music Name</h4>
		        <div class="row title">
				<div class="col-lg-2">id</div>
				<div class="col-lg-2">name</div>
				<div class="col-lg-2">musicname</div>
				<div class="col-lg-2">musictime</div>
				<div class="col-lg-4">musiccontent</div>
			</div>
			<div class="row" ng-repeat="item in data">
				<div class="col-lg-2">
					<a ng-href="#/newsdetail/{{item.id}}">{{item.id}}</a>
				</div>
				<div class="col-lg-2">
					{{item.title}}
				</div>
				<div class="col-lg-2">
					{{item.writer}}
				</div>
				<div class="col-lg-2">
					{{item.date | date : 'yyyy-MM-dd HH:mm:ss'}}
				</div>
				<div class="col-lg-4">{{item.content}}
				</div>
			</div>
		    </div>


		    <div class="tab-pane fade" id="profile">

		      <div class="row">
              <div class="col-md-12">
              <div class="panel panel-primary">
		      <div class="panel-heading"># TO DO LIST - TASK YOU HAVE TO DO</div>

		      <!-- Table -->
		      <table class="table">
		        <thead>
		          <tr>
		            <th>#</th>
		              <th>#</th>
		            <th>Task Name</th>
		            <th>On Date</th>
		            <th>Actions</th>
		          </tr>
		        </thead>
		        <tbody>
		          <tr class="list-group-item-success">
		            <td>1</td>
		                <td><input type="checkbox" value="" /></td>
		            <td>100$ Pending Payment</td>
		            <td>23rd June </td>
		            <td><a href="#" class="btn btn-primary ">Just Done</a></td>
		          </tr>
		          <tr class="list-group-item-danger">
		            <td>2</td>
		                <td><input type="checkbox" value="" /></td>
		            <td>200 Messages To Reply</td>
		            <td>10th November </td>
		            <td><a href="#" class="btn btn-success">Pending</a></td>
		          </tr>
		          <tr class="list-group-item-info">
		            <td>3</td>
		                <td><input type="checkbox" value="" /></td>
		            <td>90 Orders To Process</td>
		            <td>2nd December </td>
		            <td><a href="#" class="btn btn-primary">In Process</a></td>
		          </tr>
		            <tr class="list-group-item-warning">
		            <td>4</td>
		                  <td><input type="checkbox" value="" /></td>
		            <td>100$ Pending Payment</td>
		            <td>23rd June </td>
		            <td><a href="#" class="btn btn-danger">Just Done </a></td>
		          </tr>
		          <tr class="list-group-item-info">
		            <td>5</td>
		                <td><input type="checkbox" value="" /></td>
		            <td>200 Messages To Reply</td>
		            <td>10th November </td>
		            <td><a href="#" class="btn btn-warning">Pending</a></td>
		          </tr>
		          <tr class="list-group-item-danger">
		            <td>6</td>
		              <td><input type="checkbox" value="" /></td>
		            <td>90 Orders To Process</td>
		            <td>2nd December </td>
		            <td><a href="#" class="btn btn-info">In Process</a></td>
		          </tr>
		        </tbody>
		      </table>	
			</div>
            





		    </div>


		<!-- 更改区 -->
		</div>
		</div>
	</div>

	<!-- 点选 -->
	</div>

	<!-- 分叶 -->
	<nav aria-label="..." class="Paging">
  <ul class="pagination">
    <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
     <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
     <li class="active"><a href="#">2 <span class="sr-only">(current)</span></a></li>
	 <li class="active"><a href="#">3 <span class="sr-only">(current)</span></a></li>
	 <li class="active"><a href="#">4 <span class="sr-only">(current)</span></a></li>
	 <li class="active"><a href="#">5 <span class="sr-only"></span></a></li>

	<li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&raquo;</span></a></li>
  </ul>
</nav>

</div>
</div>


</div>
</div>