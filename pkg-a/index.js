import base32Decode from "base32-decode";

export function foo() {
  base32Decode("", "Crockford");
  throw new Error("Test error");
}
