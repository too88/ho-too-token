// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity = 0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Token is ERC20 {
    constructor (string memory name, string memory symbol, uint amount) ERC20(name, symbol ) {
        _mint(msg.sender, amount * 10 ** uint(decimals()));
    }
}