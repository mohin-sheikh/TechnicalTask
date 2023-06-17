const crypto = require('crypto');

// Encrypt data using a secret key
exports.encryptData = (data) => {
    const secretKey = 'SecretKey';
    const cipher = crypto.createCipher('aes-256-cbc', secretKey);
    let encryptedData = cipher.update(JSON.stringify(data), 'utf8', 'hex');
    encryptedData += cipher.final('hex');
    return encryptedData;
}

// Decrypt data using the secret key
exports.decryptData = (data) => {
    const secretKey = 'SecretKey';
    const decipher = crypto.createDecipher('aes-256-cbc', secretKey);
    let decryptedData = decipher.update(data, 'hex', 'utf8');
    decryptedData += decipher.final('utf8');
    return JSON.parse(decryptedData);
}