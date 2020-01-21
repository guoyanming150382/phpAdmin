<?php 
	$data=json_encode(array(
		"code"=>200,
		"msg"=>"成功了",
		"shu"=>array(
				array("name"=>"joke","old"=>36),
				array("name"=>"moke","old"=>16),
				array("name"=>"piul","old"=>26),
				array("name"=>"buyu","old"=>96)
			)
		)
	);
	echo 'foot1('.$data.')';
 ?>