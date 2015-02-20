// ==UserScript==
// @name       HKTV Mall Stock Marking
// @namespace  https://github.com/benhk2005/HKTVMallScript
// @version    0.1
// @description  enter something useful
// @match      http://www.hktvmall.com/hktv/zh/search*
// @match		http://www.hktvmall.com/hktv/zh/main/search*
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

$('.product-grid-small').each(function(){ 
    if($(this).find('button.outOfStock').size() > 0){
        //$(this).closest('.product-grid-small').css('background', 'black');
        $(this).closest('.product-grid-small').append(noStock.clone());
        $(this).closest('.product-grid-small').css('opacity', '0.3');
    }
});