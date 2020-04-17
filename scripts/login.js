function login(){
    var cookies = document.cookie.split('; ');
    var islogin=checkCookie(cookies,'loginstate');
    var hint = document.getElementById('register_failed_show');
    if (islogin==='failed'){ 
        hint.style.display="block";
    }
    else{
        hint.style.display="none";
    }
  }

  function checkCookie(cookies,cookiename){
    var cookieList = [];
   
    for(var i=0;i<cookies.length;i++){
      var arr = cookies[i].split('=');
      if(arr[0] === cookiename){
        try{
          cookieList = JSON.parse(arr[1]);
        }
        catch (e) {
          cookieList = JSON.parse(decodeURIComponent(arr[1]));
        }
        return cookieList
        }
    }
    return cookieList
  }

  $(function(){
    $("#getcode_num").click(function(){
      $(this).attr("src", "captcha/code_num.php");				/*刷新圖像*/
    });

    /*
    $("#chk_num").click(function(){
      var code_num = $("#code_num").val();						//回傳變數
      
      //以POST方式回傳使用者在輸入框輸入的值，如果得到msg為1，則輸入正確，否則失敗。
      $.post("captcha/chk_code.php?act=num",{code:code_num},function(msg){
        if(msg == 1){
          alert("驗證碼正確！");
          var account = $("#account").val();						//回傳變數
          var PW = $("#password").val();						//回傳變數
          $.post("login_php.php?action=login",{username:account},{password:PW},function(msg){
            if(msg == 1){
              alert("登入成功！");
            }else{
              alert("登入失敗！");
            }
          });
        }else{
          alert("驗證碼錯誤！");
        }
      });
    });
    */
    });