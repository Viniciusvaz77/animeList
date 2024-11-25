import { getAnimes } from "../model/model.js";


const anime = {
    nome: "Sosou no Frieren",
    nota: "10",
    Resenha: "Muito bom, anime chill"
}

export async function getTodosAnimes(req, res){
    const animes = await getAnimes();
    res.status(200).json(animes);
}