const express = require('express')
const app = express()
require('dotenv').config({ encoding: 'latin1' })
const port = process.env.APP_PORT
const { pool } = require('./db')
const { dataSuccess, serverError } = require('./responses')

app.use(express.urlencoded({ limit: '5mb', extended: true }));
app.use(express.json({ limit: '5mb' }))

app.get('/', async (req, res) => {

    await pool.query(`select * from projects order by position limit 6`)
        .then((v) => dataSuccess(res, v.rows)).catch((err) => serverError(res, err))
})

app.post('/', async (req, res) => {
    if (req.headers.secret === process.env.APP_SECRET) {
        const { title, description, tags, position, image1, image2, hosted, github } = req.body

        await pool.query(`insert  into projects(title, tags, description, position, image1, image2, hosted, github)
        values ('${title}', '${tags}', '${description}', ${parseInt(position)}, '${image1}', '${image2}', '${hosted}', '${github}');`)
            .then((v) => dataSuccess(res, v.rowCount)).catch((err) => serverError(res, err))
    }
    else {
        serverError(res, 'NOT AUTHORIZED')
    }
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

