import express from "express";
import { getTodosAnimes } from "../controller/controller.js";




const routes = (app) => {
    app.use(express.json());

    app.get("/animes", getTodosAnimes)
}

export default routes;