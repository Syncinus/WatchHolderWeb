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