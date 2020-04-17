<?php

session_start();
$code = $_POST['code_num'];	

//若使用者輸入的數值等於驗證碼（隨機產生）則回傳1
if($code == $_SESSION["captcha_num"]){
    mysqlconnect();
}
else{
    echo"驗證碼錯誤";
}

function mysqlconnect(){
    $db_link=@mysqli_connect("localhost","id12216777_kukushopdata","s5-F)FK@=VHdAkZ?");
    $databasename="id12216777_kuku";
	//if(!$db_link){
	//	die("資料庫連線失敗<br>");
	//}else{
	//	echo"資料庫連線成功<br>";
	//}
	mysqli_query($db_link,"SET NAMES 'utf-8'");  //設定字元集與編碼為utf-8
	$seldb=@mysqli_select_db($db_link,$databasename);
	//if(!$seldb){
	//	die("資料庫選擇失敗<br>");
	//}else{
	//	echo"資料庫選擇成功<br>";
    //}
    
    header('Content-Type: text/html; charset=utf-8');
    $action = $_POST['action'];
    $cookieexpiry = (time() + 21600);
	if ($action=="login"){
        $username=$_POST['username'];
        $password=$_POST['password'];
        $sql_query_login="SELECT * FROM member WHERE account='$username' AND password='$password'";
        $result=mysqli_query($db_link,$sql_query_login) or die("查詢失敗");
        if(mysqli_num_rows($result)){
    
            while($row=mysqli_fetch_array($result)){   
                setcookie('loginstate',json_encode('success'),$cookieexpiry);
                setcookie('memberdata',json_encode($row),$cookieexpiry);
            }
            echo '<meta http-equiv=REFRESH CONTENT=1;url=index.html>';
        }else{
            setcookie("loginstate",json_encode('failed'), $cookieexpiry);
            echo"登入失敗";
            echo '<meta http-equiv=REFRESH CONTENT=1;url=LOGIN.html>';
            
            
        }
    }else{
        $username=$_POST['username'];
        $password=$_POST['password'];
        $mname=$_POST['mname'];
        $mphone=$_POST['mphone'];
        $mtel=$_POST['mtel'];
        $mmail=$_POST['mmail'];
        $mpost=$_POST['mpost'];
        $sql_query_add = "INSERT INTO member (account,password,name,phone,address,email,localcall)".
        " VALUES ('$username','$password','$mname','$mphone','$mpost','$mmail','$mtel')";

        $result=mysqli_query($db_link,$sql_query_add);
        $cookieexpiry = (time() + 21600);
        if($result){
            $newmember = array('account' => $username, 'password' => $password, 'name' => $mname,
                'phone' => $mphone, 'address' => $mpost,'email'=>$mmail,'localcall'=>$mtel);
            setcookie('loginstate',json_encode('success'),$cookieexpiry);
            setcookie('memberdata',json_encode($newmember),$cookieexpiry);

            echo "登入成功";
            echo '<meta http-equiv=REFRESH CONTENT=1;url=index.html>';
        }else{
            echo"抱歉，帳號重複，請重新註冊";
            setcookie("loginstate",json_encode('failed'), $cookieexpiry);
            header("location: register.html");
        }

    }

}
 

?>