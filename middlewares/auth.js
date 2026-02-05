let success = true;

export const checkAuth = (req, res, next) => {

    console.log("Checking Authentication...");

    if (success) {
        console.log("Auth Checked");
        next(); 
    } else {
        console.log("Auth Failed");

        return res.status(401).json({
            message: "Unauthorized - Auth Failed"
        });
    }
};
