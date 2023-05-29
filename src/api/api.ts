import axios from "axios";

const api = axios.create({
    baseURL: "https://api-desafio-full-stack-deploy.onrender.com",
    timeout: 15000
})

export {api}