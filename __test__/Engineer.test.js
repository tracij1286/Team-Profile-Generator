//Engineer Test
const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");
const { test } = require("@jest/globals");

//functions
test("creates an engineer object", () => {
  const engineer = new Engineer("Engineer1");

  expect(typeof engineer).toBe("object");
});

test("gets github username", () => {
  const engineer = new Engineer(
    "Manager",
    "1",
    "tracij50@gmail.com",
    "tracij1286github"
  );
  expect(engineer.github).toBe("tracij1286github");
});

test("getRole() returns Engineer", () => {
  const engineer = new Engineer("Manager1");

  expect(engineer.getRole()).toBe("Engineer");
});
