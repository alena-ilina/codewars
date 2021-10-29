function setTimer() {
  setInterval(() => {
    let time = localStorage.getItem('timer')
    if (+time >= 120) {
      window.location.href = '/finish/index.html'
    }
    time = +time + 1
    localStorage.setItem('timer', time)
  }, 1000 * 3600);
}