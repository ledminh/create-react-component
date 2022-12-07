export default function getIndexText(componentName:string):string  {

    return `import { FunctionComponent } from "react";

import styles from './${componentName}.module.scss';

const ${componentName}:FunctionComponent = () => {

    return (
        <div className={styles.wrapper}>
            
        </div>
    )
}

export default ${componentName};
`
}