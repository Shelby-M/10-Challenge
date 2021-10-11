const { expect } = require("@jest/globals");
const Manager = require("../lib/Intern");

test("Test Manager Class", () => {
  const Manager = new Manager("Shelby, 27, shelbyfayemo@gmail.com, 8");
  expect(Manager.name).toBe(expect.any(String));
  expect(Manager.id).toBe(expect.any(String));
  expect(Manager.email).toBe(expect.any(String));
  expect(Manager.officeNumber).toBe(expect.any(String));
});
