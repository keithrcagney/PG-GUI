const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://pggui:pggui@cluster0-lbdea.mongodb.net/test?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'pggui'
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const { Schema } = mongoose;

const usersSchema = new Schema({
  username: String,
  password: String,
  uriHistory: Array
});

const Users = mongoose.model('users', usersSchema);

module.exports = mongoose.model('users', usersSchema);
