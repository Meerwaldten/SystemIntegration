from dotenv import dotenv_values, load_dotenv

# Example 1
enviroment_variables = dotenv_values()
print(enviroment_variables["SOMETHING"])

# Example 2
import os

load_dotenv()
print(os.getenv("SOMETHING"))