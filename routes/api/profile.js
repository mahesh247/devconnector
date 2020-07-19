const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => res.json({
    msg: "Proflie Works"
}));

module.exports = router;