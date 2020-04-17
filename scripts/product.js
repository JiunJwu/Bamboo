
//封裝的解析url的方法
function doClickfamg(){
    //獲取到的url值是以"?"開頭的url
  var deocdeURL = decodeURI(location.search);//解碼url
  var pureURL = deocdeURL.split("?")[1];//獲取"?"以後的引數
  var valuesArray = pureURL.split("&;");
  var url_Object = new Object();
  for(var i = 0;i< valuesArray.length;i++){
  var key_value = valuesArray[i].split("=");
  //動態給物件新增key和value
  //是以傳遞過來的key和value作為解析後的新的物件的key和value
  url_Object[key_value[0]] = key_value[1];
  }
  return url_Object;//返回物件
  }
  
  function test(){
        //呼叫解析方法
        var mydecodeURI = doClickfamg();
        var xmlhttp;
        if (window.XMLHttpRequest)
          {// code for IE7+, Firefox, Chrome, Opera, Safari
          xmlhttp=new XMLHttpRequest();
          }
        else
          {// code for IE6, IE5 
          xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
          }
        xmlhttp.open("GET","test.php?file="+mydecodeURI.cata,true);
        xmlhttp.onload=function()
        {
          if (xmlhttp.readyState==4 && xmlhttp.status==200)
          {
            var page = document.getElementById("menu");
            page.innerHTML=xmlhttp.responseText;
          }
        }
        xmlhttp.send();
  }

  function menuProductContent()   //loadXMLDoc
  {
      //呼叫解析方法
    var mydecodeURI = doClickfamg();
    var xmlhttp;
    if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
      }
    else
      {// code for IE6, IE5 
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xmlhttp.open("GET","menu.php?file="+mydecodeURI.cata,true);
    xmlhttp.onload=function()
      {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
          var page = document.getElementById("menu");
          page.innerHTML=xmlhttp.responseText;
        }
      }
    xmlhttp.send();
  }	
  
  //---------------------------------------------------------
  function productPage(tag,name)   //loadXMLDoc
  {
    var xmlhttp;
    if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
      }
    else
      {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xmlhttp.open("GET","bag.php?tag="+tag+"&name="+name,true);
    xmlhttp.onload=function()
      {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
          deletepage();
          var page = document.createElement('div');
          page.className = 'productView';
          page.innerHTML=xmlhttp.responseText;
          document.getElementById("page-wrapper").appendChild(page);
        }
      }
    xmlhttp.send();
    
  }
  function deletepage(){
    try {
      var page=document.getElementsByClassName("productView")[0];
      document.getElementById("page-wrapper").removeChild(page);
    } catch (error) {
      
    }
  }
  ///-------------------------------------------------------------------------
  function order(direction){
    var pics= document.getElementsByClassName("productImg");
    if (direction==="left"){
      for (var i = 0 ; i < pics.length; i++) {
        pics[i].style.order= parseInt(pics[i].style.order)-1;
        if(pics[i].style.order==0){
          pics[i].style.order=parseInt(pics[i].style.order)+pics.length;
        }
      }
    }
    else{
      for (var i = 0 ; i < pics.length; i++) {
        pics[i].style.order= parseInt(pics[i].style.order)+1;
        if(pics[i].style.order>pics.length){
          pics[i].style.order=parseInt(pics[i].style.order)-pics.length;
        }
      }
    }
    for (var i = 0 ; i < pics.length; i++) {
      if(pics[i].style.order==1){
        $(".slider-dot").eq(i).addClass("selected");
        
      }
      else{
        $(".slider-dot").eq(i).removeClass("selected");
      }
    }
  }
  
  function changeMain(num,tag,files)
  {
    var route='./images/product/'+files+'/'+tag+'/'+num.toString()+'.JPG';
    document.getElementById("mainshow").setAttribute('src',route);
    document.getElementById("imageshow").setAttribute('href',route);
    
    //$("#mainshow div:nth-child(2)").setAttribute('src',route);
    //$("#mainshow div").animate("round", start);
    //$("#mainshow").animate( $("#mainshow").attr('src',route),0)
  }
  
    function handleTouchMove() {
        $("#imgnav").swipe({
            threshold: 0,
            swipe:function(event, direction, distance, duration, fingerCount, fingerData, currentDirection) {
                order(direction);
            }
        });  
    }


    function sendbuylist(guid,product,price,imgsrc){
        var qty = parseInt(document.getElementById("productqty").value);
        var cookies=getcookie();
        var carList=checkCookie(cookies,'carlist');
        pushtocookie(carList,guid,product,qty,price,imgsrc);
      }

  