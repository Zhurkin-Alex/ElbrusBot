let askButton = document.getElementById('myButton')
// обращаемся к кнопке

// Задаем фунцию по нажатию на кнопку
askButton.addEventListener('click', function(){

 let text = document.getElementById('question').value.toLowerCase()
// обратились к инпуту

  let qustion=
  document.createElement('p')
// создали пораграф

  qustion.innerText = text
  // задаем текстовое содержимое узла
  let answerSection = document.getElementById('answer')
  // обращаемся к answer

  answerSection.appendChild(qustion)
  // присваиваем

  // ответ бота
  let botAnswer = document.createElement('div')

  answerSection.appendChild(botAnswer)

  // switch (text){
  //   case 'elbrus': botAnswer.innerText = 'Go learn';
  //   break;
  //   case 'js': botAnswer.innerText = 'true school';
  //   break;
  //   case 'school': botAnswer.innerText = 'cool school';
  //   break;
  //   default :
  //    botAnswer.innerText = 'ты кто?';
  //   break;
  //  }
if(text.includes('elbrus')){
botAnswer.innerText ='Go learn'
}
else if(text.includes('js')){
  botAnswer.innerText = 'true school'
}
else{
    botAnswer.innerText = 'ты кто?'
}
})