"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/models/Url.ts
var Url_exports = {};
__export(Url_exports, {
  Url: () => Url
});
module.exports = __toCommonJS(Url_exports);
var import_mongoose = require("mongoose");
var urlSchema = new import_mongoose.Schema({
  key: {
    type: String,
    required: true
  },
  receivedUrl: {
    type: String,
    required: true
  },
  generatedAt: Date
});
var Url = (0, import_mongoose.model)("Url", urlSchema);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Url
});
