// String to be encoded.
const randomString = "Hello World";

// btoa methods --> Base64 --> Slutter ofte med 2 x "=="
const encoded = btoa(randomString);
console.log('Encoded message: ', encoded);

const decoded = atob(encoded);
console.log('Decoded message: ', decoded);

// Buffer methods --> hex decimals?
const encode = Buffer.from(randomString).toString('hex');
console.log('Encoded message 2: ', encode);

const decode = Buffer.from(encode, 'hex').toString();
console.log('Decoded message 2: ', decode);