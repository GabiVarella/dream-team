const router = require('express').Router();
const apiCtrl = require('../controllers/api-requests');



router.use(require('../config/auth'));
router.get('/eu/team/:id', apiCtrl.euTeamInfo);
router.get('/eu/player/:id', apiCtrl.euPlayerInfo);
router.get('/americas/team/:id', apiCtrl.americasTeamInfo);
router.get('/americas/player/:id', apiCtrl.americasPlayerInfo);
router.get('/americas/player/add/:id', apiCtrl.addToRoster);
router.get('/americas/dreamteam', apiCtrl.getDreamTeam);
router.delete('/americas/dreamteam/:id', apiCtrl.removeFromDreamTeam);



module.exports = router;
