// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.18;

import {Script} from "forge-std/Script.sol";
import {nft} from "../src/nft.sol";

contract DeployBasicNft is Script{
    

    function run() external returns (BasicNft){
            vm.startBroadcast();
            nft basicNft=new nft();
            vm.stopBroadcast();
            return basicNft;

        }
    }
