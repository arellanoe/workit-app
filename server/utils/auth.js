const jwt = require('jsonwebtoken');

const secret = 'supersecretsecret';

module.exports = {
    authMiddleware: function({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        if(req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if(!token) {
            return req;
        }

        try{
            const { data } = jwt.verify(token, secret,);
            req.user = data;
        } catch {
            console.log("Invalid Token");
        }

        return req;
    },
    signtoken: function ({ email, username, _id }) {
        const payload = { email, username, _id };
        return jwt.sign({ data: payload }, secret)
    },
};
