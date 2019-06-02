import formatMoney from "../lib/formatMoney";

describe("format money function", () => {
  it("works with fractional values", () => {
    expect(formatMoney(1)).toEqual("$0.01");
    expect(formatMoney(10)).toEqual("$0.10");
    expect(formatMoney(9)).toEqual("$0.09");
    expect(formatMoney(40)).toEqual("$0.40");
  });
  it("leaves cents off for whole dollars", () => {
    expect(formatMoney(5000)).toEqual("$50");
  });
  it("works well with whole and fractional dollars", () => {
    expect(formatMoney(5012)).toEqual("$50.12");
  });
});
