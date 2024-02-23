const { auth } = require('express-oauth2-jwt-bearer');

const jwtCheck = auth({
    audience: "http://localhost:6000",
    //auth0 domain
    issuerBaseURL: "https://dev-mo0jwhzj0mc4675k.us.auth0.com",
    //default sign access token
    tokenSigningAlg: "RS256"
});

module.exports = jwtCheck;
