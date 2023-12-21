import { describe, test } from "vitest";
import { expect } from "chai";
import { sum } from "../src/example.mjs";

describe("Example test fixture", () => {
  test("Example test", () => {
    expect(sum(1, 2)).to.equal(3);
  });
});
