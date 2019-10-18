var itemCount = 0;
var priceTotal = 0;


// Add Item to Cart
$('.add').click(function (){
  itemCount ++;

  $('#itemCount').text(itemCount).css('display', 'block');
  $(this).siblings().clone().appendTo('#cartItems').append('<button type="button" class="removeItem"><span class="glyphicon glyphicon-trash"> </span></button>');

}); 










