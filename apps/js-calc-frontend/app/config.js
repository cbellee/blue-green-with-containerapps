var config = {}

config.endpoint = process.env.ENDPOINT;
config.instrumentationKey = process.env.INSTRUMENTATIONKEY;
config.port = process.env.PORT || 8080;
config.cacheEndPoint = process.env.CACHEENDPOINT;
config.laggy = process.env.LAGGY;
config.buggy = process.env.BUGGY;

config.version = "default - latest";

if (process.env.VERSION && process.env.VERSION.length > 0)
{
    console.log('found version environment variable');
    config.version = process.env.VERSION;
}
else {
    const fs = require('fs');
    if (fs.existsSync('version/info.txt')) {
    console.log('found version file');
    config.version = fs.readFileSync('version/info.txt', 'utf8');
    }
}

module.exports = config;