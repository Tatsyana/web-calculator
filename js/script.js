$(function input_number(){
  $('.operator').click(function(){
  
    var calcInput = $('.calc-input');
    var lastValue = calcInput.val(); 
    var lastChar = lastValue[lastValue.length-1];
    var operators = ['+', '-', '/', '*'];
    if ($.inArray(lastChar, operators) != -1) {
      lastValue = lastValue.substring(0, lastValue.length - 1);
    }

    if (lastValue != '0') {
      calcInput.val(lastValue + $(this).val());
    }
    
  });
  
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
