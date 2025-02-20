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
import type { NonPayableOverrides } from "../../../common";
import type {
  TestPaymasterRevertCustomError,
  TestPaymasterRevertCustomErrorInterface,
} from "../../../contracts/test/TestPaymasterRevertCustomError";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "customReason",
        type: "string",
      },
    ],
    name: "CustomError",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "unstakeDelaySec",
        type: "uint32",
      },
    ],
    name: "addStake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
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
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IPaymaster.PostOpMode",
        name: "mode",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "actualGasCost",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "actualUserOpFeePerGas",
        type: "uint256",
      },
    ],
    name: "postOp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum TestPaymasterRevertCustomError.RevertType",
        name: "_revertType",
        type: "uint8",
      },
    ],
    name: "setRevertType",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockStake",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "userOpHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "maxCost",
        type: "uint256",
      },
    ],
    name: "validatePaymasterUserOp",
    outputs: [
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "validationData",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
    ],
    name: "withdrawStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a080604052346101985780610b38803803809161001d828561019d565b83396020928391810103126101985751906001600160a01b03808316908184036101985760008054336001600160a01b03198216811783556040519492938693869360249385939091167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08880a36301ffc9a760e01b8252631313998b60e31b60048301525afa91821561018b57819261014a575b505015610106575060805260405161096190816101d78239608051818181610110015281816101ca015281816104510152818161049d01528181610525015281816105aa01528181610636015261089e0152f35b6064906040519062461bcd60e51b82526004820152601e60248201527f49456e747279506f696e7420696e74657266616365206d69736d6174636800006044820152fd5b9091508281813d8311610184575b610162818361019d565b81010312610180575190811515820361017d575038806100b2565b80fd5b5080fd5b503d610158565b50604051903d90823e3d90fd5b600080fd5b601f909101601f19168101906001600160401b038211908210176101c057604052565b634e487b7160e01b600052604160045260246000fdfe6080604052600436101561001257600080fd5b60003560e01c80630396cb60146100e7578063205c2878146100e25780632cd10339146100dd57806352b7512c146100d8578063715018a6146100d35780637c627b21146100ce5780638da5cb5b146100c9578063b0d691fe146100c4578063bb9fe6bf146100bf578063c23a5cea146100ba578063c399ec88146100b5578063d0e30db0146100b05763f2fde38b146100ab57600080fd5b610693565b610627565b61057d565b6104f4565b610480565b61043b565b610412565b6103b7565b61035c565b6102b8565b61022e565b610199565b600060203660031901126101805760043563ffffffff811680910361017c5761010e61075a565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316908290823b1561017c57602460405180948193621cb65b60e51b8352600483015234905af180156101775761016b575080f35b6101749061085a565b80f35b610890565b5080fd5b80fd5b6001600160a01b0381160361019457565b600080fd5b346101945760006040366003190112610180576004356101b881610183565b6101c061075a565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811691839190833b1561022a5760449083604051958694859363040b850f60e31b855216600484015260243560248401525af180156101775761016b575080f35b8280fd5b34610194576020366003190112610194576004356002811015610194576000805460ff60a01b191660a09290921b60ff60a01b16919091179055005b91906040835280519081604085015260005b8281106102a25750506020606082600082819588010152601f8019910116850101930152565b806020809284010151606082880101520161027c565b34610194576003196060368201126101945760043567ffffffffffffffff9182821161019457610120908236030112610194576102f361089c565b6004013561030081610183565b6040805160609290921b6bffffffffffffffffffffffff19166020830152601482528101918211818310176103465781604052603f1990610341818461026a565b030190f35b634e487b7160e01b600052604160045260246000fd5b34610194576000806003193601126101805761037661075a565b80546001600160a01b03198116825581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b3461019457608036600319011261019457600360043510156101945760243567ffffffffffffffff80821161019457366023830112156101945781600401359081116101945736910160240111610194576104106107b2565b005b34610194576000366003190112610194576000546040516001600160a01b039091168152602090f35b34610194576000366003190112610194576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b34610194576000806003193601126101805761049a61075a565b807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316803b156104f157819060046040518094819363bb9fe6bf60e01b83525af180156101775761016b575080f35b50fd5b3461019457600060203660031901126101805760043561051381610183565b61051b61075a565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811691839190833b1561022a5760249083604051958694859363611d2e7560e11b85521660048401525af180156101775761016b575080f35b3461019457600080600319360112610180576040516370a0823160e01b81523060048201526020816024817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa9081156101775782916105f1575b604051828152602090f35b0390f35b90506020813d821161061f575b8161060b6020938361086e565b8101031261017c576105ed915051386105e2565b3d91506105fe565b600080600319360112610180577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681813b156101805760405163b760faf960e01b8152306004820152918290602490829034905af180156101775761016b575080f35b34610194576020366003190112610194576004356106b081610183565b6106b861075a565b6001600160a01b03908116801561070657600080546001600160a01b03198116831782559092167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b6000546001600160a01b0316330361076e57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b6107ba61089c565b60ff60005460a01c166107cc8161090b565b80610836576040516346b7545f60e11b815260206004820152603660248201527f746869732069732061206c6f6e672072657665727420726561736f6e2073747260448201527534b733903bb29030b932903637b7b5b4b733903337b960511b6064820152608490fd5b8061084260019261090b565b1461084957565b63deaddead60e01b60005260206000fd5b67ffffffffffffffff811161034657604052565b90601f8019910116810190811067ffffffffffffffff82111761034657604052565b6040513d6000823e3d90fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031633036108ce57565b60405162461bcd60e51b815260206004820152601560248201527414d95b99195c881b9bdd08115b9d1c9e541bda5b9d605a1b6044820152606490fd5b6002111561091557565b634e487b7160e01b600052602160045260246000fdfea2646970667358221220bce9093f945cc64912b8519d36a0bd96d04c787056f03a213eff8259218e874064736f6c63430008130033";

type TestPaymasterRevertCustomErrorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestPaymasterRevertCustomErrorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestPaymasterRevertCustomError__factory extends ContractFactory {
  constructor(...args: TestPaymasterRevertCustomErrorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _entryPoint: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_entryPoint, overrides || {});
  }
  override deploy(
    _entryPoint: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_entryPoint, overrides || {}) as Promise<
      TestPaymasterRevertCustomError & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): TestPaymasterRevertCustomError__factory {
    return super.connect(runner) as TestPaymasterRevertCustomError__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestPaymasterRevertCustomErrorInterface {
    return new Interface(_abi) as TestPaymasterRevertCustomErrorInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TestPaymasterRevertCustomError {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as TestPaymasterRevertCustomError;
  }
}
