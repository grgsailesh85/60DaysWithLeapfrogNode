// module.exports.REQUEST_TIMEOUT = 5000; // 5 seconds
exports.REQUEST_TIMEOUT = 5000; // 5 seconds

function encrypt(data) {
  return "encrypted data";
}

// module.exports.send = function send(url, data) {
exports.send = function send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`sending ${encryptedData} to ${url}`);
}

// module.exports = {
//   REQUEST_TIMEOUT,
//   send,
// };
