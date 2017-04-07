var mongoose = require('mongoose');

var ProjectsSchema = new mongoose.Schema({
  projectTitle: String,
  projectBody: String,
  projectDate: Date,
  projectPoster: String,
  projectPrice: Number,
  projectPic: String,
});

module.exports = mongoose.model('Notes', NotesSchema);
