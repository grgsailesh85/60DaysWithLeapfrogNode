const REQUEST_TIMEOUT = 5000; // 5 seconds

function encrypt(data) {
  return "encrypted data";
}

function send(url, data){
  const encryptedData = encrypt(data);
  console.log(`sending ${encryptedData} to ${url}`);
}

export {
  REQUEST_TIMEOUT,
  send 
}

