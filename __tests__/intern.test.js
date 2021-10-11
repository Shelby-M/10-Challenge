const Intern = require("../lib/intern");

test("Test Intern Class", () => {
  const Shelby = new Intern("Shelby, 27, shelbyfayemo@gmail.com");
  let boolean;
  if (typeof Shelby === "object") {
    boolean = true;
  } else {
    boolean = false;
  }
  expect(boolean).toBe(true);
  expect(Shelby.getRole()).toBe("Intern");
});
