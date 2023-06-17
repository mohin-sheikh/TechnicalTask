const QRCode = require('qrcode');
const { encryptData } = require('../../security/index');
const { status } = require("../../utils/utils");
const { getResponseStructure } = require("../../constants/response.structure");

// Create static personal information data
const personalData = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
};
// Encrypt the personal data and generate the QR code
exports.generateQRCode = async (req, res) => {
    try {
        const encryptedData = encryptData(personalData);
        const qrData = JSON.stringify({encrypted_str: encryptedData});

        await QRCode.toDataURL(qrData, (err, url) => {
            if (err) {
                res.send('Error generating QR code');
            } else {
                res.send(`
        <html>
            <body>
            <img src="${url}" alt="QR Code" />
            </body>
        </html>`);
            }
        });
    } catch (error) {
        return res
            .status(status.success)
            .send(getResponseStructure(status.internalServerError, error.message.toString()));
    }
};