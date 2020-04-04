const Model = require('objection').Model;

class AccessToken extends Model {
    static get tableName() {
        return 'access_tokens';
    }

    static async getAccessToken(accessToken) {
        let result = await AccessToken.query().where({ access_token: accessToken });
        console.log(result);
        return result.length === 1 ? result[0].access_token : false;
    }
}

module.exports = AccessToken;