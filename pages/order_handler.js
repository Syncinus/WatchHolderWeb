
// data fields
email_display = document.getElementById('email')
name_display = document.getElementById('name')
price_display = document.getElementById('price')
colour_display = document.getElementById('colour')

// get data from form and append to displays
const url = new URL(document.location.href)

const email = url.searchParams.get("email");
const uname = url.searchParams.get("fname") + ' ' + url.searchParams.get("lname")
const price = url.searchParams.get("price")
const colour = url.searchParams.get("colour")

email_display.textContent = email_display.textContent + email
name_display.textContent = name_display.textContent + uname
price_display.textContent = price_display.textContent + '$' + price
colour_display.textContent = colour_display.textContent + colour

// craft email
const subject = `WATCHORDER EMAIL:${email} COL:${colour}`
const body = `${uname} has ordered a ${colour} watch holder for $${price}.\n Reply at ${email}`
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
