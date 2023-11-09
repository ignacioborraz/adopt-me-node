import assert from "assert";
import dao from "../../src/dao/factory.js";
const { Pet } = dao;

describe("Testing Pets", () => {
  const model = new Pet();
  const data = { name: "igni", specie: "dog" };
  let skip = 1;
  let limit = 5;
  let id = "65499f8dc08ef0966d08f7a4";
  it("CREATE - Must required name property", async () => {
    assert.ok(data.name);
  });
  it("CREATE - Must required specie property", async () => {
    assert.ok(data.specie);
  });
  it("CREATE - Name is a string", () => {
    assert.strictEqual(typeof data.name, "string");
  });
  it("CREATE - Specie is a string", () => {
    assert.strictEqual(typeof data.specie, "string");
  });
  it("READ - Skip & Limit are number", () => {
    assert.strictEqual(typeof skip, "number");
    assert.strictEqual(typeof limit, "number");
  });
  it("READ - Must response with an array", async () => {
    let response = await model.getAll(skip, limit);
    //console.log(response);
    assert.strictEqual(Array.isArray(response), true);
  });
  it("UPDATE - Id is a string", () => {
    assert.strictEqual(typeof id, "string");
  });
  it("UPDATE - Must response with an object", async () => {
    let response = await model.update(id, { specie: "gato" });
    //console.log(response);
    assert.strictEqual(typeof response, "object");
  });
  //it("", () => {});
  //it("", () => {});
  //it("", () => {});
  //it("", () => {});
});
