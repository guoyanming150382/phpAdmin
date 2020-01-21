<?php 
	$user=$_POST['username'];
	$pass=$_POST['pass'];
	if($user && $pass){
		setcookie("token",$user,time()+3600);
		if(isset($_COOKIE['token']) && !empty($_COOKIE['token'])){
			echo json_encode(array('code'=>200,'msg'=>'成功','token'=>$_COOKIE['token']));
		}
	}
 ?>