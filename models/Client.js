const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  account_number: { type: Number, required: true },
  last_name: { type: String, required: true },
  first_name: { type: String, required: true },
  middle_name: { type: String, required: true },
  birthdate: { type: String, required: true }, //number?date?
  inn: { type: Number, required: true },
  responsible_person: { type: String, required: true },
  status: { type: String, default: "Не в работе", required: true },
});

module.exports = mongoose.model("Client", clientSchema);
