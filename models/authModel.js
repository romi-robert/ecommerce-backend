import jwt from "jsonwebtoken";

const SECRET_KEY = "CLAVE ULTRA SECRETA";

function generateToken(username) {
    return jwt.sign({ username }, SECRET_KEY);
}

function verifyToken(req, res, next) {
    try {
        const decoded = jwt.verify(req.headers['access-token'], SECRET_KEY);
        console.log(decoded)
        next()
    } catch (err) {
        res.status(401).json({ message: "Usuario no autorizado" });
    }
}

export { generateToken, verifyToken };
