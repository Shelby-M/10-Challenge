const Employee = require("../lib/employee");

test("Test Employee Class", () => {
  const Shelby = new Employee("Shelby, 27, shelbyfayemo@gmail.com");
  let boolean;
  if (typeof Shelby === "object") {
    boolean = true;
  } else {
    boolean = false;
  }
  expect(boolean).toBe(true);
  expect(Shelby.getRole()).toBe("Employee");
});
