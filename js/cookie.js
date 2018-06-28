//cookie封装
function setCookie(name, value, n) {
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + n);
	document.cookie = name + "=" + value + ";expires=" + oDate + ";path=/";
}

function getCookie(name) {
	var str = document.cookie;
	var arr = str.split("; ");
	for(var i = 0; i < arr.length; i++) {
		var newArr = arr[i].split("=");
		if(newArr[0] === name) {
			return newArr[1];
		}
	}
}

function removeCookie(name) {
	setCookie(name, 1, -1);
}

//数量+封装
function add(data){
	var $perID = $(data).attr("data-id");
	var $input = $(data).prev("input");
	var	$count = parseInt($input.val())+1;
	$input.val($count );
	var $obj = JSON.parse(getCookie("cart"));
	$obj[$perID] = $count;
	setCookie("cart",JSON.stringify($obj),7)
	var $price = $(data).parent().parent().parent().parent().find(".price").html()
	var $sumPrice = $(data).parent().parent().parent().parent().find(".sum-price");
	var $sumTotal = $count*$price;
	$sumPrice.html("￥"+$sumTotal+".00");
};
		 	
		 	
//数量-封装
function decrease(data){
	console.log(data);
	var $perId = $(data).attr("data-id");
	var $input = $(data).next("input");
	//console.log($input)
	var	$count = parseInt($input.val())-1;
	if($count > 0){
		$input.val($count);
		var $obj = JSON.parse(getCookie("cart"));
		$obj[$perId] = $count;
		setCookie("cart",JSON.stringify($obj),7);
		var $price = $(data).parent().parent().parent().parent().find(".price").html()
		var $sumPrice = $(data).parent().parent().parent().parent().find(".sum-price");
		console.log($sumPrice)
		var $sumTotal = $count*$price;
		$sumPrice.html("￥"+$sumTotal+".00");
	}		 	
}

//小计封装
//window.onload = function sumTotal(data){
//	console.log(data);
//	var $perCount = $(data).attr("data-id");
//	console.log($perCount);
//	var $obj = JSON.parse(getCookie("cart"));
//	var $count = $obj[$perCount];
//	console.log($count);
//	var $price = $(data).parent().parent().parent().parent().find(".price").html();
//	console.log($price)
//	var $sumPrice = $(data).parent().parent().parent().parent().find(".sum-price");
//	//var $sumTotal = $count*($price.substring(1));
//	//$sumPrice.html("￥"+$sumTotal+".00");
//}
////sumTotal();
