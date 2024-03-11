const crypto = require("crypto");

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .createHash("sha256")
    .update(password + salt)
    .digest("hex");
  return {
    salt,
    hash,
  };
}

function verifyPassword(password, hash, salt) {
  const hashedPassword = crypto
    .createHash("sha256")
    .update(password + salt)
    .digest("hex");
  return hashedPassword === hash;
}

module.exports = {
  hashPassword,
  verifyPassword,
};
