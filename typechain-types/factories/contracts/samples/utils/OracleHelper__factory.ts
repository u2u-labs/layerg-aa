/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  OracleHelper,
  OracleHelperInterface,
} from "../../../../contracts/samples/utils/OracleHelper";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "currentPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cachedPriceTimestamp",
        type: "uint256",
      },
    ],
    name: "TokenPriceUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "cachedPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cachedPriceTimestamp",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "force",
        type: "bool",
      },
    ],
    name: "updateCachedPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class OracleHelper__factory {
  static readonly abi = _abi;
  static createInterface(): OracleHelperInterface {
    return new Interface(_abi) as OracleHelperInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): OracleHelper {
    return new Contract(address, _abi, runner) as unknown as OracleHelper;
  }
}
