const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { headers } = req;
  const { authorization } = headers;

  if (!authorization) {
    res.sendStatus(401);
    return;
  }

  const [, token] = authorization.split(' ');
  if (!token) {
    res.sendStatus(401);
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) res.sendStatus(401);
    else {
      req.userId = +decoded.sub;
      req.nameOfUser = decoded.nameOfUser;
      next();
    }
  });
};
