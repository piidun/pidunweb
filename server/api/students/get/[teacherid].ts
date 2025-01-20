export default eventHandler(async (event) => {
  const sql = usePostgres(); // Assumes usePostgres returns a database client
  let students = [];

  try {
    // Retrieve and sanitize the class parameter
    const teacherId = getRouterParam(event, 'teacherid');
    const query = getQuery(event);
    const currentClass = query.class;

    if (!currentClass || !teacherId) {
      return;
    }

    console.log(`Fetching students for class: ${currentClass.toString()}`);

    // Execute the SQL query
    students = await sql`
      SELECT * 
      FROM pidun.students 
      WHERE class = ${currentClass.toString()} AND teacher_id = ${teacherId}`;
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
