
import { getUserInfo } from "../../utils/userinfo";
import { SchoolClass } from "../classes/types"

  export default eventHandler(async (event) => {
    console.log("tried")
    const sql = usePostgres();
    const query = getQuery(event);
    let result;
    const body = await readBody<SchoolClass>(event)
    let userInfo = await getUserInfo(event);
    try {
        if (userInfo != null && userInfo.teacherId != null) {
            result = await sql`
            INSERT INTO pidun.classes (class_year, teacher_id, class_name, class_letter)
            VALUES (${body.class_year}, ${userInfo.teacherId}, ${body.class_name}, ${body.class_letter})
            RETURNING teacher_id`
        }
    } catch (error: any) {
      console.error('Error posting new class:', error);
  
      return { error: 'Unable to post new class', details: error.message };
    } finally {
      event.waitUntil(sql.end());
    }
  
    console.log('Classes posted:', result);
    return result;
  });