import { Student } from "../types"

export default eventHandler(async (event) => {
  const sql = usePostgres(); // Assumes usePostgres returns a database client
  let students = [];

  try {
    const classId = getRouterParam(event, 'classid');
    if (!classId) {
      return;
    }

    console.log(`Fetching students for class: ${classId.toString()}`);

    // Execute the SQL query
    students = await sql`
      SELECT * 
      FROM pidun.users 
      WHERE class_id = ${classId.toString()}`;
  } catch (error: any) {
    console.error('Error fetching students:', error);

    // Return an appropriate error response
    return { error: 'Unable to fetch students', details: error.message };
  } finally {
    // Ensure the database connection is closed
    event.waitUntil(sql.end());
  }

  console.log('Students fetched:', students);
  return students;
});
