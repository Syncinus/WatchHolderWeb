// price params
const PRICE_MODEL_4 = 14.97
const PRICE_MODEL_5 = 19.97

const PRICE_BASE = PRICE_MODEL_5
const PRICE_COLOUR = 3.00
const PRICE_CAN_SHIPPING = 3.00
const PRICE_INT_SHIPPING = 8.00
const PRICE_WARRANTY = 0.00
const PRICE_SELF_ASSEMBLY = -5.00


const url = new URL(window.location.href);
const index = Number(url.searchParams.get("index"))
if (index === null) {
    document.location.replace('./invalid_order.html')
}

// handle form
const form_element = document.getElementById('forms')

// colour options
const colour_check = document.getElementById('colourenabled')
const colour_selector = document.getElementById('colour')
const colour_label = document.getElementById('colourlabel')
function updateColour() {
    if (colour_check.checked) {
        colour_label.classList.remove('hidden')
        colour_selector.required = true
        colour_selector.classList.remove('hidden')
    } else {
        colour_label.classList.add('hidden')
        colour_selector.required = false;
        colour_selector.classList.add('hidden')

    }
}
updateColour()
colour_check.addEventListener("click", () => {
    updateColour()
    updatePrice()
})

// address options
const cccmember = document.getElementById('cccmember')
const addresslabel = document.getElementById('addresslabel')
const address = document.getElementById('address')
const iscanadian = document.getElementById('canada')
const iscanadianlabel = document.getElementById('canadalabel')
iscanadian.addEventListener("click", () => { updatePrice() })
function updateAddress() {
    if (!cccmember.checked) {
        address.classList.remove('hidden')
        address.required = true
        addresslabel.classList.remove('hidden')
        iscanadian.classList.remove('hidden')
        iscanadianlabel.classList.remove('hidden')

    } else {
        address.classList.add('hidden')
        address.required = false
        addresslabel.classList.add('hidden')
        iscanadian.classList.add('hidden')
        iscanadianlabel.classList.add('hidden')

    }
}
updateAddress()
cccmember.addEventListener("click", () => {
    updateAddress()
    updatePrice()
})

// update price display
const price_display = document.getElementById('pricedisplay')
let price = PRICE_BASE
const modelinput = document.getElementById('model')
const priceinput = document.getElementById('price')
const warranty = document.getElementById('warranty')
warranty.addEventListener('click', updatePrice)
modelinput.addEventListener('click', updatePrice)
function updatePrice() {
    price = PRICE_BASE
    if (modelinput.value == 'wh5')
        price = PRICE_MODEL_5
    if (modelinput.value == 'wh4')
        price = PRICE_MODEL_4

    if (!cccmember.checked) {
        if (iscanadian.checked)
            price += PRICE_CAN_SHIPPING
        else
            price += PRICE_INT_SHIPPING
    }
    if (colour_check.checked)
        price += PRICE_COLOUR
    if (warranty.checked)
        price += PRICE_WARRANTY
    price_display.innerText = '$' + price
    priceinput.value = price
}
updatePrice()

// form submit handler
forms.addEventListener('submit', (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const data = Object.fromEntries(form.entries())
    document.location.href = (`./order_complete.html?form=${JSON.stringify(data)}`)
})