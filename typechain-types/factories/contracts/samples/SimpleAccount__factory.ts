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
  SimpleAccount,
  SimpleAccountInterface,
} from "../../../contracts/samples/SimpleAccount";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "anEntryPoint",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IEntryPoint",
        name: "entryPoint",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "SimpleAccountInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "addDeposit",
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
    inputs: [
      {
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "func",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "dest",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "value",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "func",
        type: "bytes[]",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "getNonce",
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
        name: "anOwner",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
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
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
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
    name: "withdrawDepositTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60c03461015f57601f61190b38819003918201601f19168301916001600160401b038311848410176101645780849260209460405283398101031261015f57516001600160a01b038116810361015f573060805260a05260005460ff8160081c1661010a5760ff808216036100cf575b604051611790908161017b823960805181818161034f015281816108140152610929015260a05181818161026c015281816105e50152818161068701528181610a1e01528181610b5d01528181610cde0152818161135d01526113ae0152f35b60ff90811916176000557f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498602060405160ff8152a13861006f565b60405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b6064820152608490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600436101561001b575b361561001957600080fd5b005b60003560e01c806301ffc9a71461012b578063150b7a021461012657806319822f7c146101215780633659cfe61461011c57806347e1da2a146101175780634a58db19146101125780634d44560d1461010d5780634f1ef2861461010857806352d1902d146101035780638da5cb5b146100fe578063b0d691fe146100f9578063b61d27f6146100f4578063bc197c81146100ef578063c399ec88146100ea578063c4d66de8146100e5578063d087d288146100e05763f23a6e610361000e57610d48565b610cab565b610bbe565b610b31565b610aa2565b610a4d565b610a08565b6109db565b610916565b6107c2565b610656565b6105d6565b6104a5565b610328565b610236565b6101dc565b346101995760203660031901126101995760043563ffffffff60e01b811680910361019957602090630a85bd0160e11b8114908115610188575b8115610177575b506040519015158152f35b6301ffc9a760e01b1490503861016c565b630271189760e51b81149150610165565b600080fd5b6001600160a01b0381160361019957565b9181601f84011215610199578235916001600160401b038311610199576020838186019501011161019957565b34610199576080366003190112610199576101f860043561019e565b61020360243561019e565b6064356001600160401b038111610199576102229036906004016101af565b5050604051630a85bd0160e11b8152602090f35b346101995760031960603682011261019957600435906001600160401b03821161019957610120908236030112610199576044357f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031633036102e3576102ad6102c59260243590600401611435565b90806102c9575b506040519081529081906020820190565b0390f35b600080808093338219f1506102dc6110cb565b50386102b4565b60405162461bcd60e51b815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e74000000006044820152606490fd5b34610199576020366003190112610199576004356103458161019e565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116919061037e30841415610da2565b61039b60008051602061173b833981519152938285541614610e03565b6103a36116dd565b604051906103b082610719565b600082527f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff16156103ea5750506100199150610f2c565b6020600491604094939451928380926352d1902d60e01b825286165afa60009181610445575b506104325760405162461bcd60e51b81528061042e60048201610edd565b0390fd5b610019936104409114610e7f565b610fbc565b61046791925060203d811161046e575b61045f818361074f565b810190610e64565b9038610410565b503d610455565b9181601f84011215610199578235916001600160401b038311610199576020808501948460051b01011161019957565b34610199576060366003190112610199576001600160401b03600435818111610199576104d6903690600401610475565b602492919235828111610199576104f1903690600401610475565b926044359081116101995761050a903690600401610475565b9390916105156113a4565b848414806105c5575b610527906111dc565b8161057957505060005b82811061053a57005b8061056f61055461054f61057494878a611259565b61126e565b6105696105628489886112aa565b369161078b565b9061169e565b61121e565b610531565b91909460009493945b85811061058b57005b8061056f6105a061054f6105c0948a87611259565b6105ab838b89611259565b356105ba610562858b8a6112aa565b916116c6565b610582565b5081158061051e575081851461051e565b600080600319360112610653577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681813b156106535760405163b760faf960e01b8152306004820152918290602490829034905af1801561064e57610642575080f35b61064b90610701565b80f35b610e73565b80fd5b346101995760006040366003190112610653576004356106758161019e565b61067d6116dd565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811691839190833b156106e75760449083604051958694859363040b850f60e31b855216600484015260243560248401525af1801561064e57610642575080f35b8280fd5b634e487b7160e01b600052604160045260246000fd5b6001600160401b03811161071457604052565b6106eb565b602081019081106001600160401b0382111761071457604052565b606081019081106001600160401b0382111761071457604052565b90601f801991011681019081106001600160401b0382111761071457604052565b6001600160401b03811161071457601f01601f191660200190565b92919261079782610770565b916107a5604051938461074f565b829481845281830111610199578281602093846000960137010152565b6040366003190112610199576004356107da8161019e565b6024356001600160401b03811161019957366023820112156101995761080a90369060248160040135910161078b565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811692919061084430851415610da2565b61086160008051602061173b833981519152948286541614610e03565b6108696116dd565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff161561089f5750506100199150610f2c565b6020600491604094939451928380926352d1902d60e01b825286165afa600091816108f6575b506108e35760405162461bcd60e51b81528061042e60048201610edd565b610019936108f19114610e7f565b611078565b61090f91925060203d811161046e5761045f818361074f565b90386108c5565b34610199576000366003190112610199577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031630036109705760405160008051602061173b8339815191528152602090f35b60405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608490fd5b346101995760003660031901126101995760005460405160109190911c6001600160a01b03168152602090f35b34610199576000366003190112610199576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b3461019957606036600319011261019957600435610a6a8161019e565b604435906001600160401b03821161019957610a98610a906100199336906004016101af565b6105626113a4565b90602435906116c6565b346101995760a036600319011261019957610abe60043561019e565b610ac960243561019e565b6001600160401b0360443581811161019957610ae9903690600401610475565b505060643581811161019957610b03903690600401610475565b505060843590811161019957610b1d9036906004016101af565b505060405163bc197c8160e01b8152602090f35b34610199576000366003190112610199576040516370a0823160e01b81523060048201526020816024817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa801561064e57602091600091610ba1575b50604051908152f35b610bb89150823d811161046e5761045f818361074f565b38610b98565b3461019957602036600319011261019957600435610bdb8161019e565b610c1f60005491610c0360ff8460081c161580948195610c9d575b8115610c7d575b506112c5565b82610c16600160ff196000541617600055565b610c6457611328565b610c2557005b610c3561ff001960005416600055565b604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249890602090a1005b610c7861010061ff00196000541617600055565b611328565b303b15915081610c8f575b5038610bfd565b6001915060ff161438610c88565b600160ff8216109150610bf6565b3461019957600036600319011261019957604051631aab3f0d60e11b8152306004820152600060248201526020816044817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa801561064e576102c591600091610d2a57506040519081529081906020820190565b610d42915060203d811161046e5761045f818361074f565b386102b4565b346101995760a036600319011261019957610d6460043561019e565b610d6f60243561019e565b6084356001600160401b03811161019957610d8e9036906004016101af565b505060405163f23a6e6160e01b8152602090f35b15610da957565b60405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608490fd5b15610e0a57565b60405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608490fd5b90816020910312610199575190565b6040513d6000823e3d90fd5b15610e8657565b60405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b6064820152608490fd5b60809060208152602e60208201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960408201526d6f6e206973206e6f74205555505360901b60608201520190565b803b15610f615760008051602061173b83398151915280546001600160a01b0319166001600160a01b03909216919091179055565b60405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608490fd5b90610fc682610f2c565b6001600160a01b0382167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a2805115801590611070575b611008575050565b61106d916000806040519361101c85610734565b602785527f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c6020860152660819985a5b195960ca1b6040860152602081519101845af46110676110cb565b91611147565b50565b506000611000565b9061108282610f2c565b6001600160a01b0382167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a28051158015906110c357611008575050565b506001611000565b3d156110f6573d906110dc82610770565b916110ea604051938461074f565b82523d6000602084013e565b606090565b1561110257565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b9192901561116a575081511561115b575090565b611167903b15156110fb565b90565b82519091501561117d5750805190602001fd5b6040519062461bcd60e51b82528160208060048301528251908160248401526000935b8285106111c3575050604492506000838284010152601f80199101168101030190fd5b84810182015186860160440152938101938593506111a0565b156111e357565b60405162461bcd60e51b815260206004820152601360248201527277726f6e67206172726179206c656e6774687360681b6044820152606490fd5b600019811461122d5760010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b91908110156112695760051b0190565b611243565b356111678161019e565b903590601e198136030182121561019957018035906001600160401b0382116101995760200191813603831361019957565b90821015611269576112c19160051b810190611278565b9091565b156112cc57565b60405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608490fd5b6000805462010000600160b01b03601093841b1662010000600160b01b0319909116178082556001600160a01b03921c8216917f000000000000000000000000000000000000000000000000000000000000000016907f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de9080a3565b60018060a01b03807f0000000000000000000000000000000000000000000000000000000000000000163314908115611424575b50156113e057565b606460405162461bcd60e51b815260206004820152602060248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e746044820152fd5b905060005460101c163314386113d8565b907f19457468657265756d205369676e6564204d6573736167653a0a333200000000600052601c52603c60002061149861149060018060a01b039261148a6105628560005460101c1696610100810190611278565b906115e8565b9190916114c8565b16036114a357600090565b600190565b600511156114b257565b634e487b7160e01b600052602160045260246000fd5b6114d1816114a8565b806114d95750565b6114e2816114a8565b6001810361152f5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606490fd5b611538816114a8565b600281036115855760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b806115916003926114a8565b1461159857565b60405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608490fd5b906041815114600014611612576112c1916020820151906060604084015193015160001a9061161c565b5050600090600290565b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083116116925791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa1561064e5781516001600160a01b0381161561168c579190565b50600190565b50505050600090600390565b600091829182602083519301915af16116b56110cb565b90156116be5750565b602081519101fd5b916000928392602083519301915af16116b56110cb565b6000543360109190911c6001600160a01b0316148015611731575b156116ff57565b60405162461bcd60e51b815260206004820152600a60248201526937b7363c9037bbb732b960b11b6044820152606490fd5b503033146116f856fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbca2646970667358221220127d076ea8f317ad32c4ca5289e47b4b42e70613e1249c5f2c5354ef30dd2f0b64736f6c63430008130033";

type SimpleAccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleAccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleAccount__factory extends ContractFactory {
  constructor(...args: SimpleAccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    anEntryPoint: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(anEntryPoint, overrides || {});
  }
  override deploy(
    anEntryPoint: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(anEntryPoint, overrides || {}) as Promise<
      SimpleAccount & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SimpleAccount__factory {
    return super.connect(runner) as SimpleAccount__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleAccountInterface {
    return new Interface(_abi) as SimpleAccountInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): SimpleAccount {
    return new Contract(address, _abi, runner) as unknown as SimpleAccount;
  }
}
