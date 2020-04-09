const crypto = require('crypto')
module.exports = async () => {
    console.log(crypto.randomBytes(20))
};