function task7RunnerLogic() {
  const task7Total = 9
  const bugsCurrentStep = localStorage.getItem("task7")

  if (store.testsCount === store.successTestsCount && +bugsCurrentStep !== task7Total) {
    localStorage.setItem('task7', task7Total)
    location.reload()
    return
  }

  if (+bugsCurrentStep === task7Total && store.testsCount !== store.successTestsCount) {
    localStorage.setItem('task7', task7Total - 1)
    location.reload()
  }
}

(function () {
  const currentTask = 'task7'
  if (!localStorage.getItem(currentTask)) localStorage.setItem(currentTask, 1)

  const bugsCurrentStep = localStorage.getItem(currentTask)

  const $bodyWrapperNode = document.getElementById("bodyWrapper");

  let content = ''
  let button = ''

  const nextButton = `<button class="button next__button _button_${bugsCurrentStep}" onclick="localStorage.setItem('task7', ${+bugsCurrentStep + 1}); location.reload();"> Вперед </button>`
  const goTaskButton = `<button class="button _go" onclick="localStorage.setItem('task7', ${+bugsCurrentStep + 1}); location.reload();">Посчитаем!</button>`

  const step2Elements = '<div class="block__text">ух, отлично <br>отпраздновали, пицца <br>была шикарна! </div>'
  const step3Elements = '<div class="block__text">что ж, пора отработать<br>свой плотный обед<br>и ужин!</div>'
  const step5Elements = '<div class="block__text">но надо<br>не переусердствовать<br>с нагрузкой</div>'
  const step6Elements = '<div class="block__text">какие упражнения<br>помогут мне отработать<br>пиццу? а обед?<br> а завтрак?</div>'
  const step7Elements = '<div class="block__text">кажется, без подсчетов<br>не обойтись</div>'
  const step8Elements = '<div class="block__text">Выполни<br>задание в<br>папке fitness</div>'

  if (bugsCurrentStep === '2') { content = step2Elements; }
  if (bugsCurrentStep === '3') { content = step3Elements; }
  if (bugsCurrentStep === '5') { content = step5Elements; }
  if (bugsCurrentStep === '6') { content = step6Elements; }
  if (bugsCurrentStep === '7') { content = step7Elements; button = goTaskButton }
  if (bugsCurrentStep === '8') { content = step8Elements; }
  if (bugsCurrentStep !== '7' && bugsCurrentStep !== '8' && bugsCurrentStep !== '9') { button = nextButton }

  $bodyWrapperNode.insertAdjacentHTML('afterbegin',
    `<div class="${currentTask} task_${bugsCurrentStep}">
      ${content}
      ${button}
    </div>`
  )
}())
