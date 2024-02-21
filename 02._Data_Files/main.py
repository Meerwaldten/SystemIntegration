from fastapi import FastAPI
import requests
import yaml
from read_and_parse import read_yaml, read_csv, read_json, read_txt, read_xml

app = FastAPI()

@app.get('/')
def hello_world():
    return "Hello from python server."

@app.get('/express/{file_type}')
def serve_data_from_express(file_type: str):
    response = requests.get("http://localhost:8080/" + file_type)
    result = response.json()
    return { "data": result }



@app.get("/yaml")
async def fetch_yaml():
    yaml_data = await read_yaml()
    return { "data": yaml_data}

@app.get("/csv")
async def fetch_csv():
    csv_data = await read_csv()
    return { "data": csv_data }

@app.get("/json")
async def fetch_json():
    json_data = await read_json()
    return { "data": json_data }

@app.get("/txt")
async def fetch_txt():
    txt_data = await read_txt()
    return { "data": txt_data }

@app.get("/xml")
async def fetch_xml():
    xml_data = await read_xml()
    return { "data": xml_data }