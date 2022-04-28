import axios from "axios";

axios.defaults.withCredentials = true;

let root = "http://localhost:3001";

async function postUsername(username) {
    let response = await axios.post(root + "/api", { username });
    return response.data.success;
}

async function postPassword(password) {
    let response = await axios.post(root + "/api", { password });
    return response.data.success;
}

async function getName() {
    let response = await axios.post(root + "/api", { asdf:"asdf", get: "name" });
    return response.data.name;
}

async function verfUser() {
    let response = await axios.post(root + "/api", { get: "name" })
    return response.data.name !== "";
}

async function verfAdmin() {
    let response = await axios.post(root + "/api", { get: "admin" });
    return response.data.success;
}

function buzz() {
    return axios.post(root + "/api", { buzz: "buzz" });
}

function openAdminConnection() {
    const websocket = new WebSocket("ws://localhost:3001/ws");
    return websocket;
}

export { postUsername, postPassword, getName, verfAdmin, verfUser, openAdminConnection, buzz };