const request = require("supertest");
const app = require("./app");

describe("GET /api/grades", () => {
  it("должен возвращать статус 200 и массив с оценками студентов", async () => {
    const res = await request(app).get("/api/grades");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body.length).toBe(3);
    expect(res.body[0]).toHaveProperty("grade");
  });
});
