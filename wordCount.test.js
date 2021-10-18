const { filteredUserInput } = require("./index")

test("Empty string", () => {
  expect(filteredUserInput("").length).toBe(0)
})

test("Multiple spaces", () => {
  expect(filteredUserInput("   ").length).toBe(0)
})