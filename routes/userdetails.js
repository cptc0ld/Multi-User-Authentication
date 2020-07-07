const router = require("express").Router();
const verify = require("../src/verifytoken");
const User = require("../models/User");

router.get("/", verify, async (req, res) => {
	const userid = req.user._id;
	const user = await User.findOne({ _id: userid });
	if (user) {
		res.send(`${user.username} is logged in`);
	}
});
module.exports = router;
