(() => {
    const konamicode =[
        'ArrowUp',
        'ArrowUp',
        'ArrowDown',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'ArrowLeft',
        'ArrowRight',
        'b',
        'a'
    ]
    index = 0
    function onKeydown(event) {
        event.key === konamicode[index] ? index++ : index = 0
        if (index === konamicode.length) {
            const message = document.getElementById('message')
            message.innerHTML = 'Congratulation!<br/>You enter right code'
            message.style.color = '#ffffff'
            document.getElementById('background').classList.add('rainbow')
        }
    }

    function run() {
        document.addEventListener('keydown', onKeydown)
    }
    run()
})()