from fastapi import FastAPI, Form, File, UploadFile
import aiofiles
from typing import Optional


app = FastAPI()


@app.post('/form')
def basic_form(username: str = Form(...), password: str = Form(default=..., min_length = 8)):
    print(username, password)
    return { "username": username} 

#@app.post('/fileform')
#def file_form(file: bytes = File(...)):
#    with open('file', 'wb') as f:
#        f.write(file)
#
#        return { "message": "File uploaded" }
    

#@app.post('/fileform')
#async def file_form(file: UploadFile = File(...)):
#    contents = await file.read()
#    print(contents)

#    return { "filename": file.filename }

@app.post('/fileform')
async def file_form(file: UploadFile = File(...), description: Optional[str] = Form(None)):
    print(description)
    safe_filename = file.filename.replace('/', '_').replace('\\', '_')
    #with open (safe_filename, 'wb') as f:
    async with aiofiles.open ( safe_filename, 'wb') as f:
        while content := await file.read(1024):
            await f.write(content)