function task6RunnerLogic() {
  const task6Total = 11
  const bugsCurrentStep = localStorage.getItem("task6")

  if (store.testsCount === store.successTestsCount && +bugsCurrentStep !== task6Total) {
    localStorage.setItem('task6', task6Total)
    location.reload()
    return
  }

  if (+bugsCurrentStep === task6Total && store.testsCount !== store.successTestsCount) {
    localStorage.setItem('task6', task6Total - 1)
    location.reload()
  }
}

(function () {
  if (!localStorage.getItem("task6")) localStorage.setItem('task6', 1)

  const bugsCurrentStep = localStorage.getItem("task6")

  const $bodyWrapperNode = document.getElementById("bodyWrapper");

  let content = ''
  let button = ''

  const nextButton = `<button class="button next__button _button_${bugsCurrentStep}" onclick="localStorage.setItem('task6', ${+bugsCurrentStep + 1}); location.reload();"> Вперед </button>`
  const goTaskButton = `<button class="button _go" onclick="localStorage.setItem('task6', ${+bugsCurrentStep + 1}); location.reload();">Посчитаем!</button>`
  const nextTaskButton = `<a class="button _nextTask" id="nextTask" href="../7.fitness/index.html" onclick"localStorage.clear()"> еееее!!!!</a>`

  const step2Elements = '<div class="block__text">командировку оформил, <br> все шикарно! </div>'
  const step3Elements = '<div class="block__text">хотя, погодите...</div>'
  const step6Elements = '<div class="block__text">Совсем забыл! у нашего<br> тимлида день рождения!</div>'
  const step7Elements = '<div class="block__text">И я обещал помочь ему<br>с заказом пиццы на всех</div>'
  const step9Elements = '<div class="block__text">сколько нужно пицц<br>на команду?</div>'
  const step10Elements = '<div class="block__text">Выполни<br>задание в<br>папке pizza</div>'
  const step11Elements = '<div class="block__text">впереди последнее задание,<br>готов показать класс?</div>'

  if (bugsCurrentStep === '2') { content = step2Elements; }
  if (bugsCurrentStep === '3') { content = step3Elements; }
  if (bugsCurrentStep === '6') { content = step6Elements; }
  if (bugsCurrentStep === '7') { content = step7Elements; }
  if (bugsCurrentStep === '9') { content = step9Elements; button = goTaskButton }
  if (bugsCurrentStep === '10') { content = step10Elements; }
  if (bugsCurrentStep === '11') { button = nextTaskButton; content = step11Elements; }
  if (bugsCurrentStep !== '9' && bugsCurrentStep !== '10' && bugsCurrentStep !== '11') { button = nextButton }

  $bodyWrapperNode.insertAdjacentHTML('afterbegin',
    `<div class="task6 task_${bugsCurrentStep}">
      ${content}
      ${button}
    </div>`
  )
}())
