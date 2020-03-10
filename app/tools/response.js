const debug = require('debug')('api:error');

function wrapper(res, promise) {
  return promise
    .then((data) => {
      if (!data) return res.status(404).send({ message: 'Não encontrado.' });
      res.send(data);
    })
    .catch((err) => {
      if (err.response) return res.status(400).send(err.response);
      debug(err);
      res.status(400).send({ message: err.message });
    });
}

module.exports = {
  wrapper
}