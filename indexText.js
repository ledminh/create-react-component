module.exports = function getIndexText(componentName) {
    return "import { FunctionComponent } from \"react\";\n\nimport styles from './".concat(componentName, ".module.scss';\n\nconst ").concat(componentName, ":FunctionComponent = () => {\n\n    return (\n        <div className={styles.wrapper}>\n            \n        </div>\n    )\n}\n\nexport default ").concat(componentName, ";\n");
};
