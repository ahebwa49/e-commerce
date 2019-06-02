describe("mock learning", () => {
  it("mocks a reg function", () => {
    const fetchDogs = jest.fn();
    fetchDogs();
    fetchDogs("snickers");
    expect(fetchDogs).toHaveBeenCalledTimes(2);
    expect(fetchDogs).toHaveBeenCalledWith("snickers");
  });
});
