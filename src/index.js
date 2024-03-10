const express = require('express');
const cors = require("cors");
const dotenv = require('dotenv');
const ogs = require('open-graph-scraper');


const app = express();

dotenv.config();
app.use(cors());

const port = process.env.PORT;

app.get("/api/v1/generate-meta-response", async (req, res, next) => {

    const { query } = req.query;

    const options = {
        url: query
    };

    try {
        let meta_response = "";
        meta_response = await ogs(options);

        return res.json(meta_response);

    } catch (error) {
        console.error(error)
    }

});

app.listen(port, () => {
    console.log(`App running on ${port}`)
})
