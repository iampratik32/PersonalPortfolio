exports.dataSuccess = (res, data) => {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })
    return res.end(JSON.stringify({ error: null, data: data }))
}

exports.serverError = (res, err) => {
    res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' })
    res.end(JSON.stringify({ error: err }))
}