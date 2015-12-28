$(function input_number(){
  // Срабатывает, если нажата кнопка с оператором.
  $('.operator').click(function(){ 
  
    var calcInput = $('.calc-input');                             // Строка для ввода.
    var lastValue = calcInput.val();                              // Сохраняем значение строки ввода.
    var lastChar = lastValue[lastValue.length-1];                 // Берем последний символ вводной строки.
    var operators = ['+', '-', '/', '*'];                         // Определяем массив операторов.
    if ($.inArray(lastChar, operators) != -1) {                   // Если последний символ - оператор.
      lastValue = lastValue.substring(0, lastValue.length - 1);   // Удаляем последний символ, сохраняется только числовое значение.
    }

    // Проверка если элемент не первый (не допускает +5, -6).
    if (lastValue != '0') {
      calcInput.val(lastValue + $(this).val());                   // this - элемент, по которому клик, Добавление к текущему значению кликнутой кнопки.
    }
    
  });
  
   // Срабатывает, если нажата кнопка с цифрой.
  $('.number').click(function(){
                                                                   
    var calcInput = $('.calc-input');                             // Строка для ввода.
    var lastValue = calcInput.val();                              // Сохраняем значение строки ввода.
    
    // Проверка, для корректного отображения введенного значения без 0 спереди (пустая строка).
    if (lastValue == '0') {
      lastValue = '';
    }
    calcInput.val(lastValue + $(this).val());                     // this - элемент, по которому клик, Добавление к текущему значению кликнутой кнопки.  
  });
  
  
  
  // При нажатии на кнопку С.
  $('.clear').click(function(){                                 
    $('.calc-input').val("0");  
  });
  
  // При нажатии на = .
  $('.result').click(function(){
  
  
  });
  
});
