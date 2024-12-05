import express from "express"
const app = express()
const port = 8000

app.use("/api", router)

app.listen(port, ()=>{
    console.log("Listening on ports : " + port)
})