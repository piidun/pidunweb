export default eventHandler(async (event) => {
    const sql = usePostgres();
    let users = [];

    const email = getRouterParam(event, 'email');
    if (!email) {
      return;
    }
  
    try {
      users = await sql`
        SELECT id 
        FROM pidun.users 
        WHERE user_email = ${email}`;
    } catch (error: any) {
      console.error('Error fetching userid:', error);
      return { error: 'Unable to fetch userid', details: error.message };
    }

    event.waitUntil(sql.end());
    return users[0].id;
  });
  