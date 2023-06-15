
new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    navigationPosition: 'right',
    onLeave: (origin, destination, direction) => {
        const section = destination.item
        const tl = new TimelineMax({ delay: 0.7 })
        console.log(destination.index)

        const fadeIn = section.getElementsByClassName('slideInBottom')
        if (fadeIn.length !== 0)
            tl.fromTo(fadeIn, 0.7, { y: 25, opacity: 0, }, { y: 0, opacity: 100, })

        if (destination.index === 4) {
            let title = section.querySelector('h1')
            tl.fromTo(title, 0.8, { y: 25, opacity: 0, }, { y: 0, opacity: 100, })

            let pricingOptions = section.getElementsByClassName('option')
            tl.fromTo(pricingOptions, 1, { opacity: 0, }, { opacity: 100, })
        }

    }
})


// payment selection
function payOptionClick(index) {
    window.location.href = (`./pages/order.html?index=${index}`)
}