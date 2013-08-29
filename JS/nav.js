function show (){

	console.log($(this));
}



$(function() {

$(".explore").on(
{
    mouseenter: function() 
    {
    	var $this=$(this);
    	console.log($this);
        $('ul', this).addClass("show");
    },
    mouseleave: function()
    {
        var $this=$(this);
        $(".explore").next.removeClass('show');
    }



});


$("#video").fitVids();




});