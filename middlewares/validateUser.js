export const validateUser = (req, res, next) => {

    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            message: "Name and email are required"
        });
    }

    if (typeof name !== "string" || name.trim().length < 2) {
        return res.status(400).json({
            message: "Name must be at least 2 characters"
        });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({
            message: "Invalid email format"
        });
    }

    console.log("Validation Passed");

    next();
};
