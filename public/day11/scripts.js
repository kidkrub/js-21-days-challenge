(() => {
    function onScroll() {
        const sectionElems = document.querySelectorAll('section')

        sectionElems.forEach(sectionElem => {
            const imgElem = sectionElem.querySelector('img')
            const textElem = sectionElem.querySelector('.text')

            const scrollPosition = window.pageYOffset
            const revealPosition = imgElem.offsetTop + imgElem.offsetHeight / 10
            if (scrollPosition >= revealPosition) {
                textElem.classList.add('reveal')
             } else {
                textElem.classList.remove('reveal')
             }
        })
    }

    function run() {
        document.addEventListener('scroll', onScroll)
    }
    run()
})()