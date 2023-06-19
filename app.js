
new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: window.innerWidth <= 1000 ? false : true,
    navigationPosition: 'right',
    onLeave: (origin, destination, direction) => {
        const section = destination.item
        const tl = new TimelineMax({ delay: 0.7 })
        console.log(destination.index)

        const fadeIn = section.getElementsByClassName('slideInBottom')
        if (fadeIn.length !== 0)
            tl.fromTo(fadeIn, 0.7, { y: 25, opacity: 0, }, { y: 0, opacity: 1, })

        if (destination.index === 1) {
            document.getElementById('s2-backgroundvid').play()
        }

        if (destination.index === 4) {
            let title = section.querySelector('h1')
            tl.fromTo(title, 0.7, { opacity: 0, y: 25, }, { opacity: 1, y: 0, })

            let pricingOptions = section.getElementsByClassName('option')
            tl.fromTo(pricingOptions, 0.5, { opacity: 0, }, { opacity: 1, })
        }

    }
})

// switch payment options to slides on mobile
if (window.innerWidth <= 1000) {
    document.querySelectorAll('.option-wrap').forEach((option) => {
        option.classList.add("slide")
    })
}

// payment selection
function payOptionClick(e) {
    window.location.href = (`./pages/order.html`)
}

function oldWatchHolder() {
    window.open('mailto:watchholderca@gmail.com?subject=Old Watch Holder Purchase Request')
}

// fix safari video autoplay
const bgvideo = document.querySelector('video')
bgvideo.muted = true;
bgvideo.play()

// remove watermark (legal)
document.getElementsByClassName('fp-watermark').item(0).remove()