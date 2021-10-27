function task4RunnerLogic() {
  const task4Total = 5
  const bugsCurrentStep = localStorage.getItem("task4")

  if (store.testsCount === store.successTestsCount && +bugsCurrentStep !== task4Total) {
    localStorage.setItem('task4', task4Total)
    location.reload()
    return
  }

  if (+bugsCurrentStep === task4Total && store.testsCount !== store.successTestsCount) {
    localStorage.setItem('task4', task4Total - 1)
    location.reload()
  }
}

(function () {
  if (!localStorage.getItem("task4")) localStorage.setItem('task4', 1)

  const bugsCurrentStep = localStorage.getItem("task4")

  const $bodyWrapperNode = document.getElementById("bodyWrapper");
  let content = ''
  let button = ''

  const nextButton = `<button class="button next__button _button_${bugsCurrentStep}" onclick="localStorage.setItem('task4', ${+bugsCurrentStep + 1}); location.reload();"> Вперед </button>`
  const goTaskButton = `<button class="button _go" onclick="localStorage.setItem('task4', ${+bugsCurrentStep + 1}); location.reload();">Поехали</button>`
  const nextTaskButton = `<a class="button _nextTask" id="nextTask" href="../5.tickets/index.html" onclick"localStorage.clear()">Заводи шарманку!</a>`

  const step2Elements = '<div class="block__text">после обеда нужно<br>немного расслабиться</div>'
  const step3Elements = '<div class="block__text">поиграю с коллегами<br>в камень, ножницы,<br>бумага, ящерица, спок!</div>'
  const step4Elements = '<div class="block__text">Выполни<br>задание в<br>папке stones</div>'
  const step5Elements = '<div class="block__text">Готов перейти<br>к следующему заданию?</div>'

  if (bugsCurrentStep === '2') { content = step2Elements; }
  if (bugsCurrentStep === '3') { content = step3Elements; button = goTaskButton }
  if (bugsCurrentStep === '4') { content = step4Elements; }
  if (bugsCurrentStep === '5') { button = nextTaskButton; content = step5Elements; }
  if (bugsCurrentStep !== '3' && bugsCurrentStep !== '4' && bugsCurrentStep !== '5') { button = nextButton }

  $bodyWrapperNode.insertAdjacentHTML('afterbegin',
    `<div class="task4 task_${bugsCurrentStep}">
      ${content}
      ${button}
    </div>`
  )
}())
