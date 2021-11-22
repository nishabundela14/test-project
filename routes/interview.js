var express = require('express');
var router = express.Router();
const interview = require('../controllers/interviewController')

router.get('/list', interview.interviewList)

router.get('/search', interview.searchList)

router.get('/archive', interview.archiveList)

router.get('/statusArchive/:candidate', interview.toggleArchive)

module.exports = router;