import {Writer} from "../Writer";
import {Translation} from "./Translation";
import path from "path";
import {Dir} from "../dir/Dir";
const fs = require("fs");

export class TranslationConstantsWriter implements Writer<Translation[]> {

    constructor(
        private readonly constantsDir: Dir,
    ) {}

    write(translations: Translation[]): void {
        const data: string = `export class TR {\n${translations.map((translation) => `\tpublic static ${translation.getCode()} = '${translation.getCode()}';`)}\n}`;
        fs.writeFileSync(path.join(this.constantsDir.dirPath(), 'TR.ts'), data);
    }

}
