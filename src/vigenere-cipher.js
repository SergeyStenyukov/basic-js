const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;  // Set direction (true for direct, false for reverse)
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Invalid input!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = [];
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      let char = message[i];

      // Only encrypt alphabetic characters
      if (/[A-Z]/.test(char)) {
        let shift = key[keyIndex % key.length].charCodeAt(0) - 65;  // Calculate shift based on key
        let encryptedChar = String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
        result.push(encryptedChar);

        keyIndex++;  // Move to next key character
      } else {
        result.push(char);  // Non-alphabetic characters remain the same
      }
    }

    let encryptedMessage = result.join('');

    // If reverse mode, reverse the final result
    return this.isDirect ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Invalid input!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = [];
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      let char = message[i];

      // Only decrypt alphabetic characters
      if (/[A-Z]/.test(char)) {
        let shift = key[keyIndex % key.length].charCodeAt(0) - 65;  // Calculate shift based on key
        let decryptedChar = String.fromCharCode(((char.charCodeAt(0) - 65 - shift + 26) % 26) + 65);
        result.push(decryptedChar);

        keyIndex++;  // Move to next key character
      } else {
        result.push(char);  // Non-alphabetic characters remain the same
      }
    }

    let decryptedMessage = result.join('');

    // If reverse mode, reverse the final result
    return this.isDirect ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }}

module.exports = {
  VigenereCipheringMachine
};
