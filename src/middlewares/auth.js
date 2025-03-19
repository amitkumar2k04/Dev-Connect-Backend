// Handle Auth Middleware for all GET, POST, .... requests
const adminAuth = (req, res, next) => {
    console.log("Admin auth is getting checked");
    const token = "xiugsagc";
    const isAdminAuthorised = token === "xyz";
    if(!isAdminAuthorised){
        res.status(401).send("Unauthorised requets");
    } else {
        next();
    }
};

const userAuth = (req, res, next) => {
    console.log("User auth is getting checked");
    const token = "xyz";
    const isAdminAuthorised = token === "xyz";
    if(!isAdminAuthorised){
        res.status(401).send("Unauthorised requets");
    } else {
        next();
    }
};

module.exports = {
    adminAuth,
    userAuth,
};