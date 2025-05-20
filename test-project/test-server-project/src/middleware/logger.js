const logger = (req, res, next) =>{
    console.log(`Request From ${req.hostname} || ${req.method} - ${req.url} at ${new Date().toLocaleTimeString()}`);
    next()
}
module.exports = logger