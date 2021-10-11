const { expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("Test Intern Class", () => {
  const Intern = new Intern("Shelby, 27, shelbyfayemo@gmail.com, UNCC");
  expect(intern.name).toBe(expect.any(String));
  expect(intern.id).toBe(expect.any(String));
  expect(intern.email).toBe(expect.any(String));
  expect(intern.school).toBe(expect.any(String));
});
