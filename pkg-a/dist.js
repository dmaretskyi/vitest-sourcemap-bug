var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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

// ../node_modules/.pnpm/base32-decode@1.0.0/node_modules/base32-decode/index.js
var require_base32_decode = __commonJS({
  "../node_modules/.pnpm/base32-decode@1.0.0/node_modules/base32-decode/index.js"(exports, module) {
    var RFC4648 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
    var RFC4648_HEX = "0123456789ABCDEFGHIJKLMNOPQRSTUV";
    var CROCKFORD = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
    function readChar(alphabet, char) {
      var idx = alphabet.indexOf(char);
      if (idx === -1) {
        throw new Error("Invalid character found: " + char);
      }
      return idx;
    }
    module.exports = function base32Decode2(input, variant) {
      var alphabet;
      switch (variant) {
        case "RFC3548":
        case "RFC4648":
          alphabet = RFC4648;
          input = input.replace(/=+$/, "");
          break;
        case "RFC4648-HEX":
          alphabet = RFC4648_HEX;
          input = input.replace(/=+$/, "");
          break;
        case "Crockford":
          alphabet = CROCKFORD;
          input = input.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1");
          break;
        default:
          throw new Error("Unknown base32 variant: " + variant);
      }
      var length = input.length;
      var bits = 0;
      var value = 0;
      var index = 0;
      var output = new Uint8Array(length * 5 / 8 | 0);
      for (var i = 0; i < length; i++) {
        value = value << 5 | readChar(alphabet, input[i]);
        bits += 5;
        if (bits >= 8) {
          output[index++] = value >>> bits - 8 & 255;
          bits -= 8;
        }
      }
      return output.buffer;
    };
  }
});

// index.js
var import_base32_decode = __toESM(require_base32_decode(), 1);
function foo() {
  (0, import_base32_decode.default)("", "Crockford");
  throw new Error("Test error");
}
export {
  foo
};
//# sourceMappingURL=dist.js.map
