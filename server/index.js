const express = require('express')
const app = express()
require('dotenv').config({ encoding: 'latin1' })
const port = process.env.APP_PORT
const { pool, transporter } = require('./config')
const { dataSuccess, serverError, blankSuccess } = require('./responses')
const cors = require('cors')

app.use(express.urlencoded({ limit: '5mb', extended: true }));
app.use(express.json({ limit: '5mb' }))
app.use(cors())

app.get('/', async (req, res) => {
    setTimeout(async () => {
        await pool.query(`select * from projects order by position`)
            .then((v) => dataSuccess(res, v.rows)).catch((err) => serverError(res, err))
    }, 1000);
})

app.delete('/', async (req, res) => {
    if (req.headers.secret === process.env.APP_SECRET) {
        await pool.query(`delete from projects where id=${req.body.id};`)
            .then(() => blankSuccess(res)).catch((err) => serverError(res, err))
    }
    else serverError(res, 'NOT AUTHORIZED')
})

app.post('/', async (req, res) => {
    if (req.headers.secret === process.env.APP_SECRET) {
        const { title, description, tags, position, image1, image2, hosted, github } = req.body

        await pool.query(`insert  into projects(title, tags, description, position, image1, image2, hosted, github)
        values ('${title}', '${tags}', '${description}', ${parseInt(position)}, '${image1}', '${image2 ? image2 : ''}',
         '${hosted ? hosted : ""}', '${github}');`)
            .then((v) => blankSuccess(res)).catch((err) => serverError(res, err))
    }
    else serverError(res, 'NOT AUTHORIZED')
})

app.post('/mail', async (req, res) => {
    const { name, email, message } = req.body
    const mailOptions = {
        from: process.env.MAIL_USER,
        to: 'iampratik32@gmail.com',
        subject: 'Message From Personal Site',
        html: `<p><b>Name: ${name}</b></p><br/><p><b>Email: </b>${email}</p><br/><br/>${message}`
    }
    await transporter.sendMail(mailOptions, (err, data) => {
        if (err) serverError(res, err)
        else blankSuccess(res)
    })
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

