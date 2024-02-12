// Imports
import fs from 'fs';
import csvParser from 'csv-parser';
import xml2js from 'xml2js';
import yaml from 'js-yaml';

// Paths
const csvPath = 'me.csv';
const jsonPath = 'me.json';
const xmlPath = 'me.xml';
const yamlPath = 'me.yaml';
const txtPath = 'me.txt';

export function readAndParseCSV() {
  return new Promise((resolve, reject) => {
    const csvData = [];
    fs.createReadStream(csvPath)
      .pipe(csvParser())
      .on('data', (row) => {
        csvData.push(row);
      })
      .on('end', () => {
        resolve(csvData);
      })
      .on('error', (err) => {
        reject(err);
      });
  });
}

export function readAndParseJSON() {
  try {
    const data = fs.readFileSync(jsonPath, 'utf8');
    const jsonData = JSON.parse(data);
    return jsonData;
  } catch (error) {
    throw error;
  }
}

export function readAndParseXML() {
  try {
    const data = fs.readFileSync(xmlPath, 'utf8');
    let result;
    xml2js.parseString(data, { explicitArray: false }, (parseErr, parsedResult) => {
      if (parseErr) {
        throw parseErr;
      }
      result = parsedResult;
    });
    return result;
  } catch (error) {
    throw error;
  }
}

export function readAndParseYAML() {
  try {
    const data = fs.readFileSync(yamlPath, 'utf8');
    const yamlData = yaml.load(data);
    return yamlData;
  } catch (error) {
    throw error;
  }
}

export function readAndParseTxt() {
  try {
    const data = fs.readFileSync(txtPath, 'utf8');
    const parsedData = yaml.load(data);
    return parsedData;
  } catch (error) {
    throw error;
  }
}