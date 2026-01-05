// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.18;

import "forge-std/Script.sol";
import "../src/SimpleStorage.sol";

contract DeploySimpleStorage is Script{
    function run() external returns(SimpleStorage){
        vm.startBroadcast();
        SimpleStorage simpleStorage=new SimpleStorage();
        vm.stopBroadcast();
        return simpleStorage;
    }
    // address :0x5FbDB2315678afecb367f032d93F642f64180aa3
}