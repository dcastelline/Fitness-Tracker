const db = require('../models');
const path = require('path');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(_dirname, '../public/index.html'));
    });

    app.get('/stats', (req, res) => {
        res.sendFile(path.join(_dirname, '../public/stats.html'));
    });
};