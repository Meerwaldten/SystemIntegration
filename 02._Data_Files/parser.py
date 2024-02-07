import csv
import json
import xml.etree.ElementTree as ET
import yaml

# CSV read and parse ---
# CSV file path
csv_path = 'me.csv'

# List to collect parsed CSV data
csv_data = []

with open(csv_path, newline='') as csvfile:
    reader = csv.reader(csvfile)
    for row in reader:
        csv_data.append(row)

# Print the collected CSV data
print("Data parsed from CSV-File:", csv_data)

# JSON read and parse
# JSON file path
json_path = 'me.json'

with open(json_path, 'r') as jsonfile:
    json_data = json.load(jsonfile)

# Print the parsed JSON data
print("Data parsed from JSON-File:", json_data)

# XML read and parse
# XML file path
xml_path = 'me.xml'

xml_data = ET.parse(xml_path).getroot()

# Convert XML data to dictionary
xml_dict = {}
for child in xml_data:
    if len(child) > 0:
        xml_dict[child.tag] = {}
        for item in child:
            xml_dict[child.tag][item.tag] = item.text
    else:
        xml_dict[child.tag] = child.text

# Print the parsed XML data
print("Data parsed from XML-File:", xml_dict)

# YAML read and parse
# YAML file path
yaml_path = 'me.yaml'

with open(yaml_path, 'r') as yamlfile:
    yaml_data = yaml.safe_load(yamlfile)

# Print the parsed YAML data
print("Data parsed from YAML-File:", yaml_data)