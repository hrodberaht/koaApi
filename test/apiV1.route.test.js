process.env.PORT = 3001;
const server = require("../src/server");

const request = require("supertest");

afterEach(() => {
  server.close();
});
describe("routes: api/v1", () => {
  test("should respond as expected", async () => {
    const response = await request(server).get("/api/v1");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body.message).toEqual("works");
  });
});

describe("routes: api/v1/products", () => {
  test("should respond as expected", async () => {
    const response = await request(server).get("/api/v1/products");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    //expect(response.body.message).toEqual("works");
  });
});
