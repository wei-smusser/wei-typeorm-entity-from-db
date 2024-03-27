import { EOL } from "os";

import path = require("path");

// TODO: change name


export default interface IGenerationOptions {
    resultsPath: string;
    pluralizeNames: boolean;
    noConfigs: boolean;
    convertCaseFile: "pascal" | "param" | "camel" | "none";
    convertCaseEntity: "pascal" | "camel" | "none";
    convertCaseProperty: "pascal" | "camel" | "snake" | "none";
    convertEol: "LF" | "CRLF";
    propertyVisibility: "public" | "protected" | "private" | "none";
    lazy: boolean;
    activeRecord: boolean;
    generateConstructor: boolean;
    customNamingStrategyPath: string;
    relationIds: boolean;
    strictMode: "none" | "?" | "!";
    skipSchema: boolean;
    indexFile: boolean;
    exportType: "named" | "default";
    weiEntities: boolean;
    superClassImportPath: string;
    superClassName: string;
}
 

export const eolConverter = {
    LF: "\n",
    CRLF: "\r\n",
};

export function getDefaultGenerationOptions(): IGenerationOptions {
    const generationOptions: IGenerationOptions = {
        resultsPath: path.resolve(process.cwd(), "output"),
        pluralizeNames: true,
        noConfigs: true,
        convertCaseFile: "pascal",
        convertCaseEntity: "pascal",
        convertCaseProperty: "camel",
        convertEol: EOL === "\n" ? "LF" : "CRLF",
        propertyVisibility: "none",
        lazy: false,
        activeRecord: false,
        generateConstructor: true,
        customNamingStrategyPath: "",
        relationIds: false,
        strictMode: "none",
        skipSchema: false,
        indexFile: false,
        exportType: "named",
        weiEntities: true,
        superClassImportPath: "../WeiBaseModel",
        superClassName: "WeiBaseModel"
    };
    return generationOptions;
}
