window.addEventListener('load', () => {
    const removeMockup = (event) => {
        const mask = event.target.previousElementSibling
        mask.addEventListener('transitionend', mask.remove)
        mask.classList.remove('loading')
        mask.classList.add('fade-out')
    }

    const loadImage = (img) => {
        img.previousElementSibling.classList.add('loading')
        img.setAttribute('src', img.dataset.src)
        img.removeAttribute('data-src')
        img.addEventListener('load', removeMockup)
    }

    const onEnterView = (entries, observer) => {
        for (let entry of entries) {
            if (entry.isIntersecting) {
                loadImage(entry.target)
                observer.unobserve(entry.target)
            }
        }
    }

    const watcher = new IntersectionObserver(onEnterView)
    const lazyImages = document.querySelectorAll('.img.lazy')
    for (let image of lazyImages) {
        watcher.observe(image)
    }
})
