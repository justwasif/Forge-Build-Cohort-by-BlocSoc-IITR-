// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.18;
import {Ledger} from "../src/Ledger.sol";
import {DeployLedger} from "../script/DeployLedger.s.sol";
import {Test,console} from "forge-std/Test.sol";


contract testLegger is Test{
    Ledger deployLedger;
    function setUp() public{
        deployLedger=new Ledger();
        
    }
    function testDepositContract() public{
        //10 eth contract to dete hai
        vm.deal(address(this),10 ether);
        deployLedger.deposit{value:2 ether}();
        uint256 ContractBalance=address(deployLedger).balance;
        console.log(ContractBalance);
        assertEq(ContractBalance,2 ether);

        


    }

    function testDepositeUser() public{
        vm.deal(address(this),10 ether);
        deployLedger.deposit{value:3 ether}();
        uint256 accountBalance=deployLedger.balance(address(this));
        console.log(accountBalance);
        assertEq(accountBalance,3 ether);
    }





}