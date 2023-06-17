const generateQRCodeController = require('./QR-Code/QR-Code.controller');
const scanQRCodeController = require('./QR-Code/scan-QR-Code.controller');
const QRCodeGoogleController = require('./QR-Code/google-QR-Code.controller');
const uploadFileController = require('./ocr/upload-file.controller');
const englishLanguageFileController = require('./language/read-englishFile.controller');
const hindiLanguageFileController = require('./language/read.hindiFile.controller');
const uploadFileUsingMulterController = require('./file-upload/file-upload.controller');

module.exports = {
    generateQRCode: generateQRCodeController.generateQRCode,
    scanQRCode: scanQRCodeController.scanQRCode,
    QRCodeGoogleSearchController: QRCodeGoogleController.generateQR,
    QRCodeGoogleController: QRCodeGoogleController.generateQRCodeGoogle.apply,
    uploadFile: uploadFileController.uploadFile,
    englishLanguageFile: englishLanguageFileController.readEnglishFile,
    hindiLanguageFile: hindiLanguageFileController.readHindiFile,
    uploadFileUsingMulter: uploadFileUsingMulterController.uploadFile,
};