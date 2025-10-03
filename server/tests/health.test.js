const request = require("supertest");
const app = require("../app"); // adjust if your main app file is named differently

describe("Health Check", () => {
  it("should return API is running", async () => {
    const res = await request(app).get("/api/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBeDefined();
  });
});
