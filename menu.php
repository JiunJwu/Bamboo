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
								
    $dir='./images/product/'.$select_file.'/';
     $file=scandir($dir);
    for ($x=0; $x<sizeof($file); $x++) {
        if ($file[$x] > 0)
        {						
			$producttag =$sheet->getCellByColumnAndRow(1 ,$file[$x] )->getValue();
			echo '<div class="productMenu" style="-ms-grid-column: '.$file[$x].';" onclick="productPage('.$file[$x] .',\''.$select_file.'\')">';
			echo "<img id='img$file[$x]' alt='' src='./images/product/$select_file/$file[$x]/1.JPG'/>";	
			$value=$sheet->getCellByColumnAndRow(2 ,$file[$x]+1 )->getValue();
			echo "<div class='smallfont name'><a>" . $value . '</a></div>';
			$value=$sheet->getCellByColumnAndRow(3 ,$file[$x]+1 )->getValue();
			echo "<div class='smallfont price'><a>" . $value . '</a></div>';
			echo '</div>';   	
		}										
    }

                                    
?>