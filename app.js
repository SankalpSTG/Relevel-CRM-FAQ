var express = require('express');

const app = express()

/**
 * Q. How to create an API in node JS
 */
app.get("/myapi", (req, res) => {
    res.send("This API is working as expected")
})

/**
 * Q. How do we do error handling in node js?
 */
app.get("/errorhandling", (req, res) => {
    try{
        var data = req.body
        if(data.a === undefined){
            return res.send("Unable to fulfil the request")
        }
        return res.send(`${data.a + data.b}`)
    }catch(error){
        console.log(error)
        return res.send("Unable to fulfil the request")
    }
})

app.listen(4000, () => {
    console.log("Server started at port 4000")
})