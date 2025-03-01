const express = require('express');
const router = express.Router();
const announcementController = require('../controllers/announcementController');
const requireAuth = require('../middleware/requireAuth');

router.get("/announcements", announcementController.getAnnouncements);
router.get("/announcements/host/:host", announcementController.getAnnouncementsByHost);
router.get("/announcements/announcement/:id", announcementController.getAnnouncement);
router.post("/announcements", announcementController.createAnnouncement);
router.put("/announcements/announcement/:id", requireAuth, announcementController.updateAnnouncement);
router.delete("/announcements/announcement/:id", requireAuth, announcementController.deleteAnnouncement);

module.exports = router;
