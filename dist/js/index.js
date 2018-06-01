			//banner轮播
			
			$(function(){
				var i = 0;
				var timer = null;
				//默认显示第一张
				$(".list").eq(0).show().siblings().hide();
				show()
				//划过数字
				$(".num").hover(function(){
					clearInterval(timer)
					i = $(this).index();
					move();	
				})
				//鼠标划过
				$("#box").mouseover(function(){
					clearInterval(timer)
				})	
				//鼠标离开	
				$("#box").mouseout(function(){
					show()
				})
				function move(){
					
					$(".list").eq(i).fadeIn(300).siblings(300).fadeOut();
					$(".num").eq(i).addClass("bg").siblings().removeClass("bg")
				}
				function show(){
					timer = setInterval(function(){
				 	i++;
					if(i==3){
						i=0
					}
					move();
				},2000);
			}
		})
			//面部护肤轮播
			$(function(){
				var i = 0;
				var timer = null;
				//默认显示第一张
				$(".shin-care-lunbo li").eq(0).show().siblings().hide();
				show()
				//划过数字
				$(".shin-care-num").hover(function(){
					clearInterval(timer)
					i = $(this).index();
					move();	
				})
				//鼠标划过
				$(".shin-care-slide").mouseover(function(){
					clearInterval(timer)
				})	
				//鼠标离开	
				$(".shin-care-slide").mouseout(function(){
					show()
				})
				function move(){
					
					$(".shin-care-lunbo li").eq(i).fadeIn(300).siblings(300).fadeOut();
					$(".shin-care-num").eq(i).addClass("shin-care-bg").siblings().removeClass("shin-care-bg")
				}
				function show(){
					timer = setInterval(function(){
				 	i++;
					if(i==3){
						i=0
					}
					move();
				},2000);
			}
		})
				//时尚彩妆轮播
			$(function(){
				var i = 0;
				var timer = null;
				//默认显示第一张
				$(".fashion-makeup-lunbo li").eq(0).show().siblings().hide();
				show()
				//划过数字
				$(".fashion-makeup-num").hover(function(){
					clearInterval(timer)
					i = $(this).index();
					move();	
				})
				//鼠标划过
				$(".fashion-makeup-slide").mouseover(function(){
					clearInterval(timer)
				})	
				//鼠标离开	
				$(".fashion-makeup-slide").mouseout(function(){
					show()
				})
				function move(){
					
					$(".fashion-makeup-lunbo li").eq(i).fadeIn(300).siblings(300).fadeOut();
					$(".fashion-makeup-num").eq(i).addClass("fashion-makeup-bg").siblings().removeClass("fashion-makeup-bg")
				}
				function show(){
					timer = setInterval(function(){
				 	i++;
					if(i==3){
						i=0
					}
					move();
				},2000);
			}
		})
			//美体香氛轮播
			$(function(){
				var i = 0;
				var timer = null;
				//默认显示第一张
				$(".bady-fragrance li").eq(0).show().siblings().hide();
				show()
				//划过数字
				$(".bady-fragrance-num").hover(function(){
					clearInterval(timer)
					i = $(this).index();
					move();	
				})
				//鼠标划过
				$(".bady-fragrance-slide").mouseover(function(){
					clearInterval(timer)
				})	
				//鼠标离开	
				$(".bady-fragrance-slide").mouseout(function(){
					show()
				})
				function move(){
					$(".bady-fragrance-lunbo li").eq(i).fadeIn(300).siblings(300).fadeOut();
					$(".bady-fragrance-num").eq(i).addClass("bady-fragrance-bg").siblings().removeClass("bady-fragrance-bg")
				}
				function show(){
					timer = setInterval(function(){
				 	i++;
					if(i==3){
						i=0
					}
					move();
				},2000);
			}
		})