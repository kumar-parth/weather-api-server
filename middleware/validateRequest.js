const AccessToken = require('../models/AccessToken');
async function checkAuthentication(param) {
    console.log("ACCESSTOKEN===", param);
    const accessToken = await AccessToken.getAccessToken(param);
    console.log("ACCESSTOKEN===", accessToken);
    if (accessToken) {
        return true;
    }
    return false;
}


//Yr42T5KtUpzYn93H
async function validateRequest(req, res, next) {
    try {
        let authentication = req.get('authentication');
        console.log("AUTH", authentication);
        if (!authentication) {
            return res.status(401).send({ success: false, message: 'Access Token Not Found' });
        }
        let authResult = await checkAuthentication(authentication);
        if (!authResult) {
            return res.status(401).send({ success: false, message: 'Access Token Invalid' });
        }
        next();
    }
    catch (e) {
        return res.status(500).send({ success: false, message: 'Something Went Wrong' });
    }
}

module.exports = validateRequest;