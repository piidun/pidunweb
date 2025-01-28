import { getUserSession } from "nuxt-oidc-auth/runtime/server/utils/session.js"
import { H3Event } from "h3"
import jwt from 'jsonwebtoken'

const sql = usePostgres()

export const getUserInfo = async (event: H3Event): Promise<UserInfo | null> => {
    const session = await getUserSession(event);
    const idToken = session?.idToken;

    let userInfo: UserInfo = {
        email: "",
        teacherId: ""
    }

    if (idToken) {
        const decodedToken = jwt.decode(idToken);

        if (decodedToken && typeof decodedToken === 'object' && 'email' in decodedToken) {
            userInfo.email = decodedToken.email;
        }

        const result = await sql`
        SELECT id
        FROM pidun.users 
        WHERE user_email = ${userInfo.email} AND is_teacher`;
        userInfo.teacherId = result[0].id;
    }
    return userInfo;
}

export type UserInfo = {
    email: string,
    teacherId: string
}
