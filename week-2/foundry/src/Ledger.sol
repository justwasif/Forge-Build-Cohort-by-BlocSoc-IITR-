// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.18;

contract Ledger {
    mapping (address user => uint256 amount) public balance;

    function deposit() public payable{
        balance[msg.sender]+=msg.value;
    }
    function userBalance(address _userAddress) public view returns(uint256){
        return balance[_userAddress];
    }
    function contractBalance() public view returns(uint256){
        return address(this).balance;
    }


    
}