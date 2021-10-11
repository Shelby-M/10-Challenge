const Engineer = require("../lib/engineer");

test("Test Engineer Class", () => {
  const Shelby = new Engineer("Shelby, 27, shelbyfayemo@gmail.com");
  let boolean;
  if (typeof Shelby === "object") {
    boolean = true;
  } else {
    boolean = false;
  }
  expect(boolean).toBe(true);
  expect(Shelby.getRole()).toBe("Engineer");
});
