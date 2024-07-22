"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/routes/generate-shortened-url.ts
var generate_shortened_url_exports = {};
__export(generate_shortened_url_exports, {
  generateShortenedUrl: () => generateShortenedUrl
});
module.exports = __toCommonJS(generate_shortened_url_exports);
var import_node_crypto = require("crypto");
var import_mongoose2 = __toESM(require("mongoose"));

// src/models/Url.ts
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

// src/env.ts
var import_zod = require("zod");
var envSchema = import_zod.z.object({
  NODE_ENV: import_zod.z.enum(["development", "production"]),
  MONGO_USER: import_zod.z.string(),
  MONGO_PASSWORD: import_zod.z.string()
});
var env = envSchema.parse(process.env);

// src/routes/generate-shortened-url.ts
function generateShortenedUrl(req, res) {
  return __async(this, null, function* () {
    const url = req.body.url;
    const key = (0, import_node_crypto.randomBytes)(8).toString("hex");
    const baseUrl = env.NODE_ENV === "development" ? "http://localhost:3000" : "http://u.sitecom.com.br";
    const redirectUrl = `${baseUrl}/redirect?to=${key}`;
    import_mongoose2.default.connect(`mongodb+srv://${env.MONGO_USER}:${env.MONGO_PASSWORD}@urlshortner.yqm8lst.mongodb.net/urls?retryWrites=true&w=majority&appName=urlshortner`);
    const newUrl = new Url({
      receivedUrl: url,
      key,
      generatedAt: /* @__PURE__ */ new Date()
    });
    yield newUrl.save();
    res.status(200).json({ url: redirectUrl });
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  generateShortenedUrl
});
