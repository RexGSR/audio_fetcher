const express = require('express');
const router = express.Router();

const { getFormats, getVideo } = require('../controllers/fetchController');


router.get('/get-info', getFormats)
    .get("/download", getVideo);


module.exports = router