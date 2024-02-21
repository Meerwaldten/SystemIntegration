import yaml
import csv
import json
import xml.etree.ElementTree as ET

csv_path = 'me.csv'
json_path = 'me.json'
txt_path = 'me.txt'
xml_path = 'me.xml'
yaml_path = 'me.yaml'

async def read_yaml():
    with open(yaml_path, 'r') as yamlfile:
        yaml_data = yaml.safe_load(yamlfile)
    return yaml_data

async def read_csv():
    csv_data = []
    with open(csv_path, newline='') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            csv_data.append(row)
    return csv_data

async def read_json():
    with open(json_path, 'r') as jsonfile:
        json_data = json.load(jsonfile)
    return json_data

async def read_txt():
    with open(txt_path, 'r') as txtfile:
        txt_data = txtfile.read()
    return txt_data

async def read_xml():
    xml_data = ET.parse(xml_path).getroot()
    return xml_data
