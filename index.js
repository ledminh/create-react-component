function run() {
    var fs = require('fs');
    var getIndexText = require('./indexText');
    if (process.argv.length < 3)
        throw Error('Component name not found');
    var argv = require('yargs').argv;
    var path = null;
    if (argv.p) {
        path = argv.p;
        if (path[path.length - 1] !== '/')
            path = path + '/';
    }
    var componentNames = argv._;
    componentNames.forEach(function (componentName) {
        var indexText = getIndexText(componentName);
        fs.mkdir((path ? path : '') + componentName, { recursive: true }, function (err) {
            if (err)
                throw err;
            fs.writeFileSync((path ? path : '') + componentName + '/index.tsx', indexText);
            fs.writeFileSync((path ? path : '') + componentName + "/".concat(componentName, ".module.scss"), '');
        });
    });
}
if (require.main == module)
    run();
