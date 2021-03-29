const express = require('express');
const app = express();
app.get("/", (req : any, res : any): void => {
    res.send("mescouilles")
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`)
})