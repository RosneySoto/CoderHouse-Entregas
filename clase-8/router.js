const express = require('express');
const router = express.Router();

router.get('/:userId', (req, res) =>{
    res.send({userId: req.params.userId});
});

module.exports = router;