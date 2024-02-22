import express from "express";

const app = express();
// Example where express server acts like a client for the FastAPI server to retrieve data.

app.get('/requestFastAPI', async (req, res) => {
    const response = await fetch("http://127.0.0.1:8000/fastapiData");
    const result = await response.json();
    res.send({ data: result });
});

app.get("/expressData", (req, res) => {
    res.send({ message: "isRunning" })
})

app.get('/', (req, res) => {
    const date = new Date();
    res.json({ message: "Hej fra Meerwaldts server", date: date});
})

app.get('/dateData', (req, res) => {
    const date = fetch('https://0e8a-195-249-146-101.ngrok-free.app/');
    const dateDisplay = date.json();
    
    res.json({ DateFromZandoServer: dateDisplay });
})



const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port: ", PORT));   