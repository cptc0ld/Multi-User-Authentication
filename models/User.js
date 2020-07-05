const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		min: 6,
	},
	emailid: {
		type: String,
		required: true,
		max: 100,
		min: 6,
	},
	password: {
		type: String,
		required: true,
		max: 1024,
		min: 8,
	},
	role: {
		type: String,
		required: false,
		default: "Local",
	},
});

module.exports = mongoose.model("User", UserSchema);
