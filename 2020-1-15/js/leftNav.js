//点击左侧边栏的js方法
$(function(){
	/*点击全部所遍历出信息*/
	$('.All').click(function() {
		getData(1,5)
		function getData(page, pagesize) {
			Getdata("php/get.php","get",{action:'get_list',offset:(page-1)*pagesize,rows:pagesize,orderBy:'DESC',orderField:'id'},"json",function(data){
				render(data)
			})
			function render(data){
				$('table').empty();
				$('table').append(`<tr><td>标题</td><td>操作</td></tr>`);
				for(var i = 0; i < data.length; i++) {
					$('table').append("<tr><td>" + data[i].title + "</td><td><div class='btn-group btn-group-xs' role='group'><a class='btn btn-info' href='details.html?id="+data[i].id+"'>详情</a><a class='btn btn-success' href='amend.html?id="+data[i].id+"'>修改</a><a class='btn btn-danger' onclick='shanchu("+data[i].id+")'>删除</a></div></td></tr>")
				}
				/*获取页面总数*/
				Getdata("php/get.php","get",{action:'get_total'},"json",function(res){
					render2(res)
				})
				function render2(res){
					$("#page").html("");
					$("#page").paging({
				        nowPage: page, // 当前页码
				        pageNum: Math.ceil(res.total/pagesize),
				        buttonNum: pagesize, //要展示的页码数量
						canJump: 0,// 是否能跳转。0=不显示（默认），1=显示
						showOne: 1,//只有一页时，是否显示。0=不显示,1=显示（默认）
				        callback: function (num) { //回调函数 
				            getData(num,pagesize)
				        }
				    })
			    }
			}
		}
	})
	/
	/*点击前端，遍历前端信息*/
	$('.frontEnd').click(function() {
		getData(1, 5)
		
		function getData(page, pagesize) {
			Getdata("php/get.php","get",{action:'get_list',offset:(page-1)*pagesize,rows: pagesize,where:'typeid=1',orderField:'id',orderBy:'DESC'},"json",function(data){
				render3(data)
				
			})
			function render3(data){
				$('table').empty();
				$('table').append(`<tr><td>标题</td><td>操作</td></tr>`);
				for(var i = 0; i < data.length; i++) {
					$('table').append("<tr><td>" + data[i].title + "</td><td><div class='btn-group btn-group-xs' role='group'><a class='btn btn-info' href='details.html?id="+data[i].id+"'>详情</a><a class='btn btn-success' href='amend.html?id="+data[i].id+"'>修改</a><a class='btn btn-danger' onclick='shanchu("+data[i].id+")'>删除</a></div></td></tr>")
				}
			    /*获取页面总数*/
				Getdata("php/get.php","get",{action:'get_total',where:'typeid=1'},"json",function(res){
					render4(res)
				})
				function render4(res){
					$("#page").html("")
					$("#page").paging({
				        nowPage: page, // 当前页码
				        pageNum: Math.ceil(res.total/pagesize),
				        buttonNum: pagesize, //要展示的页码数量
						canJump: 0,// 是否能跳转。0=不显示（默认），1=显示
						showOne: 1,//只有一页时，是否显示。0=不显示,1=显示（默认）
				        callback: function (num) { //回调函数 
				            getData(num,pagesize)
				        }
				    })
			    }
			}	
		}
	})
	
	/*点击安卓，遍历安卓信息*/
	$('.Android').click(function() {
		getData(1, 5)
		function getData(page, pagesize) {
			Getdata("php/get.php","get",{action:'get_list',offset:(page-1)*pagesize,rows: pagesize,where:'typeid=2',orderField:'id',orderBy:'DESC'},"json",function(data){
				render5(data)
			})
			function render5(data){
				$('table').empty();
				$('table').append(`<tr><td>标题</td><td>操作</td></tr>`);
				for(var i = 0; i < data.length; i++) {
					$('table').append("<tr><td>" + data[i].title + "</td><td><div class='btn-group btn-group-xs' role='group'><a class='btn btn-info' href='details.html?id="+data[i].id+"'>详情</a><a class='btn btn-success' href='amend.html?id="+data[i].id+"'>修改</a><a class='btn btn-danger' onclick='shanchu("+data[i].id+")'>删除</a></div></td></tr>")
				}
				/*获取页面总数*/
				Getdata("php/get.php","get",{action:'get_total',where:'typeid=2'},"json",function(res){
					render6(res)
				})
				function render6(res){
					$("#page").html("")
					$("#page").paging({
				        nowPage: page, // 当前页码
				        pageNum: Math.ceil(res.total/pagesize),
				        buttonNum: pagesize, //要展示的页码数量
						canJump: 0,// 是否能跳转。0=不显示（默认），1=显示
						showOne: 1,//只有一页时，是否显示。0=不显示,1=显示（默认）
				        callback: function (num) { //回调函数 
				            getData(num,pagesize)
				        }
				    })
			    }
			}
		}
	})
	
	/*点击IOS，遍历IOS信息*/
	$('.IOS').click(function() {
		getData(1, 5)
		function getData(page, pagesize) {
			Getdata("php/get.php","get",{action:'get_list',offset:(page-1)*pagesize,rows: pagesize,where:'typeid=3',orderField:'id',orderBy:'DESC'},"json",function(data){
				render7(data)
			})
			function render7(data){
				$('table').empty();
				$('table').append(`<tr><td>标题</td><td>操作</td></tr>`);
				for(var i = 0; i < data.length; i++) {
					$('table').append("<tr><td>" + data[i].title + "</td><td><div class='btn-group btn-group-xs' role='group'><a class='btn btn-info' href='details.html?id="+data[i].id+"'>详情</a><a class='btn btn-success' href='amend.html?id="+data[i].id+"'>修改</a><a class='btn btn-danger' onclick='shanchu("+data[i].id+")'>删除</a></div></td></tr>")
				}
				/*获取页面总数*/
				Getdata("php/get.php","get",{action:'get_total',where:'typeid=3'},"json",function(res){
					render8(res)
				})
				function render8(res){
					$("#page").html("")
					$("#page").paging({
				        nowPage: page, // 当前页码
				        pageNum: Math.ceil(res.total/pagesize),
				        buttonNum: pagesize, //要展示的页码数量
						canJump: 0,// 是否能跳转。0=不显示（默认），1=显示
						showOne: 1,//只有一页时，是否显示。0=不显示,1=显示（默认）
				        callback: function (num) { //回调函数 
				            getData(num,pagesize)
				        }
				    })
			    }
			}
		}
	})	
})