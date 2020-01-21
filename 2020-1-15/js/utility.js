/*************增删改查***************/
/*封装一个得到url传输过来id值的方法*/
	var name, value;
	function UrlSearch() {
		var str = location.href; //获取到整个地址
		var num = str.indexOf("?")
		str = str.substr(num + 1); //取得num+1后所有参数，这里的num+1是下标 str.substr(start [, length ]
		var arr = str.split("&"); //以&分割各个参数放到数组里
		for (var i = 0; i < arr.length; i++) {
			num = arr[i].indexOf("=");
			if (num > 0) {
				name = arr[i].substring(0, num);
				value = arr[i].substr(num + 1);
				this[name] = value;
			}
		}
	}

//ajax封装
function Getdata(url,type,data,dataType,callback){
    $.ajax({
 		url:url,
 		type:type,
 		data:data,
 		dataType:dataType,
 		success:function(res){
 			callback(res)
 		}
 	});
}

/*新增内容*/
function adds(){
	//遍历出所有分类
	Getdata("php/get.php","get",{action:'get_arctype',where:'reid=0'},'json',function(nei){
		render2(nei)
	})
	function render2(nei){
		for(var i=0;i<nei.length;i++){
			$('.xialaadd').append("<option value="+nei[i].id+">"+nei[i].typename+"</option>")
		}
	}
	
	//点击保存
	$('.btn-success').click(function(){
		var options=$(".xialaadd option:selected");
		var tid = options.val()
		var typeid={
			id:options.val(),
			typename:options.text(),
			reid:0
		}
		Getdata("php/get.php","get",{action:'add_article',where:'reid=0',title:$('input').val(),content:$('.neirong').val(),typeid},'json',function(data){
			render3(data)
		})
		function render3(data){
			location.href = 'homePage.html?typeid='+tid
		}
	});
	
	//点击返回
	$('.btn-primary').click(function(){
		var options=$(".xialas option:selected");
		var tid = options.val()
		location.href = 'homePage.html?typeid='+tid
	})
};

/*删除功能*/
function shanchu(id){
	Getdata("php/get.php","get",{action:'delete_article',id:id},'json',function(data){
	    render4(data)
	})
	function render4(data){
		if(data.code==101){
			alert('删除成功!')
			 window.location.reload();
		}else{
			alert('删除失败!')
		}
	}
};

/*修改功能*/
function update(){
	//调用获取头部id方法
	UrlSearch()
	
	//遍历出所有分类
	Getdata("php/get.php","get",{action:'get_arctype',where:'reid=0'},'json',function(data){
		render5(data)
	})
	function render5(data){
		for(var i=0;i<data.length;i++){
			$('.xiala').append("<option value="+data[i].id+">"+data[i].typename+"</option>")
		}
	}
	
	/*遍历出当前条数的信息*/
	Getdata("php/get.php","get",{action:'get_article',id:value},'json',function(data){
		render6(data)
	})
	function render6(data){
		$('input').val(data.title);
		$('textarea').text(data.content);
		$('.xiala').find("option[value='"+data.typeid+"']").attr("selected",true)
		/*点击返回首页页面*/
		$('.btn-primary').click(function(){
			location.href = 'homePage.html?typeid='+data.typeid
		})	
	}
		
	/*点击修改当前信息*/
	$('.btn-success').click(function(){
		var options=$(".xiala option:selected");
		var yid = options.val()
		Getdata("php/get.php","get",{action:'update_article',id:value,title:$('input').val(),content:$('.neirong').val(),typeid:options.val()},'json',function(data){
			render7(data)
		})
		function render7(data){
			location.href = 'homePage.html?typeid='+yid
		}
	})
};

/*查询功能*/
function information(){
	//调用获取头部id方法
	UrlSearch()
	
    /*遍历当前信息*/
	Getdata("php/get.php","get",{action:'get_article',id:value},'json',function(data){
		render(data)
	})
	function render(data){
		$('table').empty();
		$('table').append(`<tr><td>标题</td><td>内容</td><td>类别</td></tr>`);
		$('table').append("<tr><td>"+data.title+"</td><td>"+data.content+"</td><td>"+data.typename+"</td></tr>");
		$('.fan').append('<button class="btn button form-control">返回</button>')
		$('.button').click(function(){
			location.href = "homePage.html?typeid="+data.typeid
		})
	}
}
