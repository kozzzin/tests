function cipher(message, key) {
  // dont touch punctuation
  // use modulo only if it < treshold or > than treshold
  
  return message.split('')
    .map((el) => {
      let code = el.charCodeAt(0);
      if (code >= 65 && code <= 65 + 25) {
        code = ((code - 65) + key) % 26 + 65;
      } else if (code >= 97 && code <= 97 + 25) {
        code = ((code - 97) + key) % 26 + 97;
      }
      return String.fromCharCode(code);
    })
    .join('');
}

function deCipher(message, key) {
  return message.split('')
  .map((el) => {
    let code = el.charCodeAt(0);
    if (code >= 65 && code <= 65 + 25) {
      code = ((26 + code - 65 - key) % 26) + 65;
    } else if (code >= 97 && code <= 97 + 25) {
      code = ((26 + code - 97) - key) % 26 + 97;
    }
    return String.fromCharCode(code);
  })
  .join('');
}

module.exports = { cipher, deCipher }


