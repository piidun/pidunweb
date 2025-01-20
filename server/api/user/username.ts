import { getUserSession } from "nuxt-oidc-auth/runtime/server/utils/session.js"
import jwt  from 'jsonwebtoken'

export default eventHandler(async (event) => {
    const session = getUserSession(event);
    const idToken = (await session).idToken;

    if (idToken) {
        const decodedToken = jwt.decode(idToken);
        return decodedToken.email;
    }
    return null;
})