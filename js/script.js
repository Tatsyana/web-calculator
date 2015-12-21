$(function input_number(){
  $('.number').click(function(){
  
    var calcInput = $('.calc-input');
    var lastValue = calcInput.val(); 
    if (lastValue == '0') {
      lastValue = '';
    }
    calcInput.val(lastValue + $(this).val());

    
    
  });
  
    $('.clear').click(function(){
      $('.calc-input').val("0");  
  });
  
});