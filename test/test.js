const { hashPassword, verifyPassword } = require("../lib/secure-hash");

// Test hashing a password
const password = "mySecurePassword";
const hashedPassword = hashPassword(password);
console.log("Hashed password:", hashedPassword);

// Test verifying a password
const newPassword = "mySecurePassword";
const isMatch = verifyPassword(
  newPassword,
  hashedPassword.hash,
  hashedPassword.salt
);
console.log("Password match:", isMatch);
