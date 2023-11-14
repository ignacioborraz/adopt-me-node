import "dotenv/config.js";
import { expect } from "chai";
import supertest from "supertest";
import dao from "../../src/dao/factory.js";
const { Pet } = dao;

const requester = supertest(`http://localhost:${process.env.PORT}/api`);

describe("Testing PETS with AUTH", () => {
  const model = new Pet();
  const data_pet = { name: "igni", specie: "dog" };
  let id_pet = null;
  let data_user = {
    first_name: "ignacio",
    last_name: "borraz",
    email: "igna@coder.com",
    password: "hola1234",
    role: "admin",
  };
  let id_user = null;
  let token = {};
  it("Must register a user", async () => {
    const response = await requester.post("/sessions/register").send(data_user);
    const { _body, statusCode } = response;
    id_user = _body.payload._id;
    expect(statusCode).to.be.equals(201);
  });
  it("Must log in an admin user", async () => {
    const response = await requester.post("/sessions/login").send(data_user);
    const { statusCode, headers } = response;
    //console.log(headers["set-cookie"][0]);
    token.key = headers["set-cookie"][0].split("=")[0];
    token.value = headers["set-cookie"][0].split("=")[1];
    //console.log(token);
    expect(statusCode).to.be.equals(200);
  });
  it("Must create a pet and respond with statusCode = 201", async () => {
    const response = await requester
      .post("/pets")
      .send(data_pet)
      .set("Cookie", [token.key + "=" + token.value]);
    const { _body, statusCode } = response;
    //console.log({ _body,statusCode });
    id_pet = _body.payload._id;
    expect(statusCode).to.be.equals(201);
  });
  it("Must respond with an array of pets", async () => {
    const response = await requester.get("/pets");
    const { _body } = response;
    //console.log(_body);
    expect(Array.isArray(_body.payload)).to.be.equals(true);
  });
  it("Must update a pet", async () => {
    const before = await model.getBy(id_pet);
    const response = await requester
      .put("/pets/" + id_pet)
      .send({ name: "emi" })
      .set("Cookie", [token.key + "=" + token.value]);
    //const { _body,statusCode } = response
    //console.log({ _body,statusCode });
    const after = await model.getBy(id_pet);
    //expect(statusCode).to.be.equals(200)
    expect(before === after).to.be.equals(false);
  });
  it("Must destroy a pet", async () => {
    const response = await requester
      .delete("/pets/" + id_pet)
      .set("Cookie", [token.key + "=" + token.value]);
    //const { _body,statusCode  } = response
    //console.log({ _body,statusCode });
    //expect(statusCode).to.be.equals(200)
    const found = await model.getBy(id_pet);
    expect(found).not.to.be.ok;
  });
  it("Must sign out an admin user", async()=> {
    const response = await requester.post("/sessions/signout").set("Cookie", [token.key + "=" + token.value])
    const { statusCode,_body }= response
    expect(statusCode).to.be.equals(200)
  })
  it("Must destroy a user", async () => {
    let response = await requester.delete("/users/" + id_user);
    const { statusCode } = response;
    expect(statusCode).to.be.equals(200);
  });
});
