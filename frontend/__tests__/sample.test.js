describe("samplle test 101", () => {
  it("works as expected", () => {
    var age = 100;
    expect(1).toEqual(1);
    expect(age).toEqual(100);
  });
  it("handles ranges just fine", () => {
    const age = 200;
    expect(age).toBeGreaterThan(100);
  });
  it("makes a list of dog name", () => {
    const dogs = ["snicker", "hugo"];
    expect(dogs).toEqual(dogs);
    expect(dogs).toContain("snicker");
  });
});
