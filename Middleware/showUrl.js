
//@desc    request about url
const showUrl = (req, res, next) => {
  console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
  next()
}



module.exports = showUrl