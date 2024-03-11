# Secure-password-hash

Secure-Hash is a Node.js package for securely hashing and verifying passwords.

## Installation

To install the package, run the following command:

```bash
npm install secure-password-hash
```

## Usage

Require the secure-hash package in your code to access its functionality:

```javascript
const { hashPassword, verifyPassword } = require("secure-hash");
```

## Hashing Passwords

To hash passwords, use the hashPassword function provided by the package. Here's an example:

```javascript
const password = "userPassword";
const hashedPassword = hashPassword(password);
console.log("Hashed password:", hashedPassword);
```

## Verifying Passwords

To verify passwords, use the verifyPassword function provided by the package. Here's an example:

```javascript
const password = "userPassword";
const isMatch = verifyPassword(
  password,
  hashedPassword.hash,
  hashedPassword.salt
);
console.log("Password match:", isMatch);
```
