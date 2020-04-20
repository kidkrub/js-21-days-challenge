(()=> {
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

  const recogniton = new window.SpeechRecognition()
  const btnElem = document.querySelector('.control')

  function onClick() {
    const isPausing = btnElem.classList.contains('record')
    if(isPausing) {
      recogniton.start()
      btnElem.classList.remove('record')
      btnElem.classList.add('pause')
    } else {
      recogniton.stop()
      btnElem.classList.remove('pause')
      btnElem.classList.add('record')
    }
  }

  function onResult(event) {
    const textElem = document.querySelector('.text')
    const { transcript } = event.results[0][0]
    textElem.innerText += transcript
  }

  function onEnd() {
    const isRecoding = btnElem.classList.contains('pause')
    if (isRecoding) {
      recogniton.start()
    }
  }

  function run() {
    recogniton.lang = 'th-TH'
    recogniton.addEventListener('result', onResult)
    recogniton.addEventListener('end', onEnd)
    btnElem.addEventListener('click', onClick)
  }
  run()
})()