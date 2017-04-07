var mongoose = require('mongoose');

var ProjectSchema = mongoose.Schema({
  projectTitle: String,
  projectBody: String,
  projectDate: Date,
  projectPoster: String,
  projectPrice: Number,
  projectPic: String,
});

ProjectSchema.set('toJSON', {
  transform: function(doc, ret, options) {
    var returnJson = {
      projectTitle:     ret.projectTitle,
      projectBody:       ret.projectBody,
      projectDate:    ret.projectDate,
      projectPoster:   ret.projectPoster,
      projectPrice:       ret.projectPrice,
      projectPic:  ret.projectPic
    };
    return returnJson;
  }
});

module.exports = mongoose.model('project', ProjectSchema);
