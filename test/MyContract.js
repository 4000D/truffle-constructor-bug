const MyContract = artifacts.require("MyContract.sol");
const MyContractBroken = artifacts.require("MyContractBroken.sol");

contract("MyContract", async () => {
  // contract instances
  let normal, broken;

  before(async () => {
    normal = await MyContract.new([1,2,3]);
    broken = await MyContractBroken.new([1,2,3]);
  });

  it("#normal.arr", async () => {
    const arr0 = await normal.arr(0);
    const arr1 = await normal.arr(1);
    const arr2 = await normal.arr(2);

    assert.equal(arr0.valueOf(), 1, "arr[0] fetched correctly");
    assert.equal(arr1.valueOf(), 2, "arr[1] fetched correctly");
    assert.equal(arr2.valueOf(), 3, "arr[2] fetched correctly");
  });

  it("#broken.arr", async () => {
    const arr0 = await broken.arr(0); // Promise thrown with "invalid opcode"
    const arr1 = await broken.arr(1);
    const arr2 = await broken.arr(2);

    assert.equal(arr0.valueOf(), 1, "arr[0] fetched correctly");
    assert.equal(arr1.valueOf(), 2, "arr[1] fetched correctly");
    assert.equal(arr2.valueOf(), 3, "arr[2] fetched correctly");
  });
})
