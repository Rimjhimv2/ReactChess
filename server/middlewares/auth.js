// const { getUser } = require("../services/auth");

// async function restrictToLoginUserOnly(req, res, next) {
//     const userToken = req.cookies?.token; // Assuming token is stored in cookies
//     if (!userToken) {
//         console.error("No token found in cookies");
//         return res.redirect("/login");
//     }

//     const user = getUser(userToken); // Directly use getUser synchronously

//     if (!user) {
//         console.error("Invalid token or user not found");
//         return res.redirect("/login");
//     }

//     req.user = user; // Set user information in req object
//     next(); // Proceed to next middleware or route handler
// }

// module.exports = {
//     restrictToLoginUserOnly,
// };






// const { getUser } = require("../services/auth");

// async function restrictToLoginUserOnly(req, res, next) {
//     const userToken = req.cookies?.token;

//     if (!userToken) {
//         console.error("No token found in cookies");
//         return res.status(401).json({
//             success: false,
//             message: "Unauthorized: No token",
//         });
//     }

//     const user = getUser(userToken);

//     if (!user) {
//         console.error("Invalid token or user not found");
//         return res.status(401).json({
//             success: false,
//             message: "Unauthorized: Invalid token",
//         });
//     }

//     req.user = user;
//     next();
// }

// module.exports = {
//     restrictToLoginUserOnly,
// };


// const { getUser } = require("../services/auth");

// function restrictToLoginUserOnly(req, res, next) {
//     const userToken = req.cookies?.token;

//     // No token → Just send JSON, do NOT redirect
//     if (!userToken) {
//         return res.status(401).json({ error: "Not authenticated" });
//     }

//     const user = getUser(userToken);

//     if (!user) {
//         return res.status(403).json({ error: "Invalid or expired token" });
//     }

//     req.user = user;
//     next();
// }

// module.exports = { restrictToLoginUserOnly };





const { getUser } = require("../services/auth");

async function restrictToLoginUserOnly(req, res, next) {
    const userToken = req.cookies?.token;

    if (!userToken) {
        return res.status(401).json({
            success: false,
            message: "No token found",
        });
    }

    const user = getUser(userToken);

    if (!user) {
        return res.status(401).json({
            success: false,
            message: "Invalid token",
        });
    }

    req.user = user;
    next();
}

module.exports = { restrictToLoginUserOnly };
