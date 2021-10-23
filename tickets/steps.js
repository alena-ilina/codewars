function task5RunnerLogic() {
  const task5Total = 13
  const bugsCurrentStep = localStorage.getItem("task5")

  if (store.testsCount === store.successTestsCount && +bugsCurrentStep !== task5Total) {
    localStorage.setItem('task5', task5Total)
    location.reload()
    return
  }

  if (+bugsCurrentStep === task5Total && store.testsCount !== store.successTestsCount) {
    localStorage.setItem('task5', task5Total - 1)
    location.reload()
  }
}

(function () {
  if (!localStorage.getItem("task5")) localStorage.setItem('task5', 1)

  const bugsCurrentStep = localStorage.getItem("task5")

  const $bodyWrapperNode = document.getElementById("bodyWrapper");

  let content = ''
  let button = ''

  const nextButton = `<button class="button next__button _button_${bugsCurrentStep}" onclick="localStorage.setItem('task5', ${+bugsCurrentStep + 1}); location.reload();"> Вперед </button>`
  const goTaskButton = `<button class="button _go" onclick="localStorage.setItem('task5', ${+bugsCurrentStep + 1}); location.reload();">Посчитаем!</button>`
  const nextTaskButton = `<a class="button _nextTask" id="nextTask" href="../pizza/index.html" onclick"localStorage.clear()"> Ещё бы!</a>`

  const step2Elements = '<div class="block__text">продолжим работу!</div>'
  const step6Elements = '<div class="block__text">точно! командировка!<br> я совсем о ней забыл</div>'
  const step9Elements = '<div class="block__text">на улице уже неделю<br> бушует гроза...</div>'
  const step10Elements = '<div class="block__text">интересно, а как это<br>влияет на стоимость<br>билетов?</div>'
  const step11Elements = '<div class="block__text">а что еще влияет?<br>и на сколько дороже<br>может стать командировка?</div>'
  const step13Elements = '<div class="block__text">готовы перейти<br>к следующему заданию?</div>'

  if (bugsCurrentStep === '2') { content = step2Elements; }
  if (bugsCurrentStep === '6') { content = step6Elements; }
  if (bugsCurrentStep === '9') { content = step9Elements; }
  if (bugsCurrentStep === '10') { content = step10Elements; }
  if (bugsCurrentStep === '11') { content = step11Elements; button = goTaskButton }
  if (bugsCurrentStep === '13') { button = nextTaskButton; content = step13Elements; }
  if (bugsCurrentStep !== '11' && bugsCurrentStep !== '12' && bugsCurrentStep !== '13') { button = nextButton }

  $bodyWrapperNode.insertAdjacentHTML('afterbegin',
    `<div class="task5 task_${bugsCurrentStep}">
      ${content}
      ${button}
    </div>`
  )
}())
