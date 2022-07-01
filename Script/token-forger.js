const jwt = require('jsonwebtoken');
const token = jwt.sign({name: "theadmin"}, "secret");
console.log(token);

