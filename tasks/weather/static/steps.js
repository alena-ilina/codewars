
function task1RunnerLogic() {
  const task1Total = 7
  const bugsCurrentStep = localStorage.getItem("task1")

  if (store.testsCount === store.successTestsCount && +bugsCurrentStep !== task1Total) {
    localStorage.setItem('task1', task1Total)
    location.reload()
    return
  }

  if (+bugsCurrentStep === task1Total && store.testsCount !== store.successTestsCount) {
    localStorage.setItem('task1', task1Total - 1)
    location.reload()
  }
}

function onStartButtonClick() {
  const bugsCurrentStep = localStorage.getItem('task1');

  localStorage.setItem('task1', 1);
  // localStorage.setItem('timer', 1);

  if (bugsCurrentStep === 'intro') location.reload();
}

(function () {
  if (!localStorage.getItem("task1")) localStorage.setItem('task1', 'intro')

  const bugsCurrentStep = localStorage.getItem("task1")

  const $bodyWrapperNode = document.getElementById("bodyWrapper");

  // if (bugsCurrentStep !== 'intro') {
  //   const timerId = setInterval(() => {
  //     let time = localStorage.getItem('timer')
  //     if (time === '120') {
  //       clearInterval(timerId)
  //       window.location.href = '/index.html'
  //     }
  //     time = +time + 1
  //     localStorage.setItem('timer', time)
  //   }, 1000);
  // }

  let content = ''
  let button = ''

  const nextButton = `<button class="button next__button _button_${bugsCurrentStep}" onclick="localStorage.setItem('task1', ${+bugsCurrentStep + 1}); location.reload();"> Вперед </button>`
  const goTaskButton = `<button class="button _go" onclick="localStorage.setItem('task1', ${+bugsCurrentStep + 1}); location.reload();">Поехали</button>`
  const nextTaskButton = `<a class="button _nextTask" id="nextTask" href="../bugs/index.html" onclick"localStorage.clear()"> Конечно!</a>`

  const startButton = `<button class="button _go" onclick="onStartButtonClick()">Поооогналии!!!</button>`
  const intro = `
  <div class="block__text">
  Привет! <br> В этой игре ты должен будешь починить тесты, чтобы дойти до конца!<br> Готов начать?
  </div>
  `
  const step3Elements = '<div class="block__text">Какой чудесный<br>осенний денёк!</div>'
  const step4Elements = '<div class="block__text">Что же мне надеть?<br>Люди одеты так по-разному</div>'
  const step5Elements = '<div class="block__text">Посмотрю погоду<br> и выберу подходящий наряд<br>там же есть "Ощущается как"</div>'
  const step6Elements = '<div class="block__text">Выполни<br>задание в<br>папке weather</div>'
  const step7Elements = '<div class="block__text">Готов перейти<br>к следующему заданию?</div>'

  if (bugsCurrentStep === 'intro') { content = intro; button = startButton }
  if (bugsCurrentStep === '3') { content = step3Elements; }
  if (bugsCurrentStep === '4') { content = step4Elements; }
  if (bugsCurrentStep === '5') { content = step5Elements; button = goTaskButton }
  if (bugsCurrentStep === '6') { content = step6Elements }
  if (bugsCurrentStep === '7') { button = nextTaskButton; content = step7Elements; }
  if (bugsCurrentStep !== 'intro' && bugsCurrentStep !== '5' && bugsCurrentStep !== '6' && bugsCurrentStep !== '7') { button = nextButton }

  $bodyWrapperNode.insertAdjacentHTML('afterbegin',
    `<div class="task1 task_${bugsCurrentStep}">
      ${content}
      ${button}
    </div>`
  )
}())
