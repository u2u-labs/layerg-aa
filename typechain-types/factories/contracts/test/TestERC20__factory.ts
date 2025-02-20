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
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  TestERC20,
  TestERC20Interface,
} from "../../../contracts/test/TestERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "sudoApprove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "sudoMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "sudoTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a034620003fa57601f19906001600160401b0390601f62000e57388190038281018616840185811185821017620002fe57849282916040528339602093849181010312620003fa57519360ff85168503620003fa576200005f620003ff565b93600985526805465737445524332360bc1b848601526200007f620003ff565b946003908187526205432360ec1b868801528051838111620002fe5782546001928382811c92168015620003ef575b89831014620003d957818884931162000383575b508890888311600114620003205760009262000314575b505060001982851b1c191690821b1782555b8651928311620002fe5760049687548281811c91168015620002f3575b88821014620002de5786811162000293575b5086908685116001146200022a57849550908492916000956200021e575b50501b92600019911b1c19161783555b3315620001dd575060025469d3c21bcecceda100000092838201809211620001c857506000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91600255338352828152604083208481540190556040519384523393a3608052604051610a379081620004208239608051816103e40152f35b601190634e487b7160e01b6000525260246000fd5b606492916040519262461bcd60e51b845283015260248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b01519350388062000138565b9291948416928860005284886000209460005b8a898383106200027b575050501062000260575b50505050811b01835562000148565b01519060f884600019921b161c191690553880808062000251565b8686015189559097019694850194889350016200023d565b88600052876000208780870160051c8201928a8810620002d4575b0160051c019083905b828110620002c75750506200011a565b60008155018390620002b7565b92508192620002ae565b602289634e487b7160e01b6000525260246000fd5b90607f169062000108565b634e487b7160e01b600052604160045260246000fd5b015190503880620000d9565b908785941691866000528a6000209260005b8c8282106200036c575050841162000353575b505050811b018255620000eb565b015160001983871b60f8161c1916905538808062000345565b838501518655889790950194938401930162000332565b90915084600052886000208880850160051c8201928b8610620003cf575b918691869594930160051c01915b828110620003bf575050620000c2565b60008155859450869101620003af565b92508192620003a1565b634e487b7160e01b600052602260045260246000fd5b91607f1691620000ae565b600080fd5b60408051919082016001600160401b03811183821017620002fe5760405256fe6040608081526004908136101561001557600080fd5b600091823560e01c90816305ea5c22146106a757816306fdde03146105cd578163095ea7b3146105a357816318160ddd1461058457816323b872dd146104cb5781632d688ca814610408578163313ce567146103ca578163395093511461037a57816370a082311461034357816395d89b4114610224578163a457c2d71461017c57508063a9059cbb1461014c578063dd62ed3e146101045763fb4dcefa146100bd57600080fd5b346101005780600319360112610100576100fd906100d96106bf565b906100e26106da565b6001600160a01b038316855260208590529084205491610791565b80f35b5080fd5b5034610100578060031936011261010057806020926101216106bf565b6101296106da565b6001600160a01b0391821683526001865283832091168252845220549051908152f35b503461010057806003193601126101005760209061017561016b6106bf565b6024359033610791565b5160018152f35b905082346102215782600319360112610221576101976106bf565b918360243592338152600160205281812060018060a01b03861682526020522054908282106101d05760208561017585850387336108ff565b608490602086519162461bcd60e51b8352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152fd5b80fd5b838334610100578160031936011261010057805190828454600181811c90808316928315610339575b60209384841081146103265783885290811561030a57506001146102b5575b505050829003601f01601f191682019267ffffffffffffffff8411838510176102a2575082918261029e925282610725565b0390f35b634e487b7160e01b815260418552602490fd5b8787529192508591837f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b8385106102f6575050505083010185808061026c565b8054888601830152930192849082016102e0565b60ff1916878501525050151560051b840101905085808061026c565b634e487b7160e01b895260228a52602489fd5b91607f169161024d565b5050346101005760203660031901126101005760209181906001600160a01b0361036b6106bf565b16815280845220549051908152f35b5050346101005780600319360112610100576101756020926103c361039d6106bf565b338352600186528483206001600160a01b0382168452865291849020546024359061076e565b90336108ff565b5050346101005781600319360112610100576020905160ff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b919050346104c757806003193601126104c7576104236106bf565b6001600160a01b0316916024359190831561048557506020827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9261046b879560025461076e565b60025585855284835280852082815401905551908152a380f35b6020606492519162461bcd60e51b8352820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b8280fd5b9050823461022157826104dd366106f0565b6001600160a01b038316855260016020818152858720338852905293909420549394909391928201610518575b602086610175878787610791565b848210610541575091839161053660209695610175950333836108ff565b91939481935061050a565b606490602087519162461bcd60e51b8352820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152fd5b5050346101005781600319360112610100576020906002549051908152f35b5050346101005780600319360112610100576020906101756105c36106bf565b60243590336108ff565b83833461010057816003193601126101005780519082600354600181811c9080831692831561069d575b60209384841081146103265783885290811561030a575060011461064757505050829003601f01601f191682019267ffffffffffffffff8411838510176102a2575082918261029e925282610725565b600387529192508591837fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b838510610689575050505083010185808061026c565b805488860183015293019284908201610673565b91607f16916105f7565b8334610221576100fd6106b9366106f0565b916108ff565b600435906001600160a01b03821682036106d557565b600080fd5b602435906001600160a01b03821682036106d557565b60609060031901126106d5576001600160a01b039060043582811681036106d5579160243590811681036106d5579060443590565b6020808252825181830181905290939260005b82811061075a57505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501610738565b9190820180921161077b57565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b039081169182156108ac571691821561085b5760008281528060205260408120549180831061080757604082827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef958760209652828652038282205586815220818154019055604051908152a3565b60405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608490fd5b60405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608490fd5b6001600160a01b039081169182156109b057169182156109605760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260018252604060002085600052825280604060002055604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608490fdfea2646970667358221220167a283b686b9fcc89843ee47aa353927330ef471552c442df90f98d259d21f164736f6c63430008130033";

type TestERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestERC20__factory extends ContractFactory {
  constructor(...args: TestERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _decimals: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_decimals, overrides || {});
  }
  override deploy(
    _decimals: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_decimals, overrides || {}) as Promise<
      TestERC20 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TestERC20__factory {
    return super.connect(runner) as TestERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestERC20Interface {
    return new Interface(_abi) as TestERC20Interface;
  }
  static connect(address: string, runner?: ContractRunner | null): TestERC20 {
    return new Contract(address, _abi, runner) as unknown as TestERC20;
  }
}
