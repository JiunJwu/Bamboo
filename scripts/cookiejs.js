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