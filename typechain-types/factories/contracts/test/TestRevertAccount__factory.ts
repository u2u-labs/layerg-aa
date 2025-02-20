/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { PayableOverrides } from "../../../common";
import type {
  TestRevertAccount,
  TestRevertAccountInterface,
} from "../../../contracts/test/TestRevertAccount";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_ep",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "revertLong",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "bytes32",
            name: "accountGasLimits",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "gasFees",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct PackedUserOperation",
        name: "",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "missingAccountFunds",
        type: "uint256",
      },
    ],
    name: "validateUserOp",
    outputs: [
      {
        internalType: "uint256",
        name: "validationData",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080601f6101aa38819003918201601f19168301916001600160401b038311848410176100745780849260209460405283398101031261006f57516001600160a01b0381169081900361006f57600080546001600160a01b03191691909117905560405161011f908161008b8239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe60806040526004361015601157600080fd5b6000803560e01c90816319822f7c146036575063be76c6ef14603257600080fd5b60ce565b3460c35760031960603682011260ca576004359067ffffffffffffffff821160c657610120913603011260c357805481906001600160a01b0316803b1560c05760246080809263b760faf960e01b825230608452604435905af190811560b4575060a7575b60405160008152602090f35b60b06080604052565b609b565b604051903d90823e3d90fd5b50fd5b80fd5b8280fd5b5080fd5b3460e457602036600319011260e4576004356000fd5b600080fdfea264697066735822122023ce6d14d7abb850f5907005d12c0ada9530b846093c3a7a18f0a4edff9491c064736f6c63430008130033";

type TestRevertAccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestRevertAccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestRevertAccount__factory extends ContractFactory {
  constructor(...args: TestRevertAccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _ep: AddressLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_ep, overrides || {});
  }
  override deploy(
    _ep: AddressLike,
    overrides?: PayableOverrides & { from?: string }
  ) {
    return super.deploy(_ep, overrides || {}) as Promise<
      TestRevertAccount & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TestRevertAccount__factory {
    return super.connect(runner) as TestRevertAccount__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestRevertAccountInterface {
    return new Interface(_abi) as TestRevertAccountInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TestRevertAccount {
    return new Contract(address, _abi, runner) as unknown as TestRevertAccount;
  }
}
