
// function to scroll to html element
function scrollToId(id) {
    let elem = document.getElementById(id);
    let ypos = elem.getBoundingClientRect().top;
    scrollTo({
        left: 0,
        top: ypos,
        behavior: "smooth"
    });

}

// scroll animation
let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active')
        } else {
            entry.target.classList.remove('active');
        }
    })
})

let animated_objects = document.querySelectorAll('.animated');
animated_objects.forEach((item) => {
    observer.observe(item);
})