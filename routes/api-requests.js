const router = require('express').Router();
const apiCtrl = require('../controllers/api-requests');



router.use(require('../config/auth'));
router.get('/eu/team/:id', apiCtrl.euTeamInfo);
router.get('/eu/player/:id', apiCtrl.euPlayerInfo);
router.get('/americas/team/:id', apiCtrl.americasTeamInfo);
router.get('/americas/player/:id', apiCtrl.americasPlayerInfo);
router.get('/americas/player/add/:id', apiCtrl.addToRoster);
router.get('/americas/roster', apiCtrl.getRoster);
router.delete('/americas/roster/:id', apiCtrl.removeFromRoster);
router.get('/americas/dreamteam', apiCtrl.getDreamTeam);
router.post('/americas/dreamteam', apiCtrl.saveDreamTeam);



module.exports = router;
