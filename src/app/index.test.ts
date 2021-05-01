import getHelloMessage from "./index";

it("Test getHelloMessage returns expected message", () => {
  expect(getHelloMessage()).toBe("Hello!");
});
