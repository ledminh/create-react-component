import fs from 'fs';
import getIndexText from './indexText';


function main() {



    if(process.argv.length < 3)
        throw Error('Component name not found');
    
    const pathPointerIndex = process.argv.indexOf('-p');
    
    let path:string|null = null;
    
    if(pathPointerIndex !== -1) {
        path = process.argv[pathPointerIndex + 1];
        
        if(path[path.length - 1] !== '/')
        path = path + '/';
    }
    
    const componentNames = process.argv.slice(2).filter(elem => elem !== '-p' && elem !== path?.slice(0, path.length - 1));

    
    componentNames.forEach(componentName => {
        const indexText = getIndexText(componentName);
    
        fs.mkdir((path? path : '') + componentName, {recursive:true}, (err) => {
            if(err) throw err;
        
            fs.writeFileSync((path? path : '') + componentName + '/index.tsx', indexText);
        
            fs.writeFileSync((path? path : '') + componentName + `/${componentName}.module.scss`, '');
        });
    })
}



export default main;
