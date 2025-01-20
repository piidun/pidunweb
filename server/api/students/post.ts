export default eventHandler(async (event) => {
    const sql = usePostgres()
    const body = await readBody(event)

    console.log(body);
    // Ensure all fields are provided
    const { name, email, class: studentClass, date_created, teacherId } = body
    if (!name || !email || !studentClass || !date_created || !teacherId) {
        return new Response('Missing required fields', { status: 400 })
    }

    // Insert the new student into the database
    const result = await sql`
        INSERT INTO pidun.students (teacher_id, name, email, class, date_created)
        VALUES (${teacherId}, ${name}, ${email}, ${studentClass}, ${date_created})
        RETURNING id`
    
    // Ensure the database connection is closed after the request is processed
    event.waitUntil(sql.end())

    // Return the inserted student data
    return { id: result[0].id, name, email, class: studentClass, date_created }
})