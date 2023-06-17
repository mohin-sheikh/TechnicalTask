const { Router } = require('express');
const router = Router();
const apiController = require('../controller/index');

module.exports = (app) => {
  // 1.1:
  router.get('/', apiController.QRCodeGoogleSearchController);
  router.get('/qr-code', apiController.QRCodeGoogleController);

  // 1.2:
  router.get('/generateQR', apiController.generateQRCode);
  router.post('/scanQR', apiController.scanQRCode);

  // 2. OCR:
  router.post('/upload', apiController.uploadFile);

  // 5. Language file
  router.get('/english', apiController.englishLanguageFile);
  router.get('/hindi', apiController.hindiLanguageFile);

  // 6. File Upload
  router.post('/file-upload', apiController.uploadFileUsingMulter);

  // API PATH
  app.use('/', router);
};