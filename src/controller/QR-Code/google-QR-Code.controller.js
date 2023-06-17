const qr = require('qr-image');
const { status } = require("../../utils/utils");
const { getResponseStructure } = require("../../constants/response.structure");

exports.generateQR = async (req, res) => {
    try {
        res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Generate QR Code</title>
    </head>
    <body>
        <form action="/qr-code" method="GET">
        <input type="text" name="inputValue" placeholder="Enter value">
        <button type="submit">Generate QR Code</button>
        </form>
    </body>
    </html>
    `);
    } catch (error) {
        return res
            .status(status.success)
            .send(getResponseStructure(status.internalServerError, error.message.toString()));
    }
};

exports.generateQRCodeGoogle = async (req, res) => {
    try {
        const inputValue = req.body.inputValue;
        console.log(inputValue);
        const qrCode = qr.image(`https://www.google.com/search?q=${inputValue}`, { type: 'png' });
        res.type('png');
        qrCode.pipe(res);
    } catch (error) {
        return res
            .status(status.success)
            .send(getResponseStructure(status.internalServerError, error.message.toString()));
    }
};