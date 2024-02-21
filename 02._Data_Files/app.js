import express from 'express';
import { readAndParseCSV, readAndParseJSON, readAndParseXML, readAndParseYAML, readAndParseTxt } from './parser.js';

const app = express();

app.get('/', (req, res) => {
    res.send({ message: 'Hello world'});    
})

app.get('/csv', async (req, res) => {
    const csvData =  await readAndParseCSV();
    res.send({ data: csvData });
});

app.get('/json', (req, res) => {
    const jsonData = readAndParseJSON();
    res.send({ data: jsonData });
})

app.get('/xml', (req, res) => {
    const xmlData = readAndParseXML();
    res.send({ data: xmlData });
})

app.get('/yaml', (req, res) =>{
    const yamlData = readAndParseYAML(); 
    res.send({ data: yamlData });
})

app.get('/txt', (req, res) => {
    const txtData = readAndParseTxt();
    res.send({ data: txtData });
  });


app.get('/fastapi/:file_type', async (req, res) => {
    const { file_type } = req.params;
    const response = await fetch(`http://127.0.0.1:8000/${file_type}`); 
    const result = await response.json();
    res.json({ data: result });
})

const PORT = '8080';

app.listen(PORT, () => console.log('Server is running on: ', PORT));