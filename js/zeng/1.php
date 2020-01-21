<?php
	rname = "localhost";
	$username = "root";
	$password = "";
	$dbname = "fenye";
	$id=$_GET['id'];
	$conn = new mysqli($servername, $username, $password, $dbname);
	// 检测连接
	if ($conn->connect_error) {
	    die("连接失败: " . $conn->connect_error);
	} 
	$sql1 = "DELETE FROM text where id=$id";
?>