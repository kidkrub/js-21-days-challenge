(() => {
  let page = 1
  const loaderElem = document.querySelector('.loader')

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function showLoader() {
    loaderElem.classList.add('visible')
  }

  function hideLoader() {
    loaderElem.classList.remove('visible')
  }

  async function displayImages() {
    showLoader()
    const result = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`)
    images = await result.json()
    const galleryElem = document.querySelector('.gallery')
    images.forEach(image => {
      const regex = /\w+:\/\/\w+\.\w+\/\w+\/\d+\//
      const url = image.download_url.match(regex)
      const width = random(480, 720)
      const height = random(480, 720)
      const imgElem = document.createElement('img')
      imgElem.src = `${url[0]}${width}/${height}`
      galleryElem.appendChild(imgElem)
    })
    page += 1
    hideLoader()
  }

  function onScroll() {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      displayImages()
    }
  }

  function run() {
    document.addEventListener('scroll', onScroll)
    displayImages()
  }

  run()
})()