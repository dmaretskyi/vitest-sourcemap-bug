import { test } from "vitest";
import { foo } from "pkg-a";

test("repro", () => {
  foo();
});
