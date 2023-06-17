const fs = require('fs');

exports.readEnglishFile = async (req, res) => {
    try {
        fs.readFile('english_language.json', 'utf8', (err, data) => {
            if (err) {
                res.status(500).send('Error reading English language file');
            } else {
                res.setHeader('Content-Type', 'application/json');
                res.send(data);
            }
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
