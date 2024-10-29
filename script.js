function generateQRCode() {
    const textInput = document.getElementById("textInput").value;
    const qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = ""; // Clear previous QR code

    if (textInput) {
        const qrCode = new QRCode(qrcodeContainer, {
            text: textInput,
            width: 200,
            height: 200,
        });
    } else {
        alert("Please enter a valid URL or text.");
    }
}

function downloadQRCode() {
    const qrcode = document.getElementById("qrcode").querySelector("img");
    if (qrcode) {
        const link = document.createElement('a');
        link.href = qrcode.src;
        link.download = 'qrcode.png';
        link.click();
    } else {
        alert("Generate a QR code first before downloading.");
    }
}
