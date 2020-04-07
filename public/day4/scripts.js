(() => {
    function run() {
        const bodyElem = document.querySelector('body')
        const eyeElems = document.querySelectorAll('.eye')

        function onMouseMove({ pageX, pageY}) {
            eyeElems.forEach((eyeElem) => {
                const {left, top } = eyeElem.getBoundingClientRect()
                const eyeCenterX = left + eyeElem.offsetWidth / 2
                const eyeCenterY = top + eyeElem.offsetHeight / 2
                const radian = Math.atan2(pageX - eyeCenterX, pageY - eyeCenterY)
                const angle = radian * 180 / Math.PI * -1
                eyeElem.style.transform = `rotate(${angle}deg)`
            })
        }

        function onTouchMove({changedTouches}) {
            const {pageX, pageY} = changedTouches[0]
            eyeElems.forEach((eyeElem) => {
                const {left, top } = eyeElem.getBoundingClientRect()
                const eyeCenterX = left + eyeElem.offsetWidth / 2
                const eyeCenterY = top + eyeElem.offsetHeight / 2
                const radian = Math.atan2(pageX - eyeCenterX, pageY - eyeCenterY)
                const angle = radian * 180 / Math.PI * -1
                eyeElem.style.transform = `rotate(${angle}deg)`
            })
        }
        bodyElem.addEventListener('mousemove', onMouseMove)
        bodyElem.addEventListener('touchmove', onTouchMove)
    }
    run()
})()