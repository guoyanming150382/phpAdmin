$(function(){
	//获取cookie
		var cusername = getCookie('customername');
		var cpassword = getCookie('customerpass');
		if(cusername != "" && cpassword != ""){
		    location.href = "homePage.html"
		}
	/********************************************
	 **********************登陆步骤******************
	 **********************************************/
	$('.login').click(function(e){
		//设置cookie
		if($('#rememberMe').is(':checked')){
	         setCookie('customername', $('.username').val(), 7)
	         setCookie('customerpass', $('.password').val(), 7)
	    }
		e.preventDefault();
		
		Getdata("php/get.php","post",{action:'login',username:$('input[type="text"]').val(),password:$('input[type="password"]').val()},"json",function(res){
			render(res)
		})
		function render(res){
			if(res.success == true){
				location.href = 'homePage.html'
			}else{
				alert('用户名密码不正确')
			}
		}
	})

	
	
	

	
	/*********************************************
	 * ******************注册步骤********************
	 **********************************************/
	$('.name').focus(function() {
		$('#sp1').css('display','none')
	});
	$('.pwd').focus(function() {
		$('#sp2').css('display','none')
	})
	//用户名判断
	$('.register').click(function(e){
		e.preventDefault();
		//用户名判断
		if(($('.name').val().length > 8) == true) {
			$('#sp1').css('display','inline-block').css('color','red')
		}
		//密码判断
		var pPattern
		pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
			if(pPattern.test($('.pwd').val()) == false) {
				$('#sp2').css('display','inline-block').css('color','red')
			};
		//如果用户名密码符合要求，则发送ajax请求
	    if($('.name').val().length > 8 == false&& pPattern.test($('.pwd').val()) == true){
	    	Getdata("php/get.php","post",{action:'add_user',name:$('.name').val(),password:$('.pwd').val()},"json",function(res){
	    		render(res)
	    	})
	    	function render(res){
	    		if(!res.success){
	    			$('#sp1').css('display','inline-block').css('color','red')
	    			$('#sp1').html(res.message)
	    		}
           		if(res.code == 102){ 			
           			$('#sp1').css('display','none')
         			location.href = "index.html"
	    		}
	    	}
	    }
	})
})
