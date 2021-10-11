const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("Test Employee Class", () => {
  const Employee = new Employee("Shelby", 27, "shelbyfayemo@gmail.com");
  expect(Employee.name).toBe(expect.any(String));
  expect(Employee.id).toBe(expect.any(String));
  expect(Employee.email).toBe(expect.any(String));
});
