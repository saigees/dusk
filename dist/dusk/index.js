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

// src/dusk/index.ts
var dusk_exports = {};
__export(dusk_exports, {
  default: () => Dusk
});
module.exports = __toCommonJS(dusk_exports);
var Dusk = class {
  url;
  params;
  constructor(url, params) {
    if (params)
      this.params = params;
    this.url = this.replace_keys(url);
  }
  replace_keys(url) {
    let ur = `${url}`;
    let u = url.split("/").slice(3, url.split("/").length).map((z) => {
      let h = z.includes(":") ? z.replaceAll(":", "") : z;
      return h.toLowerCase();
    });
    if (this.params) {
      for (let j = 0; j < u.length; j++) {
        let z = u[j];
        for (let i = 0; i < Object.keys(this.params).length; i++) {
          let key = Object.keys(this.params)[i];
          let value = this.params[key];
          if (z.toLowerCase() === key.toLowerCase()) {
            ur = ur.replaceAll(`:${z}`, `${value}`);
            delete this.params[key];
            this.params = { ...this.params };
          }
        }
      }
    }
    return ur;
  }
  async fetch(data) {
    return fetch(this.url, data);
  }
  format() {
    let u = this.url;
    if (this.params) {
      for (let i = 0; i < Object.keys(this.params).length; i++) {
        let symbol = i == 0 ? "?" : "&";
        let key = Object.keys(this.params)[i];
        let value = this.params[key];
        u += `${symbol}${key}=${encodeURIComponent(value)}`;
      }
    }
    this.url = u;
    return this;
  }
};
//# sourceMappingURL=index.js.map