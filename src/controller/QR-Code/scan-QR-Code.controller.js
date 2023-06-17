const { decryptData } = require('../../security/index');

// Handle the scanned QR code and retrieve the encrypted data
exports.scanQRCode = async (req, res) => {
    try {
        const scannedData = req.body.scannedData;
        const decryptedData = decryptData(scannedData);
        return res.json(decryptedData);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
