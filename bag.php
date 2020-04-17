<?php
    header('content-type:application:json;charset=utf8');
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST');
    header('Access-Control-Allow-Headers:x-requested-with,content-type');
?> 
        
<hr/>
<div class="productShow">    
    <?php
        $name=$_GET["name"];
        $tag=$_GET["tag"];
        echo '<div class="frame"><a id="imageshow" class="image-link" href="./images/product/'.$name.'/'.$tag.'/1.JPG" data-lightbox="productshow" >';
        echo '<img id="mainshow" class="lazyload" src="./images/product/'.$name.'/'.$tag.'/1.JPG"/>';
        echo '</a></div>';
        echo '<div id="imgnav">';
        echo "<div id='allview'>";
        $handle = opendir('./images/product/'.$name.'/'.$tag.'/'); //當前目錄
        $i=0;
        while (false !== ($file = readdir($handle))) { //遍歷該php檔案所在目錄
            list($filesname,$kzm)=explode(".",$file);//獲取副檔名
            if($kzm=="gif" or $kzm=="jpg" or $kzm=="JPG") { //檔案過濾
            if (!is_dir('./'.$file)) { //資料夾過濾
                $i++  ;//記錄圖片總張數
                }
            }
        }
      
        for ($x=1; $x<=$i; $x++) {
            echo '<img class="productImg" id="img'.$x.'" style="order:'.$x.';" src="./images/product/'.$name.'/'.$tag.'/'.$x.'.JPG" onclick="changeMain('.$x.','.$tag.',\''.$name.'\')"  onload="handleTouchMove()"/>';
            echo '<a class="image-link" id="image'.$x.'" href="./images/product/'.$name.'/'.$tag.'/'.$x.'.JPG" data-lightbox="productshow"></a>'; 
        }
        echo '</div>';//allview
        echo '<ul class="slider-dot-wrapper">';
        echo '<li class="slider-dot selected"></li>';
        for ($x=2; $x<=$i; $x++) {
            echo '<li class="slider-dot"></li>';
        }
        echo '</ul>';
    ?>
    <button id="moveleft" onclick='order("left")'></button>
    <button id="moveright" onclick='order("right")'></button>
    </div> <!--imgnav-->

</div>   

<div class="productShow">
    <?php
        require 'vendor/autoload.php';
        $reader = new \PhpOffice\PhpSpreadsheet\Reader\Xlsx();
        $xlsx=$name.'.xlsx';
        try {
            $spreadsheet = $reader->load($xlsx);
        } catch (\PhpOffice\PhpSpreadsheet\Reader\Exception $e) {
            die($e->getMessage());
        }
        $sheet = $spreadsheet->getActiveSheet();
        $highestColumm = $sheet->getHighestColumn();
        $highestColumnIndex = \PhpOffice\PhpSpreadsheet\Cell\Coordinate::columnIndexFromString($highestColumm); 
        $select_tag=$_GET['tag'];
        $proname=$sheet->getCellByColumnAndRow(2 ,$select_tag+1)->getValue();
        echo "<h2 class='producttext'>" . $proname . '</h2>';
        $price=$sheet->getCellByColumnAndRow(3 ,$select_tag+1)->getValue();
        echo "<h4 class='producttext'>" . $price . '</h4>';
        for ($col = 4; $col <= $highestColumnIndex; ++$col) {
            $property=$sheet->getCellByColumnAndRow($col ,1)->getValue();
            $value=$sheet->getCellByColumnAndRow($col ,$select_tag+1)->getValue();
            echo "<div class='producttext'>".$property." : ". $value . '</div><br/>';
        }
        $proname="'$proname'";
        echo '<section>';
        echo '<input class="productqty" id="productqty" type="number" value="1"/>';
        $srctext="'./images/product/$name/$tag/1.JPG'";
        echo '<div class="checkdiv"><button class="check" onclick="sendbuylist('.$select_tag.','.$proname.','.$price.','.$srctext.')">加入購物車</button></div>';
        echo '</section>';
    ?>    
</div>
        	
           
