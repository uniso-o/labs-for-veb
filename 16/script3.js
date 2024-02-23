window.onload = function() {
    document.getElementById('submitQuiz').addEventListener('click', function() {
      let userAnswer1 = document.querySelector('input[name="question1"]:checked').value;
      let userAnswer2 = Array.from(document.querySelectorAll('input[name="question2"]:checked')).map(input => input.value);
      let userAnswer3 = document.querySelector('input[name="question3"]').value.trim();

      let correctAnswer1 = 'a';
      let correctAnswer2 = ['a', 'd'];
      let correctAnswer3 = "кая";

      let incorrectAnswers = [];

      if (userAnswer1 !== correctAnswer1) {
        incorrectAnswers.push('Кто является главным героем сказки «Золушка»?');
      }

      if (!correctAnswer2.every(answer => userAnswer2.includes(answer))) {
        incorrectAnswers.push('Кто из перечисленных персонажей является главным героем сказки "Колобок"?');
      }

      if (userAnswer3.trim() !== correctAnswer3) {
        incorrectAnswers.push('Кого украла Снежная королева в сказке Андерсена?');
      }

      if (incorrectAnswers.length > 0) {
        document.getElementById('result').textContent = `Неверные ответы на вопросы: ${incorrectAnswers.join(', ')}`;
      } else {
        document.getElementById('result').textContent = 'Поздравляем! Все ответы верные!';
      }
    });
  }