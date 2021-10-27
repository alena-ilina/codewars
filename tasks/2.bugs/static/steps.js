function task2RunnerLogic() {
  const task2Total = 10
  const bugsCurrentStep = localStorage.getItem("task2")

  if (store.testsCount === store.successTestsCount && +bugsCurrentStep !== task2Total) {
    localStorage.setItem('task2', task2Total)
    location.reload()
    return
  }

  if (+bugsCurrentStep === task2Total && store.testsCount !== store.successTestsCount) {
    localStorage.setItem('task2', task2Total - 1)
    location.reload()
  }
}

(function () {
  if (!localStorage.getItem("task2")) localStorage.setItem('task2', 1)

  const bugsCurrentStep = localStorage.getItem("task2")

  const $bodyWrapperNode = document.getElementById("bodyWrapper");

  let content = ''
  let button = ''

  const nextButton = `<button class="button next__button _button_${bugsCurrentStep}" onclick="localStorage.setItem('task2', ${+bugsCurrentStep + 1}); location.reload();"> Вперед </button>`
  const goTaskButton = `<button class="button _go" onclick="localStorage.setItem('task2', ${+bugsCurrentStep + 1}); location.reload();">Поехали</button>`
  const nextTaskButton = `<a class="button _nextTask" id="nextTask" href="../lunch/index.html" onclick"localStorage.clear()"> А то!</a>`

  const step2Elements = '<div class="block__text">ухх, как же я замерз<br>нужен горячий кофе<br>и пофиксить пару багов<br>это меня разогреет!</div>'
  const step4Elements = '<div class="block__text">хмммм...</div>'
  const step6Elements = '<div class="block__text">Эх, если бы только<br> люди умели писать<br>код без багов</div>'
  const step8Elements = '<div class="block__text">Существует ли способ<br> заранее оценить, сколько<br>багов допустят<br>разработчики?</div>'
  const step9Elements = '<div class="block__text">Выполни<br>задание в<br>папке bugs</div>'
  const step10Elements = '<div class="block__text">Готов перейти<br>к следующему заданию?</div>'

  if (bugsCurrentStep === '2') { content = step2Elements; }
  if (bugsCurrentStep === '4') { content = step4Elements; }
  if (bugsCurrentStep === '6') { content = step6Elements; }
  if (bugsCurrentStep === '8') { content = step8Elements; button = goTaskButton }
  if (bugsCurrentStep === '9') { content = step9Elements }
  if (bugsCurrentStep === '10') { button = nextTaskButton; content = step10Elements; }
  if (bugsCurrentStep !== 'intro' && bugsCurrentStep !== '8' && bugsCurrentStep !== '9' && bugsCurrentStep !== '10') { button = nextButton }

  $bodyWrapperNode.insertAdjacentHTML('afterbegin',
    `<div class="task2 task_${bugsCurrentStep}">
      ${content}
      ${button}
    </div>`
  )
}())
