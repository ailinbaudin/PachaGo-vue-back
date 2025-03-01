const AnnouncementModel = require("../models/Announcement");

const createAnnouncement = async (req, res) => {
  try {
    const newAnnouncement = new AnnouncementModel(req.body);
    const savedAnnouncement = await newAnnouncement.save();
    res.status(201).json(savedAnnouncement);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAnnouncement = await AnnouncementModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedAnnouncement) {
      return res.status(404).json({ message: "Announcement not found" });
    }
    res.status(200).json(updatedAnnouncement);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAnnouncement = await AnnouncementModel.findByIdAndDelete(id);
    if (!deletedAnnouncement) {
      return res.status(404).json({ message: "Announcement not found" });
    }
    res.json({ message: "Announcement deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;
    const announcement = await AnnouncementModel.findById(id);
    if (!announcement) {
      return res.status(404).json({ message: "Announcement not found" });
    }
    res.status(200).json(announcement);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getAnnouncements = async (req, res) => {
  try {
    const announcements = await AnnouncementModel.find();
    res.status(200).json(announcements);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getAnnouncementsByHost = async (req, res) => {
  const host = req.params.host;
  try {
    const announcements = await AnnouncementModel.find({ host });
    res.status(200).json(announcements);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};



module.exports = { createAnnouncement, updateAnnouncement, deleteAnnouncement, getAnnouncement, getAnnouncements, getAnnouncementsByHost };
