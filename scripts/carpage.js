var oCarList;
var oSubPrice;
var carList;
function carpageOnload(){
/*
读取cookie中的carlist
把json字符串转换成对象/数组：JSON.parse()
json字符串格式：
1.必须用双引号
2.不能右注释
*/
oCarList = document.getElementById('carList');
oSubPrice = oCarList.nextElementSibling;
carList = getcookie('carlist');

var subPrice = 0;
    //动态的根据cookie的内容创建列表
if(carList){
    var tableRef = document.getElementById('listtable').getElementsByTagName('tbody')[0];
    console.log(tableRef);
            // Insert a row in the table at the last row
    for(var i=0;i<carList.length;i++) {
        //插入一行
        var newRow = tableRef.insertRow(tableRef.rows.length);
        newRow.setAttribute('guid',carList[i].guid)

        //插入商品
        var cell0 = newRow.insertCell(0);
        var cell1 = newRow.insertCell(1);
        var cell2 = newRow.insertCell(2);
        var cell3 = newRow.insertCell(3);
        var cell4 = newRow.insertCell(4);
        // Append a text node to the cell
         // creating checkbox element 
         var checkbox = document.createElement('input'); 
         checkbox.type = "checkbox"; 
         checkbox.checked=carList[i].check;
         checkbox.addEventListener('click',checkout,false);
         cell0.appendChild(checkbox);

        var img = document.createElement('img');
        img.src = carList[i].imgUrl;
        cell1.appendChild(img);
        var br = document.createElement("br");
        cell1.appendChild(br)
        var title = document.createTextNode(carList[i].name);
        cell1.appendChild(title);
        var price = document.createTextNode(carList[i].price);
        cell2.appendChild(price);
        var number=document.createTextNode(carList[i].qty);
        cell3.appendChild(number);
        
        var btnClose = document.createElement('span');
        btnClose.innerHTML = '删除';
        btnClose.className = 'btn-close';
        btnClose.addEventListener('click',deleteproduct,false);
        cell4.appendChild(btnClose);
        // 计算总价
        if(carList[i].check===true){
            subPrice += carList[i].price*carList[i].qty;
        }
//        li.appendChild(title);
//        li.appendChild(price);
//        li.appendChild(img);
//        li.appendChild(btnClose);
//        ul.appendChild(li);
    }
    // 写入页面
//    oCarList.appendChild(ul);
    // 写入总价
    // toFixed(n)获取小数点后n位（自动四舍五入，Number类型的方法）
    if (subPrice>0){
        oSubPrice.innerHTML = '<span class="price">' + subPrice.toFixed(2) + '</span>';
        shownextstage($("#goStep2")[0],true);
    }else{
        oSubPrice.innerHTML = '請確認商品';
    }
        
    }

}
function payOnload(){
    var cookieList = [];
    var cookies = document.cookie.split('; ');
    for(var i=0;i<cookies.length;i++){
        var arr = cookies[i].split('=');
        if(arr[0] === 'memberdata'){
            cookieList = JSON.parse(decodeURIComponent(arr[1]));
            break;
        }
    }   
    document.getElementById("mname").value=cookieList['name'];
    document.getElementById("mphone").value=cookieList['phone'];
    document.getElementById("mmail").value=cookieList['email'];
    document.getElementById("mtel").value=cookieList['localcall'];
    document.getElementById("maddr").value=cookieList['address'];
}

function finalonload(){
    var tableRef = document.getElementById('cartable').getElementsByTagName('tbody')[0];
    oCarList = document.getElementById('carList');
    oSubPrice = oCarList.nextElementSibling;
    carList = getcookie('carlist');

    var subPrice = 0;
    for(var i=0;i<carList.length;i++) {

        if(carList[i].check===true){
        //插入一行
        var newRow = tableRef.insertRow(tableRef.rows.length);
        newRow.setAttribute('guid',carList[i].guid)
        
        //插入商品
        var cell0 = newRow.insertCell(0);
        var cell1 = newRow.insertCell(1);
        var cell2 = newRow.insertCell(2);

        // Append a text node to the cell
        var img = document.createElement('img');
        img.src = carList[i].imgUrl;
        cell0.appendChild(img);
        var br = document.createElement("br");
        cell0.appendChild(br)
        var title = document.createTextNode(carList[i].name);
        cell0.appendChild(title);
        var price = document.createTextNode(carList[i].price);
        cell1.appendChild(price);
        var number=document.createTextNode(carList[i].qty);
        cell2.appendChild(number);
        
        //總價
        subPrice += carList[i].price*carList[i].qty;
        }
    }
    oSubPrice.innerHTML = '<span class="price">' + subPrice.toFixed(2) + '</span>';

    payOnload()
  
}

function getcookie(cookiename){
    var cookieList = [];
    var cookies = document.cookie.split('; ');
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
/*
function setAddressFormat(form){
 if (form==="T"){
    document.getElementById("send_addr_overseas").style.display="table-row";
    document.getElementById("send_addr_internal").style.display="none";
 }
 else{
    document.getElementById("send_addr_internal").style.display="table-row";
    document.getElementById("send_addr_overseas").style.display="none";
 }

}
*/
function checkout(){
    var currentLi = event.currentTarget.parentElement.parentElement;
    var currentGUID = currentLi.getAttribute('guid');
    // 根据guid取对比
    for(var i=0;i<carList.length;i++){
    // 找出check的商品
        if(carList[i].guid === parseInt(currentGUID)){
            carList[i].check=event.currentTarget.checked;
            break;
        }
    }
    // 更新cookie
    document.cookie = 'carlist=' + JSON.stringify(carList);
    var subPrice = 0;
    for(var i=0;i<carList.length;i++) {
        if(carList[i].check===true){
            subPrice += carList[i].price*carList[i].qty;
        }
    }
    
    if (subPrice>0){
        oSubPrice.innerHTML = '<span class="price">' + subPrice.toFixed(2) + '</span>';
        shownextstage($("#goStep2")[0],true)
        
    }else{
        oSubPrice.innerHTML = '請確認商品';
        shownextstage($("#goStep2")[0],false)
    }

}

function shownextstage(checkdiv,display){
    if (display===true){
        checkdiv.style.display = 'block'; 

    }else{
        checkdiv.style.display = 'none'; 
    }
}

function deleteproduct(){
    var currentLi = event.currentTarget.parentElement.parentElement;
    var currentGUID = currentLi.getAttribute('guid');
    // 删除cookie中对应的商品
    // 根据guid取对比
    for(var i=0;i<carList.length;i++){
    // 找出要删除的商品
        if(carList[i].guid === parseInt(currentGUID)){
            carList.splice(i,1);
            break;
        }
    }
    // 更新cookie
    document.cookie = 'carlist=' + JSON.stringify(carList);
    // 删除li节点
    currentLi.parentElement.removeChild(currentLi);
    location.reload()
}
// 清空购物车
// 1、删除DOM节点
// 2、删除cookie
function clearall(){
    oCarList.innerHTML = '';
    oSubPrice.innerHTML = '';
    // 利用设置有效期位过期事件来达到删除cookie的效果
    var now = new Date();
    now.setDate(now.getDate()-7);
    document.cookie = 'carlist=xx;expires=' + now;
}
