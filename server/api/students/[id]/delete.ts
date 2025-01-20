export default eventHandler(async (event) => {
    const sql = usePostgres(); // Assumes usePostgres returns a database client
    let result = [];
  
    try {
      // Retrieve and sanitize the class parameter
      const id = getRouterParam(event, 'id');
  
      if (!id) {
        return;
      }

      console.log(`Deleting student: ${id}`);
  
      // Execute the SQL query
      result = await sql`
        DELETE
        FROM pidun.students
        WHERE id = ${id}`;
    } catch (error: any) {
      console.error('Error deleting student:', error);
  
      // Return an appropriate error response
      return { error: 'Unable to delete student', details: error.message };
    } finally {
      // Ensure the database connection is closed
      event.waitUntil(sql.end());
    }
  
    console.log('Student deleted:', result);
    return result;
  });
  