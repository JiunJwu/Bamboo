function resize(){
  var elmnt = document.getElementsByClassName("dad");
  var elmnt2 = document.getElementsByClassName("back3")[0];
  var elmnt3 = document.getElementsByClassName("twoColumn");
  var elmnt4=document.getElementsByClassName("s-repeatable");
  var elmnt6=document.getElementsByClassName("contactus")[0];
  
  if(window.matchMedia('(min-width: 600px)').matches==true){
	  var xxx;
    var j;

	  for (j = 0; j < elmnt.length; j++) {
      yyy=elmnt[j].offsetWidth/10;
      elmnt[j].style.backgroundPositionX=elmnt[j].offsetLeft-yyy+"px";
    }
    xxx=elmnt2.offsetWidth;
    elmnt2.style.backgroundPositionX=elmnt2.offsetLeft+(xxx-1400*$(window).height()/933)/2+"px";
    elmnt2.style.height=$(window).height()+"px";
    var t;
    for (t = 0; t < elmnt.length; t++) {
      if (elmnt4[t].offsetHeight<$(window).height()){
        elmnt[t].style.height=$(window).height()+"px";
      }
      else{
        elmnt[t].style.height=elmnt4[t].offsetHeight+"px";
      }
    }
    var elmnt7=document.getElementById("every-where-is-painful").offsetHeight;
    var elmnt8=document.getElementById("toparticle").offsetHeight;
    var elmnt9=document.getElementsByClassName("head")[0];
    if (elmnt7+elmnt8<$(window).height()){
      elmnt9.style.height=$(window).height()+"px";
    }
    else{
      elmnt9.style.height="auto";
    }
    if (window.matchMedia('(max-width: 1024px)').matches==true){
      var k;
  
      for (k = 0; k < elmnt.length; k++) {
        yyy=elmnt[k].offsetWidth/10;
        elmnt[k].style.backgroundPositionX="center";
        $height=$(window).height();
        elmnt[k].style.backgroundSize="auto "+$height*1.1+"px";
      }
      elmnt2.style.backgroundPositionX="center";
      elmnt2.style.backgroundSize="auto "+$(window).height()+"px";
    }
  }
  else{
    var elmnt5=document.getElementsByClassName("item");
    for(var i=0;i<elmnt.length;i++)
    {
        elmnt[i].style.backgroundPosition="center";
        elmnt[i].style.width="100%";
        elmnt[i].style.backgroundSize="100% auto";
        elmnt[i].style.height=$(window).height()+"px";
    }
    elmnt2.style.backgroundPosition="center";   
    elmnt2.style.width="100%";
    elmnt2.style.backgroundSize="auto "+$(window).height()+"px";
    elmnt2.style.height=$(window).height()+"px";
    elmnt2.style.backgroundAttachment="scroll";
    for (t = 0; t < elmnt3.length; t++) {
      elmnt3[t].style.height="auto";
    }
    for (t = 0; t < elmnt5.length; t++) {
      elmnt5[t].style.width="100%";
    }
  }
  elmnt6.style.height=$(window).height()+"px";
}

//宣告預設表單內容為空 （你想要的話也可以加東西）
    var initSubject='',initBody='';
 
    //按下傳送按鈕後執行
    function submitHandler(){
        var to = "pd4058@yahoo.com.tw";//寫死的傳送對象 就是公司的信箱 不會顯示在網頁上
        var name = nameText.value;//讀取ID為 nameTextuser 物件中的值
        var email = emailText.value;
        var subject = subText.value;
//把user填的資料都塞到 mail body 中
        var body = ""+bodyText.value+'%0A%0A%0A';//%0A是換行 換了三行
            body += "From："+nameText.value+'%0A';
            body += "Email："+emailText.value+'%0A';
//傳送的主要程式碼
        mailTo.href="mailto:"+to+"?subject="+subject+"&body="+body;
        mailTo.click();
    }
//在body onload
    function init(){
        subText.value=initSubject;
        toText.value=initTo;
        bodyText.value=initBody;
    }

window.addEventListener('scroll', function(e) {
    window.requestAnimationFrame(function() {
      processScroll();
    });
});

function processScroll(){
   /* Check the location of each desired element */
   $('.main_text').each( function(i){
            
    var top_of_object = $(this).offset().top ;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    
    /* If the object is completely visible in the window, fade it it */
    if( bottom_of_window > top_of_object +200){     
        $(this).animate({'opacity':'1'},300);
       
    }
  }); 
  $bgsizeY=$('.dad').css("background-size").split(" ")[1];
  if ($bgsizeY<$('.dad').height){
    $('.dad').each( function(i){
      $buttomY=$(this).offset().top+$(this).outerHeight()-$(window).height();
      if( $(window).scrollTop() > $(this).offset().top-50 && $(window).scrollTop()<$buttomY){
        var backgroundY = $(window).scrollTop()-$(this).offset().top ;
        $(this).animate({'background-position-y':backgroundY},5,'swing');
      }
    });
  }else{
    var dad = document.getElementsByClassName("dad");
    var element = window.scrollY+window['innerHeight']/2;
    for(var i=0;i<=dad.length-1;i++)
    {
      if (element>dad[i].offsetTop &  element<dad[i].offsetTop+dad[i].offsetHeight) {
        dad[i].style.backgroundPositionY=(dad[i].offsetTop-element)/8+"px";
        }   
    }

  }

  $('.s-animation-page-slide_in-before').each( function(i){
            
    var top_of_object = $(this).offset().top ;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    
    /* If the object is completely visible in the window, fade it it */
    if( bottom_of_window > top_of_object +200){     
      $(this).removeClass("s-animation-page-slide_in-before");  
      $(this).addClass("s-animation-page-slide_in");  

    }
  }); 

  /*
  $('.showpics').each(function(i){
    var top_of_object = $(this).offset().top ;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if( bottom_of_window > top_of_object +200){    
      for (var i=0;i<4;i++)
      { 
        setTimeout(myMove(i),5000);
        //$(this).animate({marginLeft:toString(-80*i)+"vw"});
      } 
    }

  });
*/
  if(window.matchMedia('(max-width: 1025px)').matches==false){
    var elements = window.scrollY+window['innerHeight']/2;
    var maintext = document.getElementsByClassName("main_text");
    for(var i=0;i<maintext.length-1;i++)
    {
      if (elements>maintext[i].offsetTop &  elements<maintext[i+1].offsetTop) {
        $(".s-nav-item").eq(i).addClass('.s-nav-item white');
        }   
      else 
        {
          $(".s-nav-item").eq(i).removeClass('.s-nav-item white');
        }
    }
    if (elements>maintext[maintext.length-1].offsetTop){
      $(".s-nav-item").eq(maintext.length-1).addClass('.s-nav-item white');
    }
    else{
      $(".s-nav-item").eq(maintext.length-1).removeClass('.s-nav-item white');
    }
 
    var back3 = document.getElementsByClassName("back3")[0];
    if (elements>back3.offsetTop &  elements<back3.offsetTop+back3.offsetHeight) {
      back3.style.backgroundPositionY=(back3.offsetTop-elements)/8+"px";
      }
  }
  
}

function myMove(i) {
  var elem = document.getElementsByClassName("showpics")[0];   
  var pos = -80*i;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == (-80)*(i+1)) {
      clearInterval(id);
    } else {
      pos--; 
      elem.style.marginLeft = pos + 'vw'; 
    }
  }
}
///購物車-------------------------------------------------------- 
function login(){
  var cookies=getcookie();
  var islogin=checkCookie(cookies,'loginstate');
  var icon = document.getElementById('member');
  var nav_login = document.getElementById('nav-login');
  
  if (islogin==='success'){ 
    var name=checkCookie(cookies,'memberdata')["name"];
    icon.setAttribute("showhints", 'Hello,'+name);   
    nav_login.innerHTML="HI,"+name;
  }
  else{
    icon.setAttribute("showhints", "登入");   
    nav_login.innerHTML="Login";
  }
}


function getcookie(){
 // 先獲取當前cookie
 var cookies = document.cookie.split('; ');
 return cookies;
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
  function pushtocookie(carList,guid,name,qty,price,imgsrc){
  // 先創建一個對象保存當前商品信息
    var goodsObj = {};
    goodsObj.guid = guid;
    goodsObj.name = name;
    goodsObj.qty = qty;
    goodsObj.price = price;
    goodsObj.imgUrl = imgsrc;
    goodsObj.check = false;
    // 如果cookie為空，則直接添加
    if(carList.length===0){
      // 添加到carList
      carList.push(goodsObj);
    }else{
      // 先判斷cookie中有無相同的商品
      for(var i=0;i<carList.length;i++){
      // 如果商品已經存在cookie中，則數量+
        if(carList[i].guid === guid){
          carList[i].qty=carList[i].qty+qty;
          carList[i].check = false;
        break;
        }
      }
      // 如果原cookie中沒有當前商品
      if(i===carList.length){
      // 添加到carList
        carList.push(goodsObj);
      }
    }
    // 存入cookie
    // 把對象/數組轉換誠json字符串：JSON.stringify()
    document.cookie = 'carlist=' + JSON.stringify(carList);
    alert("產品已加入購物車");
  }
  /////////////////購物車////////////////////////////
  