// Imports
const fs = require('fs');
const csv = require('csv-parser');
const xml2js = require('xml2js');
const yaml = require('js-yaml');


// CSV read and parse 
// CSV file path
const csvPath = 'me.csv';

// Array to collect parsed CSV data
const csvData = [];

fs.createReadStream(csvPath)
  .pipe(csv())
  .on('data', (row) => {
    csvData.push(row);
  })
  .on('end', () => {
    console.log('Data parsed from CSV-File:', csvData);
  })
  .on('error', (err) => {
    console.error('Error occurred while processing CSV file:', err);
  });


  // JSON read and parse
  // JSON file path
  const jsonPath = 'me.json';

  fs.readFile(jsonPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      //console.log('Name from json without parsing: ', jsonData.name);
      // Example of the data is already in a format that can be read by Javascript.
      console.log('Data parsed from JSON-File: ', jsonData);
    } catch (error) {
      console.error('Error parsing JSON data:', error);
    }
  });


  // XML read and parse
  // XML file path
  const xmlPath = 'me.xml';

  fs.readFile(xmlPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading XML file:', err);
      return;
    }
    xml2js.parseString(data, { explicitArray: false }, (parseErr, result) => {
      if (parseErr) {
        console.error('Error parsing XML:', parseErr);
        return;
      }
      console.log('Data parsed from XML-File: ', result);
    });
  });


  // YAML read and parse
  // YAML file path
  const yamlPath = 'me.yaml';

  fs.readFile(yamlPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading YAML file:', err);
      return;
    }
    try {
      const yamlData = yaml.load(data);
      console.log('Data parsed from YAML-File: ',yamlData);
    } catch (parseErr) {
      console.error('Error parsing YAML:', parseErr);
    }
  });