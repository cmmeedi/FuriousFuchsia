const express = require("express");
const app = express();

let po = 3001

app.use(() => {
    console.log("WE GOT A NEW REQUEST!!")
})

app.listen(po, () => {
    console.log("LISTENING ON PORT " + po)
})
