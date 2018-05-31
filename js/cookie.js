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



		function add(data){
		 			console.log(data)
		 			var a = $(data).attr("data-id")
		 			console.log(a);
		 			var $input = $(data).prev("input");
		 			var	$count = parseInt($input.val())+1;
		 			$input.val($count );
		 			var $obj = JSON.parse(getCookie("cart"));
		 			console.log($count)
		 			$obj[a] = $count;
		 			setCookie("cart",JSON.stringify($obj),7)
		 			var $price = $(data).parent().parent().parent().parent().find(".price").html()
		 			console.log($price)
		 			var $sumPrice = $(data).parent().parent().parent().parent().find(".sum-price");
		 			var $sumTotal = $count*($price.substring(1));
		 			$sumPrice.html("￥"+$sumTotal+".00");
		 	};
		 	
		 	

		function decrease(data){
			var a = $(data).attr("data-id");
			var $input = $(data).prev("input");
		 	var	$count = parseInt($input.val())-1;
		 	$input.val($count);
		 		//$obj[$perCount] = $count;
		 	var $obj = JSON.parse(getCookie("cart"));
		 	$obj[a] = $count;
		 	setCookie("cart",JSON.stringify($obj),7);
		 	var $price = $(data).parent().parent().parent().parent().find(".price").html()
		 	console.log($price)
		 	var $sumPrice = $(data).parent().parent().parent().parent().find(".sum-price");
		 	var $sumTotal = $count*($price.substring(1));
		 	
		 	
		 	
		 		 
		 		
		 		$sumPrice.html("￥"+$sumTotal+".00");
		 	
		}
