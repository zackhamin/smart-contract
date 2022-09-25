import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("hello world", () => {
  it("should say hi", async () => {
    //set up
    //deploy
    //call our function to test

    //deploy
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const hello = await HelloWorld.deploy();
    await hello.deployed();

    expect(await hello.hello()).to.equal("hello, world");
  });
});
