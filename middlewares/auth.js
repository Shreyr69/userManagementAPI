const HARDCODED_TOKEN = "mysecrettoken123";

export const checkAuth = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Authorization header missing"
        });
    }

    const token = authHeader.split(" ")[1];

    if (token !== HARDCODED_TOKEN) {
        return res.status(403).json({
            message: "Invalid token"
        });
    }

    console.log("Token verified");

    next();
};

