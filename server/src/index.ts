import express from "express";

const app = express();
const port = 4000;

const one = 1;
const two = 2;

app.get("/", (req, res) => res.send(`1 + 2 =${one + two}`));
app.listen(port);

console.log(`[app]: http://localhost:${port}`);
