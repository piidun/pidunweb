import { SchoolClass } from "../classes/types"
import { getUserInfo } from "../../utils/userinfo";

export default eventHandler(async (event) => {
  console.log("tried")
  const sql = usePostgres();
  let result: SchoolClass[] = [];
  try {
    const userInfo = await getUserInfo(event);

    if (userInfo == null) {
      return;
    }

    result = await sql<SchoolClass[]>`
      SELECT id, class_year, teacher_id, class_letter, class_name
      FROM pidun.classes
      WHERE teacher_id = ${userInfo.teacherId}
    `;

  } catch (error: any) {
    console.error('Error fetching classes:', error);

    return { error: 'Unable to fetch classes', details: error.message };
  } finally {
    event.waitUntil(sql.end());
  }

  console.log('Classes fetched:', result);
  return result;
});