<?php

	require 'vendor/autoload.php';
	$reader = new \PhpOffice\PhpSpreadsheet\Reader\Xlsx();
	$select_file=$_GET['file'];
	$xlsx = "$select_file.xlsx";
	try {
		$spreadsheet = $reader->load($xlsx);
	} 
	catch (\PhpOffice\PhpSpreadsheet\Reader\Exception $e) {
		die($e->getMessage());
	}
	$sheet = $spreadsheet->getActiveSheet();
	$highestRow  = $sheet->getHighestRow(); // 取得总行数					


	// 创建链接
	$conn = new mysqli("localhost","id12216777_kukushopdata","s5-F)FK@=VHdAkZ?","id12216777_kuku");
	// 检查链接
	if ($conn->connect_error) {
    	die("连接失败: " . $conn->connect_error);
	}

//	$db_link=@mysqli_connect("localhost","id12216777_kukushopdata","s5-F)FK@=VHdAkZ?");
//	$databasename="id12216777_kuku";
	
//	mysqli_query($db_link,"SET NAMES 'utf-8'");  //設定字元集與編碼為utf-8
//	$seldb=@mysqli_select_db($db_link,$databasename);
	$sql="";
    for ($x=1; $x<$highestRow; $x++) {
		//for ($x=1; $x<=1; $x++) {					
			$tag=$sheet->getCellByColumnAndRow(1 ,$x+1 )->getValue();
			$name=$sheet->getCellByColumnAndRow(2 ,$x+1 )->getValue();
			$price=$sheet->getCellByColumnAndRow(3 ,$x+1 )->getValue();
			$word=$sheet->getCellByColumnAndRow(4 ,$x+1 )->getValue();
			$material=$sheet->getCellByColumnAndRow(5 ,$x+1 )->getValue();
			$size=$sheet->getCellByColumnAndRow(6 ,$x+1 )->getValue();
			$detail=$sheet->getCellByColumnAndRow(7 ,$x+1 )->getValue();
			$subscribe=$sheet->getCellByColumnAndRow(8 ,$x+1 )->getValue();
			$notice=$sheet->getCellByColumnAndRow(9 ,$x+1 )->getValue();
			$sql = $sql . 'INSERT INTO '.$select_file.' (tag,name,price,商品文字,商品材質,商品尺寸,商品細節,商品描述,注意事項)'; 
			$sql = $sql . "VALUES ('$tag','$name','$price','$word','$material','$size','$detail','$subscribe','$notice');";
    //$result=mysqli_query($db_link,$sql_query_add);
									
	}

	if ($conn->multi_query($sql) === TRUE) {
    	echo "新紀錄插入成功";
	} else {
    	echo "Error: " . $sql . "<br>" . $conn->error;
	}

	mysqli_close($conn);
 

?>