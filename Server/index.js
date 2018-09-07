require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const massive = require("massive")

const hc = require("./houses_controller")

const app = express()
app.use(bodyParser.json())
port = process.env.PORT || 3005

app.get("/api/houses", hc.readAll)
app.post("/api/house", hc.create)
app.delete("/api/house/:id", hc.delete)

massive(process.env.CONNECTION_STRING).then(db => {
    app.set("db", db)
    app.listen(port, () => console.log(`server started on port ${port}`))
}).catch(err => console.log(err))