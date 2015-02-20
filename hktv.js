// ==UserScript==
// @name       HKTV Mall Stock Marking
// @namespace  https://github.com/benhk2005/HKTVMallScript
// @version    0.2
// @description  enter something useful
// @match      http://www.hktvmall.com/hktv/zh/search*
// @match		http://www.hktvmall.com/hktv/zh/main/search*
// @match      http://www.hktvmall.com/hktv/zh/main/*
// @copyright  2012+, You
// ==/UserScript==
var noStock = $("<div>").text("缺貨").css(
    {
        'backgroundColor':'red',
        'color':'white',
        'display':'inline-block',
        'position':'absolute',
        'top':'0px',
        'left':'0px',
        'padding':'10px'
    }
);

stockCheck();
function stockCheck(){
    $('.product-grid-small:not(".stockchecked"), .product-grid-big:not(".stockchecked")').each(function(){ 
        $(this).addClass('stockchecked');
        if($(this).find('button.outOfStock').size() > 0){
            $(this).append(noStock.clone());
            $(this).css('opacity', '0.3');
        }
    });
}

$(document).ajaxComplete(function(){
   	stockCheck(); 
});
