const url = require('url');

module.exports = function (request) {
  var head = 'master';
  var parsed = url.parse(request);
  if (parsed.hash && parsed.hash !== "") {
    head = parsed.hash.substring(1);
  }
  return head;
};
