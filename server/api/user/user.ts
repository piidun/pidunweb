import { getUserSession } from "nuxt-oidc-auth/runtime/server/utils/session.js"
import jwt  from 'jsonwebtoken'
import { getUserInfo } from "../../utils/userinfo";

export default eventHandler(async (event) => {
    return getUserInfo(event);
})