// This file for uploading files using multer

const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Set the destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const fileExtension = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
    },
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1 * 1024 * 1024, // 1 MB file size limit
    },
    fileFilter: function (req, file, cb) {
        const allowedExtensions = ['.jpg', '.jpeg', '.png'];
        const fileExtension = path.extname(file.originalname);
        if (!allowedExtensions.includes(fileExtension)) {
            return cb(new Error('Only JPG, JPEG, and PNG files are allowed.'));
        }
        cb(null, true);
    },
});

app.post('/upload', (req, res, next) => {
    upload.single('image')(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred (e.g., file size exceeds limit)
            return res.status(400).json({ error: err.message });
        } else if (err) {
            // An unknown error occurred
            return res.status(500).json({ error: err.message });
        }
        next();
    });
}, (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded.' });
        }
        const imageUrl = req.file.path.replace(/\\/g, '/'); // Replace backslashes with forward slashes

        res.json({ imageUrl: imageUrl });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

const port = 3000; // Choose the desired port number
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
