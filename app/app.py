from fastapi import FastAPI, HTTPException

app = FastAPI()


list_wisata =  {
    1: {"name": "Pantai Kuta", "location": "Bali", "description": "Pantai terkenal dengan pasir putihnya."},
    2: {"name": "Candi Borobudur", "location": "Magelang", "description": "Candi Buddha terbesar di dunia."},
    3: {"name": "Raja Ampat", "location": "Papua Barat", "description": "Destinasi menyelam dengan keanekaragaman hayati laut yang luar biasa."}
}

@app.get("/")
def test():
    return {"message": "Hello, World!"}


# API UNTUK WISATA
@app.get("/wisata")
def get_wisata():
    return {"wisata": list_wisata}


@app.get("/wisata/{wisata_id}")
def get_wisata_by_id(wisata_id: int):
    wisata = list_wisata.get(wisata_id)
    if not wisata:
        raise HTTPException(status_code=404, detail="Wisata not found")
    return {"wisata": wisata}