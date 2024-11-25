import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbconfig.js";
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

export async function getAnimes() {
    const db = conexao.db("instabytes");
    const colecao = db.collection("animes");
    return colecao.find().toArray();
    
}