const bcrypt = require("bcryptjs");

module.exports = {
    name: "PasswordHelper",
    hash: async(password) => {
        const encrypted =  await bcrypt.hash(password, 10);
        return encrypted;
    },
    compare: async(password, encrypted) => {
        const matched = await bcrypt.compare(password, encrypted);
        return matched;
    }
}