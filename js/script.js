$(function input_number(){
 var operators = ['+', '-', '/', '*'];                         // Определяем массив операторов.
  // Срабатывает, если нажата кнопка с оператором.
  $('.operator').click(function(){ 
  
    var calcInput = $('.calc-input');                             // Строка для ввода.
    var lastValue = calcInput.val();                              // Сохраняем значение строки ввода.
    var lastChar = lastValue[lastValue.length - 2];                 // Берем последний символ вводной строки.
    if ($.inArray(lastChar, operators) != -1) {                   // Если последний символ - оператор.
      lastValue = lastValue.substring(0, lastValue.length - 3);   // Удаляем последний символ, сохраняется только числовое значение.
    }

    // Проверка если элемент не первый (не допускает +5, -6).
    if (lastValue != '0') {
      calcInput.val(lastValue + ' ' + $(this).val() + ' ');       // this - элемент, по которому клик, Добавление к текущему значению кликнутой кнопки.
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
  $('.result').click(function() {
    var calcInput = $('.calc-input');                             // Строка для ввода.
    var lastValue = calcInput.val();                              // Сохраняем значение строки ввода.
    var lastChar = lastValue[lastValue.length - 2];               // Берем последний символ вводной строки.
    if ($.inArray(lastChar, operators) != -1) {                   // Если последний символ - оператор.
      lastValue = lastValue.substring(0, lastValue.length - 3);   // Удаляем последний символ, сохраняется только числовое значение.
    }
  
    var mas = lastValue.split(' ');
    for (var i = 0; i < mas.length; i++) {
      if ($.inArray(mas[i], operators) != -1) {
        switch (mas[i]) {
          case '+':
            mas[i+1] = parseInt(mas[i-1]) + parseInt(mas[i+1]);
            break;
          case '-':
            mas[i+1] = parseInt(mas[i-1]) - parseInt(mas[i+1]);
            break;
          case '/':
            mas[i+1] = parseInt(mas[i-1]) / parseInt(mas[i+1]);
            break;
          case '*':
            mas[i+1] = parseInt(mas[i-1]) * parseInt(mas[i+1]);
            break;  
        }
      } 
    }
    calcInput.val(mas[mas.length - 1]);
  });
  
});
