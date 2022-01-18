const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ERC20 contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const ERC20 = await ethers.getContractFactory("ERC20");

    const hardhatERC20 = await ERC20.deploy("TesterToken", "TT");

    const ownerBalance = await hardhatERC20.balanceOf(owner.address);
    expect(await hardhatERC20.totalSupply()).to.equal(ownerBalance);
  });
});