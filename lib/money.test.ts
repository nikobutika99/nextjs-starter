import { describe, it, expect } from "vitest";
import { formatCents } from "./money";

describe("formatCents", () => {
  it("formats whole euros", () => {
    expect(formatCents(1000)).toBe("10.00");
  });

  it("formats cents", () => {
    expect(formatCents(1234)).toBe("12.34");
  });
});
