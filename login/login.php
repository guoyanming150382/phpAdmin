<?php
	$username=$_POST['username'];
	$password=$_POST['password'];
	if(isset($_POST['radioval'])){
		$radioval = $_POST['radioval'];
	}else{
		$radioval=0;
	}
	
	if($radioval==1){
		setcookie("loginStatus",true, time()+3600*24);
		setcookie("username",$username, time()+3600*24);
		setcookie("password",$password, time()+3600*24);
		setcookie("radioval",$radioval, time()+3600*24);
	}else if($radioval==2){
		setcookie("loginStatus",true, time()+3600*24*7);
		setcookie("username",$username, time()+3600*24*7);
		setcookie("password",$password, time()+3600*24*7);
		setcookie("radioval",$radioval, time()+3600*24*7);
	}else if($radioval==3){
		setcookie("loginStatus",true, time()+3600*24*30);
		setcookie("username",$username, time()+3600*24*30);
		setcookie("password",$password, time()+3600*24*30);
		setcookie("radioval",$radioval, time()+3600*24*30);
	}else{
		
	}
	echo json_encode(array('code'=>200,'msg'=>'登陆成功','username'=>$username,'password'=>$password));
?>