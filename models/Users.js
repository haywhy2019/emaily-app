const mongoose = require('mongoose');
const { Schema } = mongoose;

const userschema = new Schema ({
 googleID: String
});


 mongoose.model('users', userschema);

 