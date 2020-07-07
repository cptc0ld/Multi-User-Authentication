const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
	const token = req.cookies.token || "";
	try {
		if (!token) {
			return res.status(401).json("You need to Login");
		}
		const verified = await jwt.verify(token, process.env.JWT_SECRET);
		req.user = verified;
		next();
	} catch (err) {
		res.status(400).send("Invalid Token");
	}
};
