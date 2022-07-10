var jwt = require("jsonwebtoken");

//This function signs the payload
var signed = jwt.sign({data: "Some random string"}, "somerandomkey", {expiresIn: "10h"})

//This function verifies the token and returns the decoded data
var verified = jwt.verify(signed, "somerandomkey")

//This function returns the decoded data without verifying the token
var decoded = jwt.decode(signed, "somerandomkey")