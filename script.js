
var resultContainer = document.getElementById('qr-content');
var lastResult, countResults = 0;

function diplayMessage(decodedText, decodedResult) {
    console.log(`Scan result ${decodedText}`, decodedResult);
    resultContainer.textContent = decodedText;
}

function onScanSuccess(decodedText, decodedResult) {
    if (decodedText !== lastResult) {
        ++countResults;
        lastResult = decodedText;
        // Handle on success condition with the decoded message.
        diplayMessage(decodedText, decodedResult)
    }
}

var html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess);