
// data fields
email_display = document.getElementById('email')
name_display = document.getElementById('name')
price_display = document.getElementById('price')
colour_display = document.getElementById('colour')
address_display = document.getElementById('address')

// get data from form and append to displays
const url = new URL(document.location.href)

function updateDisplayElement(element, value) {
    element.innerText = element.innerText.concat(' ').concat(value)
}

const formObj = JSON.parse(url.searchParams.get("form"))
console.log(formObj)

updateDisplayElement(email_display, formObj.email)
updateDisplayElement(name_display, formObj.name)
updateDisplayElement(price_display, formObj.price)
updateDisplayElement(colour_display, formObj.colour)
updateDisplayElement(address_display, formObj.address)

if (formObj.colourenabled == undefined) {
    colour_display.remove()
}

if (formObj.cccmember == 'on') {
    address_display.remove()
}

if (formObj.selfassembly == undefined) document.getElementById('selfassembly').remove()

// craft email
const subject = `WATCHORDER EMAIL:${formObj.email} NAME: ${formObj.name}`
const body = JSON.stringify(formObj, null, 4)
const recipient = 'watchholderca@gmail.com'


const finalDialog = document.getElementById('notifyDialog')
const showButton = document.getElementById('showButton')
const hideButton = document.getElementById('hideButton')

showButton.addEventListener('click', () => {
    finalDialog.showModal()

    // send email
    window.open(`mailto:${recipient}?subject=${subject}&body=${body}`, 'meail');
})
hideButton.addEventListener('click', () => {
    finalDialog.close()
})
