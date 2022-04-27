import axios from "axios";
import Cookies from "js-cookie";

async function postUsername(username) {
    let response = await axios.post("/api", { username });
    return response.data.success;
}

async function postPassword(password) {
    let response = await axios.post("/api", { password });
    return response.data.success;
}

async function verfAdmin() {
    let token = Cookies.get("token");
    let response = await axios.post("/api", { token });
    if(!response.data.success) {
        Cookies.remove("admin");
        Cookies.remove("token");
    }
    return response.data.success;
}

function openAdminConnection() {
    const websocket = new WebSocket("wss://feud.liao.gg/api/admin");
    websocket.onopen = () => websocket.send(Cookies.get("token"));
    return websocket;
}

export { postUsername, postPassword, verfAdmin, openAdminConnection };