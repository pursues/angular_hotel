<div class="app-imglook">
<div data-spy="scroll" class="scollrs" data-target="#navbar-example" data-offset="0" 
	>
	<!-- 搜索导航 -->
	<ol class="breadcrumb">
	  <li><a href="#">Home</a></li>
	  <li><a href="#">Imglook</a></li>
	  <li><a href="#">All</a></li>
	  <li class="active">All</li>

	</ol>
	<!-- 图片区域 -->
	
	 <div class="col-md-4 " ng-repeat="item in list">
            <div class="portfolio-item awesome mix_all" data-cat="awesome" >
                <img src="{{item.url}}" class="img-responsive " alt="" />
                <div class="overlay">
                    <p>
                        <span>
                       {{item.username}}
                        </span>
                       
               		{{item.name}}
                    </p>
                    <a class="preview btn btn-info " title="Image Title Here" href="images/portfolio/g.jpg"><i class="fa fa-plus fa-2x"></i></a>

                </div>
            </div>
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