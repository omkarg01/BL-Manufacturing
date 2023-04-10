async function main() {
  // Write your deployment files here
  const DataStorage = await ethers.getContractFactory(
    "DataStorage"
  );

  const dataStorage = await DataStorage.deploy();
  await dataStorage.deployed();

  console.log("DataStorage deployed to: ", dataStorage.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0x5F70045Ba710FBcDa09Fcce1091988459921860D