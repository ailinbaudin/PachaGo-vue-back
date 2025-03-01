const jwt = require('jsonwebtoken');
const Experiencer = require('../models/Experiencer');
const Host = require('../models/Host');

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Authorization token required' });
  }

  const token = authorization.split(' ')[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
    req.user = await Experiencer.findOne({ _id }).select('_id') || await Host.findOne({ _id }).select('_id');
    if (!req.user) {
      throw Error('User not found');
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: 'Request is not authorized' });
  }
};

module.exports = requireAuth;
