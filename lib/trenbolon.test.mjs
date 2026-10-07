import assert from "node:assert/strict";
import test from "node:test";
import { greeting } from "./trenbolon.mjs";
test("greeting includes the name", () => {
  assert.equal(greeting("Anna"), "I'm sexy and i know it, Anna");
});