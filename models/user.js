var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  portfolio: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    required: true
  },
  profilePic: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  frontDev: Boolean,
  backDev: Boolean,
  fullDev: Boolean,
  mobileDev: Boolean,
  visualUX: Boolean,
  interfaceUX: Boolean,
  interacationUX: Boolean,
  frontUX: Boolean
});

UserSchema.set('toJSON', {
  transform: function(doc, ret, options) {
    var returnJson = {
      id: ret._id,
      email: ret.email,
      name: ret.name,
      portfolio: ret.portfolio,
      userType: ret.userType,
      profilePic: ret.profilePic,
      bio: ret.bio,
      frontDev: ret.frontDev,
      backDev: ret.backDev,
      fullDev: ret.fullDev,
      mobileDev: ret.mobileDev,
      visualUX: ret.visualUX,
      interfaceUX: ret.interfaceUX,
      interacationUX: ret.interacationUX,
      frontUX: ret.frontUX
    };
    return returnJson;
  }
});

UserSchema.methods.authenticated = function(password) {
  var user = this;
  var isAuthenticated = bcrypt.compareSync(password, user.password);
  return isAuthenticated ? user : false;
};

UserSchema.pre('save', function(next) {
  if (!this.isModified('password')) {
    next();
  } else {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
  }
});

module.exports = mongoose.model('User', UserSchema);
