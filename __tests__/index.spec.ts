import { dummy } from "../lib";

describe("index function dummy", () => {
  test("It returns 10", () => {
    expect(dummy()).toEqual(10);
  });
});