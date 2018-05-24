pragma solidity 0.4.24;

contract MyContract {
  uint[] public arr;

  // works correctly in truffle test
  function MyContract(uint[] _arr) public {
    arr = _arr;
  }
}

contract MyContractBroken {
  uint[] public arr;

  // parameters are broken
  function constructor(uint[] _arr) public {
    arr = _arr;
  }
}
