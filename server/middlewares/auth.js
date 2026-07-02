
// const { getUser } = require("../services/auth");

// async function restrictToLoginUserOnly(req, res, next) {
//     const userToken = req.cookies?.token;

//     if (!userToken) {
//         return res.status(401).json({
//             success: false,
//             message: "No token found",
//         });
//     }

//     const user = getUser(userToken);

//     if (!user) {
//         return res.status(401).json({
//             success: false,
//             message: "Invalid token",
//         });
//     }

//     req.user = user;
//     next();
// }

// module.exports = { restrictToLoginUserOnly };


const { getUser } = require("../services/auth");

async function restrictToLoginUserOnly(req, res, next) {

    console.log("Cookies:", req.cookies);

    const userToken = req.cookies?.token;
    console.log("Token:", userToken);

    if (!userToken) {
        return res.status(401).json({
            success: false,
            message: "No token found",
        });
    }

    const user = getUser(userToken);
    console.log("Decoded User:", user);

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