<?php
	$username=$_POST['username'];
	$password=$_POST['password'];
	if($username && $password){
		setcookie("token",$username,time()+3600);
		//获取 $_COOKIE['token']; 的值
		if($_COOKIE['token']){			
			echo json_encode(array('code'=>200,'msg'=>'登陆成功','token'=>$_COOKIE['token']));
		}
	}
?>