require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {},
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/64c90deaa0ca4197b80a64b5140898fe",
      accounts: [
        "ecf93f4a5a4c186309cb3f9190be78238fcc7f6815d61c97e0b53c0dae3f7bd2",
      ],
    },
  },
};
