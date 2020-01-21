<?php 	
	$mySQL= new MySQLi('localhost','root','','download');
	if($mySQL -> connect_errno){
		die('链接错误' . $mySQL -> connect_errno);
	}	

	// 设置字符
	$mySQL -> set_charset('utf8');
	$sql ='select newsid,newstype,newstitle,newscontent,content_url,newsfrom from newslist limit 0,10';
	$res =$mySQL->query($sql);
	$data=[];
	if($res){
		while($arr = $res->fetch_array()){
			array_push($data, $arr);
		}
		echo json_encode(array('list' => $data,'code' =>200,'msg' =>'成功了' ));
	}else{
		echo "查询失败";
	}

 ?>