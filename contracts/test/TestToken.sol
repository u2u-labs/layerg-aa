// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestToken is ERC20 {
    constructor ()
        // solhint-disable-next-line no-empty-blocks
        ERC20("TST", "TestToken") {
    }

    function mint(address sender, uint256 amount) external {
        _mint(sender, amount);
    }
}
