import express from 'express';

const app = express();
app.use(express.urlencoded({ extended: true}));


app.post('/form', (req, res) => {
    console.log(req.body);
    delete req.body.password;
    res.send(req.body);
});

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => console.log('Server is running on port: ', PORT));