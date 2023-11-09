import { expect } from "chai"
import dao from "../../src/dao/factory.js"
import { Types } from "mongoose"
const { Pet } = dao

describe("Testing Pets",()=>{
  const model = new Pet();
  const data = { name: "igni", specie: "dog" };
  let skip = 1;
  let limit = 5;
  let id1 = null
  let id2 = null
  it("CREATE - Must return an object",async()=>{
    let response = await model.create(data)
    id1 = response._id
    console.log(response);
    expect(response).to.be.an("object")
  })
  it("CREATE - Must return an object with an _id property",async()=>{
    let response = await model.create(data)
    id2 = response._id
    //console.log(response);
    //expect(response._id).to.be.ok
    expect(response).to.have.property("_id")
  })
  it("ONE - Must required an id (string)",async ()=>{
    expect(id1).to.be.an.instanceOf(Types.ObjectId)
  })
  it("READ - Must response with an array",async ()=>{
    let response = await model.getAll(skip,limit)
    expect(Array.isArray(response)).to.be.equals(true)
  })
  it("UPDATE - Must return an object",async()=>{
    let response = await model.update(id1,{ name: "roro"})
    expect(response).to.be.an("object")
  })
  it("UPDATE - Must return a different object",async()=>{
    let before = await model.getBy(id2)
    let after = await model.update(id2,{ name: "sol"})
    expect(before===after).to.be.equals(false)
  })
  it("DESTROY - Must response with an object",async()=>{
    let response = await model.delete(id1)
    expect(response).to.be.an("object")
  })
  it("DESTROY - Must verify that the object was deleted",async()=>{
    await model.delete(id2)
    let found = await model.getBy(id2)
    //console.log(found);
    expect(found).not.to.be.ok
  })
})