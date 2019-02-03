"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParser = (format) => {
    if (format) {
        const parser = require(`./parsers/${format}`).default;
        return parser;
    }
    throw new Error("No format string supplied.");
};
var main_1 = require("./main");
exports.generate = main_1.generate;
var utils_1 = require("./utils");
exports.getHash = utils_1.getHash;
//# sourceMappingURL=index.js.map