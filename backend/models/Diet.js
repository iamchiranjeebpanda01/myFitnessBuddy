const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const DietSchema = new Schema({
  item: String,
  amount: String,
  id: String,
});

const Diet = mongoose.model("Diet", DietSchema)

module.exports = Diet;