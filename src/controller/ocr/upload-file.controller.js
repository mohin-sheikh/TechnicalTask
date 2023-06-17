const Tesseract = require('tesseract.js');
const PORT = 3000;

// Handle the scanned QR code and retrieve the encrypted data
exports.uploadFile = async (req, res) => {
    const image = req.files.image;
    console.log(image);

    const imagePath = `uploads/${image.name}`; // Remove the dot and slash here

    // Save the image file
    image.mv(imagePath, async (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }

        // Send a response with the URL of the uploaded file
        const fileURL = `http://localhost:${PORT}/${imagePath}`;
        res.status(200).send({ Success: true, URL: fileURL });

        // Perform OCR using Tesseract.js in the background
        processOCR(imagePath);
    });
};

// Function to perform OCR using Tesseract.js
async function processOCR(imagePath) {
    try {
        // Perform OCR using Tesseract.js
        const { data } = await Tesseract.recognize(imagePath, 'eng');

        // Extract the recognized text
        const text = data.text;

        // Process the extracted text as required (e.g., store in database, perform further operations, etc.)
        console.log('Extracted text:', text);
    } catch (error) {
        console.error('OCR Error:', error);
    }
}
