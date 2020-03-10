
function verify(req, res, next) {
  if (!req.headers.userAccess) throw new Error('User-Access token não encontrado!');

  req.user = { id: req.headers.userAccess };
}

module.exports = { verify };