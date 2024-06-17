// db.js

const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://santoshsaroj0032:dTlE2ZNxnWhQPALr@cluster0.mkmko1i.mongodb.net/VotingSystem?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
