function storeFile(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

//create button "copy to clipboard" 
function copyToClipboard(idbutton, idtext) {
    var cpyButton = document.getElementById(idbutton);
    cpyButton.addEventListener('click', function (e) {
        window.getSelection().removeAllRanges();
        var textToCopy = document.getElementById(idtext);
        var range = document.createRange();
        range.selectNode(textToCopy);
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
    });
}