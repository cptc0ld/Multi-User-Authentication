const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	try {
		const token = req.header("token");
		if (!token)
			return res.status(400).send("Access Denied, No token provided");

		const verified = jwt.verify(token, process.env.JWT_SECRET);
		req.user = verified;
		next();
	} catch (err) {
		res.status(400).send("Invalid Token");
	}
};
