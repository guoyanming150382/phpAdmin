//操作成功后根据头部得到id返回相应类型的页面
$(function(){
	//得到头部所带的参数
	UrlSearch()
	var sign = name+'='+value;
	//判断头部是否带有id
	function getQueryString(names) { 
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var l = decodeURI(window.location.search);
		var r = l.substr(1).match(reg);
		if (r != null) return unescape(r[2]);
		return null;
	}
	var names = getQueryString("names")
	
	//如果头部没有id
	if((name!='typeid'||value=='undefined') || names==null){
		//遍历所有内容
		getdata(1,5)
		//传入改变的页数
	    function getdata(page,pagesize){
	    	//查询list 遍历列表
	    	Getdata("php/get.php","get",{action:'get_list',offset:(page-1)*pagesize,rows:pagesize},"json",function(data){
	    		render(data)
	    	})
	    	function render(data){
	    		$('table').empty();
				$('table').append(`<tr><td>标题</td><td>操作</td></tr>`);
				for(var i=0;i<data.length;i++){
				$('table').append("<tr><td>"+data[i].title+"</td><td><div class='btn-group btn-group-xs' role='group'><a class='btn btn-info' href='details.html?id="+data[i].id+"'>详情</a><a class='btn btn-success' href='amend.html?id="+data[i].id+"'>修改</a><a class='btn btn-danger' onclick='shanchu("+data[i].id+")'>删除</a></div></td></tr>")
				};
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
				            getdata(num,pagesize)
				        }
				    })
				}
	    	}
	    }
	}else{
	    //否则头部带参时(带id时的情况为增删改查操作后)返回与左侧边栏id相应类型的页面
		getData(1,5)
		function getData(page,pagesize){
		    	//查询list 遍历列表
		    $("#page").html("");
	    	Getdata("php/get.php","get",{action:'get_list',offset:(page-1)*pagesize,rows:pagesize,where:sign,orderField:'id',orderBy:'DESC'},"json",function(data){
	    		render(data)
	    	})
	    	function render(data){
	    		$('table').empty();
				$('table').append(`<tr><td>标题</td><td>操作</td></tr>`);
				for(var i=0;i<data.length;i++){
				$('table').append("<tr><td>"+data[i].title+"</td><td><div class='btn-group btn-group-xs' role='group'><a class='btn btn-info' href='details.html?id="+data[i].id+"'>详情</a><a class='btn btn-success' href='amend.html?id="+data[i].id+"'>修改</a><a class='btn btn-danger' onclick='shanchu("+data[i].id+")'>删除</a></div></td></tr>")
				};
				/*获取页面总数*/
				Getdata("php/get.php","get",{action:'get_total',where:sign},"json",function(res){
					render2(res)
				})
				function render2(res){
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
	}
})
