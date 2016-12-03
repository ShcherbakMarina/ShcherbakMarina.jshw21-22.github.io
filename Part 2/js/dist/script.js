'use strict';

$(function () {
  var test = {
    questions: [{
      'title': 'Что обозначает директива ‘use strict’?',
      'answers': ['Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 5.', 'Код данного скрипта будет обработан по строгим правилам стандарта HTML5.', 'Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 6.'],
      'check': 0
    }, {
      'title': 'К какому участку скрипта применяется строгие правила ‘use strict’?',
      'answers': ['Строгие правила работают между директивами ‘use strict’ и ‘strict end’.', 'Либо во всем скрипте, либо в отдельной функции.', 'Во всем скрипте.'],
      'check': 1
    }, {
      'title': 'Для чего используется конструкция try-catch в javascript?',
      'answers': ['Для генерирования ошибок.', 'В строгом режиме весь код необходимо оборачивать в try-catch.', 'Для обработки возможных ошибок'],
      'check': 2
    }]
  };

  localStorage.setItem('test', JSON.stringify(test));

  var parsedTest = JSON.parse(localStorage.getItem('test'));

  var html = $('#test').html();

  var content = tmpl(html, parsedTest);

  $('body').append(content);

  var answ = new Array();
  var checkArr = new Array();

  for (var i = 0; i < parsedTest.questions.length; i++) {
    checkArr.push(parsedTest.questions[i].check);
  }

  $('#subButton').on('click', function () {
    saveAnswers();
    verifyResult();
    delCheck();
  });

  function saveAnswers() {
    $('input:checkbox:checked').each(function () {
      answ.push($(this).val());
    });
  }

  function verifyResult() {
    if (answ.toString() == checkArr.toString()) {
      $('.modal-body p').text("Тест пройден успешно");
    } else {
      $('.modal-body p').text("Тест не пройден");
    }
  }

  function delCheck() {
    $('input:checkbox').each(function () {
      if (this.checked) {
        this.checked = !this.checked;
      }
    });
  }
});
