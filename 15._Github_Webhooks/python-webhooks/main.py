from fastapi import FastAPI, Request, Response
import json # Library til at håndtere JSON

app = FastAPI()

@app.post("/githubwebhookjson")
async def github_webhook(request: Request):
    data = await request.body()
    print(json.loads(data)) # Tidligere: print(data)
    return

@app.post("/githubwebhookform")
async def github_webhook(request: Request, response: Response):
    if request.headers.get("content-type") == "application/x-www-form-urlencoded":
        form_data = await request.form()
        payload = form_data['payload']
        print(payload)
        response.status_code = 200
    else: 
        response.status_code = 400