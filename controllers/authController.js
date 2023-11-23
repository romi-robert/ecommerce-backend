import { generateToken } from "../models/authModel.js"

function login(req, res) {
    const { username, password } = req.body;
    if (username === "admin" && password === "admin") {
        const token = generateToken(username);
        res.status(200).json({ token });
    } else {
        res.status(401).json({ message: "Usuario y/o contraseña inválido" });
    }
}

export default login;
