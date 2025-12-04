require("dotenv").config();

const express = require("express");
const { GoogleAuth } = require("google-auth-library");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const CLOUD_RUN_URL = process.env.CLOUD_RUN_URL;
const PORT = process.env.PORT || 3001;

if (!CLOUD_RUN_URL) {
    console.error("Error: CLOUD_RUN_URL not set in .env file");
    process.exit(1);
}

// Use regex to match /api/ followed by anything
app.all(/^\/api\/(.*)/, async (req, res) => {
    try {
        const auth = new GoogleAuth();
        const client = await auth.getIdTokenClient(CLOUD_RUN_URL);

        // req.params[0] contains everything after /api/
        const path = "/" + req.params[0];

        console.log(
            `Forwarding ${req.method} request to: ${CLOUD_RUN_URL}${path}`
        );

        const response = await client.request({
            url: `${CLOUD_RUN_URL}${path}`,
            method: req.method,
            data: req.body,
            params: req.query,
        });

        res.json(response.data);
    } catch (error) {
        console.error("Error:", error);
        res.status(error.response?.status || 500).json({
            error: error.message,
        });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
    console.log(`Forwarding requests to: ${CLOUD_RUN_URL}`);
});
