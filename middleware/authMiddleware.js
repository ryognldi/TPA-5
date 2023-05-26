const jwt = require('jsonwebtoken');
const config = require('../config');

// Middleware untuk memeriksa token JWT pada header Authorization
function authMiddleware(req, res, next) {
  const token = req.header('Authorization');

  if (!token){} }
    return res
