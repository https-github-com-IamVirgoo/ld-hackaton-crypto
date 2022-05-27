from fastapi import FastAPI

import feature_cryto


app = FastAPI()

@app.get("/")
async def index():
    return feature_cryto.get_all()


@app.get('/crypto/{name}')
async def get_by_name(name: str):
    return feature_cryto.get_by_name(name)