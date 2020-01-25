require('dotenv').config();
const validateBearerToken = (req, res, next) => {
	const apiToken = process.env.API_TOKEN;
	const authToken = req.get('Authorization');
	
	if(!authToken || authToken.split(' ')[1] !== apiToken) {
		res.status(401)
			.send('Unauthorized request.')
	}
	next();
}

module.exports = validateBearerToken;

