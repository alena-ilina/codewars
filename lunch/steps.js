function task3RunnerLogic() {
  const task3Total = 7
  const bugsCurrentStep = localStorage.getItem("task3")

  if (store.testsCount === store.successTestsCount && +bugsCurrentStep !== task3Total) {
    localStorage.setItem('task3', task3Total)
    location.reload()
    return
  }

  if (+bugsCurrentStep === task3Total && store.testsCount !== store.successTestsCount) {
    localStorage.setItem('task3', task3Total - 1)
    location.reload()
  }
}

(function () {
  if (!localStorage.getItem("task3")) localStorage.setItem('task3', 1)

  const bugsCurrentStep = localStorage.getItem("task3")

  const $bodyWrapperNode = document.getElementById("bodyWrapper");
  let content = ''
  let button = ''

  const nextButton = `<button class="button next__button _button_${bugsCurrentStep}" onclick="localStorage.setItem('task3', ${+bugsCurrentStep + 1}); location.reload();"> Вперед </button>`
  const goTaskButton = `<button class="button _go" onclick="localStorage.setItem('task3', ${+bugsCurrentStep + 1}); location.reload();">Поехали</button>`
  const nextTaskButton = `<a class="button _nextTask" id="nextTask" href="../stones/index.html" onclick"localStorage.clear()">Погнали!</a>`

  const step2Elements = '<div class="block__text">поработали<br>—<br>можно и поесть!</div>'
  const step3Elements = '<div class="block__text">интересно, сколько каллорий<br>я могу себе позволить?</div>'
  const step5Elements = '<div class="block__text">надо посчитать</div>'
  const step7Elements = '<div class="block__text">Готовы перейти<br>к следующему заданию?</div>'

  if (bugsCurrentStep === '2') { content = step2Elements; }
  if (bugsCurrentStep === '3') { content = step3Elements; }
  if (bugsCurrentStep === '5') { content = step5Elements; button = goTaskButton }
  if (bugsCurrentStep === '7') { button = nextTaskButton; content = step7Elements; }
  if (bugsCurrentStep !== '5' && bugsCurrentStep !== '6' && bugsCurrentStep !== '7') { button = nextButton }

  $bodyWrapperNode.insertAdjacentHTML('afterbegin',
    `<div class="task3 task_${bugsCurrentStep}">
      ${content}
      ${button}
    </div>`
  )
}())
