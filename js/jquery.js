$(function(){
// 发现好货部分的商品列表自动滚动
	var clone = $(".goods-list").children().clone(true);
	$(".goods-list-clone").append(clone);
	var goodslist = $(".goods-list");
	var goodslistHtml = goodslist.html();
	goodslist.html(goodslistHtml+goodslistHtml);
	var timeId = null;
	var list_item = $(".goods-list a");
	var list_item_width = list_item.eq(0).width();
	var list_item_size = list_item.size();
	var list_width = list_item_width*list_item_size;
	goodslist.width(list_width/2);
	console.log(list_width,goodslist.width());
	// 图片文字自动向左滚动，scroll-bar向右滚动
	function slider(){
		if(goodslist.css('left')==-list_width/4*3+'px'){
			goodslist.css('left',"990px");		
		}
		if(goodslist.css('left')=='0px'){
			$(".goods-list-clone").css('left','2000px');
		}
		if(goodslist.css('left')=='0px'||$(".goods-list-clone").css('left')=='0px'){
			$(".scroll-bar span").css('left','0px');
		}	
		goodslist.css('left','+=-2px');
		$(".goods-list-clone").css('left','+=-2px');
		$(".scroll-bar span").css('left','+=0.9px');		
	}
	timeId = setInterval(slider,30);
	// 鼠标移入时暂停，移出时继续
	$(".nice-goods").mouseenter(function(){
		clearInterval(timeId);
		$('.scroll-bar').css('display','block');
	}).mouseleave(function(){
		timeId = setInterval(slider,30);
		$('.scroll-bar').css('display','none');
	});
});