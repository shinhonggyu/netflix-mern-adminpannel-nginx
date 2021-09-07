const jwt = require('jsonwebtoken');

function verify(req, res, next) {
  // get jwt (from headers)
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(' ')[1];

    // verify Token
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403).json('Token is not valid');
      }

      // assign new request
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json('You are not authenticated!');
  }
}

module.exports = verify;
