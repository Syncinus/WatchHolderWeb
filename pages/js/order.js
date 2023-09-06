
// helper function to copy text
function removeExtraSpaces(inputString) {
    // Use a regular expression to replace multiple spaces with a single space
    return inputString.replace(/ +/g, ' ');
}


// copy a template to clipboard
function copyTemplate(button) {
    const templateDiv = button.parentElement;
    const textToCopy = templateDiv.querySelector('p').textContent;

    // Use the Clipboard API to copy text
    navigator.clipboard.writeText(removeExtraSpaces(textToCopy))
        .then(function () {
            // Success callback: the text was successfully copied
            button.innerText = 'Copied!';
            setTimeout(function () {
                button.innerText = 'Copy';
            }, 1500);
        })
        .catch(function (err) {
            // Error callback: handle any errors that may occur
            console.error('Unable to copy text: ', err);
        });
}