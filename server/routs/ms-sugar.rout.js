const express = require('express')
const router = express.Router()

router.get("/", async (req, res) => {
    console.log("Hello World on server");
    res.status( 200 ).json( "Hello World on client" )
})

module.exports = router;