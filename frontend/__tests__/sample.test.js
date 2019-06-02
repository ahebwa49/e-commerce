describe("sample test 101", () => {
  it("works as expected", () => {
    var age = 100;
    expect(age).toBe(100);
    expect(age).toEqual(100);
  });
  it("handles ranges just fine", () => {
    var age = 100;
    var gender = true;
    var name = "asaba";
    expect(age).toBe(100);
    expect(age).toBeGreaterThan(50);
    expect(gender).toBeTruthy();
    expect(name).toMatch("asaba");
  });
  it("makes a list of dog names", () => {
    var dogs = ["shrug", "tom"];
    expect(dogs).toHaveLength(2);
    expect(dogs).toContainEqual("shrug");
    expect(dogs).toContain("tom");
  });
});