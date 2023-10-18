import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/movies", (req, res) => {
    res.json([
        { title: "Barbie", year: "2023" },
        { title: "Oppenheimer", year: "2023" },
        { title: "Bad year", year: "2023" }
    ])
})

app.use(express.static("../client/dist"))
app.listen(process.env.PORT ||3000);