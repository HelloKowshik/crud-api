const mongoose = require('mongoose');

const connectionString = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Mongo Connected');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectionString;
