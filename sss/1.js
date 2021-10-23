 // if (!localStorage.getItem("task1")) localStorage.setItem('task1', 1)

  //   const currentStep = localStorage.getItem("task1")

  //   document.getElementById("bodyWrapper").insertAdjacentHTML('afterbegin',
  //     `<div class="task_${currentStep}">
  //     ${currentStep === '3' ? '<div class="block__text">Какой чудесный<br>осенний денёк</div>' : ''}
  //     ${currentStep === '4' ? '<div class="block__text">Что же мне надеть?<br> Люди одеты так по-разному</div>' : ''}
  //     ${currentStep === '5' ? '<div class="block__text">Посмотрю погоду<br> и выберу подходящий наряд<br>там же есть ощущается как</div>' : ''}
  //     ${currentStep !== '5' ? currentStep !== '6' && `<button class="next__button" onclick="localStorage.setItem('task1', ${+currentStep + 1}); location.reload();">
  //       Дальше
  //     </button>` : ''}
  //     ${currentStep === '5' ? `<button class="go__button" onclick="localStorage.setItem('task1', ${+currentStep + 1}); location.reload();">
  //       Поехали
  //     </button>` : ''}
  //     ${currentStep === '6' ? '<div class="block__text">Открой перовое задание<br> в VScode. После его выполнения <br>игра продолжится</div>' : ''}
  //     <a class="next__task" id="nextTask" href="../fitness/index.html">
  //       Перейти к следующему заданию
  //     </a>
  //   </div>`
  //   )
