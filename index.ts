
import fs from 'fs';
import getIndexText from './indexText';


function run() {


    if(process.argv.length < 3)
        throw Error('Component name not found');

    const argv = require('yargs').argv;

    
    let path:string|null = null;
    
    if(argv.p) {
        path = argv.p as string;
        
        if(path[path.length - 1] !== '/')
            path = path + '/';
    }
    
    const componentNames:string[] = argv._;

    
    componentNames.forEach(componentName => {
        const indexText = getIndexText(componentName);
    
        fs.mkdir((path? path : '') + componentName, {recursive:true}, (err) => {
            if(err) throw err;
        
            fs.writeFileSync((path? path : '') + componentName + '/index.tsx', indexText);
        
            fs.writeFileSync((path? path : '') + componentName + `/${componentName}.module.scss`, '');
        });
    })
}

if(require.main == module)
    run();
