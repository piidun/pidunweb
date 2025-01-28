export default eventHandler(async (event) => {
    const sql = usePostgres();
    let users = [];

    const email = getRouterParam(event, 'email');
    if (!email) {
      return;
    }
  
    try {
      // Execute the SQL query
      users = await sql`
        SELECT * 
        FROM pidun.users 
        WHERE user_email = ${email}`;
    } catch (error: any) {
      console.error('Error fetching initial data:', error);
  
      // Return an appropriate error response
      return { error: 'Unable to fetch users', details: error.message };
    }
  
    // Init first time user if result is empty
    if (users.length == 0) {
      console.log("initialize first time user")
      const result = await sql`
      INSERT INTO pidun.users (active, valid_to, user_email, is_teacher)
      VALUES (true, ${Date.now()}, ${email}, false)
      RETURNING id, is_teacher`

      event.waitUntil(sql.end());
      return result;
    }

    console.log("User existed")
    event.waitUntil(sql.end());
    console.log(users);
    return users;
  });
  