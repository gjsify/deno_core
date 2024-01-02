import fg from 'fast-glob';
import fs from 'fs';
import path from 'path';

const jsPlaceholder = `export {}`;

const dtsFiles = fg.sync('core/**/*.d.ts');
for (const dtsFile of dtsFiles) {
    const dTsDest = dtsFile.replace(/^core\//, "lib/");
    console.info(`${dtsFile} -> ${dTsDest}`);
    fs.mkdirSync(path.dirname(dTsDest), { recursive: true });
    fs.copyFileSync(dtsFile, dTsDest);

    const jsFile = dTsDest.replace(/\.d\.ts$/, ".js");

    // Create a placeholder js file if no js file for this .d.ts file exists.
    if (!fs.existsSync(jsFile)) {
        console.info(`Create ${jsFile}`);
        fs.writeFileSync(jsFile, jsPlaceholder);
    }
}
