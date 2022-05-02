module.exports = (req, res, next) => {
    if(req.cookies.cookieComision13){
        req.session.color = req.cookies.cookieComision13;
    }
    next()
}