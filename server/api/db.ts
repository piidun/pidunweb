export default eventHandler(async (event) => {
    const sql = usePostgres()
  
    const students = await sql`SELECT * FROM pidun.students`
  
    // Ensure the database connection is closed after the request is processed
    event.waitUntil(sql.end())
    console.log(students)
    return students
  })