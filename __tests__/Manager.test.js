const Manager = require("../lib/manager");

test("Test Manager Class", () => {
  const Shelby = new Manager("Shelby, 27, shelbyfayemo@gmail.com");

  let boolean;
  if (typeof Shelby === "object") {
    boolean = true;
  } else {
    boolean = false;
  }
  expect(boolean).toBe(true);
  expect(Shelby.getRole()).toBe("Manager");
});
