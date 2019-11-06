function runnerLogic() {
  function calc(progressBarWidth) {
    const $catNode = document.querySelector('.cat');
    let k = 0;

    if (store.testsCount !== store.successTestsCount) {
      k = $catNode.offsetWidth / 50 + store.successTestsCount * 4;
    } else {
      k = 100;
    }

    if (store.successTestsCount === 0) {
      k = 0;
    }

    return progressBarWidth / store.testsCount * store.successTestsCount - k;
  }

  const $catNode = document.querySelector('.cat');
  const timeout = 200 * store.successTestsCount;
  $catNode.style.transition = `transform ${timeout}ms ease-out .3s, background .5s`

  // Просто глобальный setTimeout, чтобы тесты не прям сразу запускались
  setTimeout(() => {
    const $progressBarWrapper = document.querySelector('.progressBar__wrapper');
    const progressBarWidth = $progressBarWrapper.offsetWidth;

    // Меняем счетчик анимировано
    let testIndex = 0;
    document.querySelector('#successTestsCount').innerHTML = testIndex;

    if (store.successTestsCount > 0) {
      let intervalId = setInterval(() => {
        testIndex += 1;
        document.querySelector('#successTestsCount').innerHTML = testIndex;

        if (testIndex === store.successTestsCount) {
          clearInterval(intervalId);
        }
      }, timeout / store.successTestsCount)
    }


    $catNode.style.transform = `translateX(${calc(progressBarWidth)}px)`;
    $catNode.classList.remove('_stay');
    $catNode.classList.remove('_sad');
    $catNode.classList.add('_walking');

    setTimeout(() => {
      $catNode.classList.remove('_walking');

      if (store.testsCount === store.successTestsCount) {
        $catNode.classList.add('_finish');
      } else {
        $catNode.classList.add('_sad');
      }
    }, timeout);

    setTimeout(() => {
      if (store.testsCount === store.successTestsCount) {
        $progressBarWrapper.classList.add('_finish');
      }
    }, timeout - 500)

  }, 500)
}