export default eventHandler(async (event) => {
    const sql = usePostgres();
    let result = [];
  
    try {
      // Retrieve and sanitize the class parameter
      const email = getRouterParam(event, 'email') ?? '1';
      console.log(`Fetching teacher from email: ${email}`);
  
      // Execute the SQL query
      result = await sql`
        SELECT * 
        FROM pidun.teachers 
        WHERE email = ${email}`;
    } catch (error: any) {
      console.error('Error fetching teacher:', error);
  
      // Return an appropriate error response
      return { error: 'Unable to fetch teacher', details: error.message };
    } finally {
      // Ensure the database connection is closed
      event.waitUntil(sql.end());
    }
  
    console.log('teacher fetched:', result);
    return result;
  });