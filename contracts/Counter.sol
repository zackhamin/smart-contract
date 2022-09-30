pragma solidity 0.8.17;

import 'hardhat/console.sol';

contract Counter {
    uint counter;

    function count() public {
        counter++;
        console.log("Counter is now", counter);
  
    }

    function getCounter() public view returns(uint) {
        return counter;
    }
}