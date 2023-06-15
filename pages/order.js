const url = new URL(window.location.href);
const index = Number(url.searchParams.get("index"))
if (index === null) {
    document.location.replace('./invalid_order.html')
}

// set price
let price = 'PlaceHolder'

if (index == 0)
    price = 14.97
if (index == 1)
    price = 16.97
if (index == 2)
    price = 19.97

document.getElementById('price').value = price

// hide colour options for cheap plan
if (index === 0) {
    document.getElementById('colour').classList.add("hidden");
    document.getElementById('colourlabel').classList.add('hidden');
}