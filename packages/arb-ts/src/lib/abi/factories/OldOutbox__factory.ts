/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { OldOutbox, OldOutboxInterface } from '../OldOutbox'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'destAddr',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'l2Sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'outboxEntryIndex',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'transactionIndex',
        type: 'uint256',
      },
    ],
    name: 'OutBoxTransactionExecuted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'batchNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'outboxEntryIndex',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'outputRoot',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'numInBatch',
        type: 'uint256',
      },
    ],
    name: 'OutboxEntryCreated',
    type: 'event',
  },
  {
    inputs: [],
    name: 'OUTBOX_VERSION',
    outputs: [
      {
        internalType: 'uint128',
        name: '',
        type: 'uint128',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'beacon',
    outputs: [
      {
        internalType: 'contract UpgradeableBeacon',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'bridge',
    outputs: [
      {
        internalType: 'contract IBridge',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l2Sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'destAddr',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'l2Block',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'l1Block',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'l2Timestamp',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'calldataForL1',
        type: 'bytes',
      },
    ],
    name: 'calculateItemHash',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32[]',
        name: 'proof',
        type: 'bytes32[]',
      },
      {
        internalType: 'uint256',
        name: 'path',
        type: 'uint256',
      },
      {
        internalType: 'bytes32',
        name: 'item',
        type: 'bytes32',
      },
    ],
    name: 'calculateMerkleRoot',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'outboxIndex',
        type: 'uint256',
      },
      {
        internalType: 'bytes32[]',
        name: 'proof',
        type: 'bytes32[]',
      },
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'l2Sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'destAddr',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'l2Block',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'l1Block',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'l2Timestamp',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'calldataForL1',
        type: 'bytes',
      },
    ],
    name: 'executeTransaction',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_rollup',
        type: 'address',
      },
      {
        internalType: 'contract IBridge',
        name: '_bridge',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isMaster',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2ToL1BatchNum',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2ToL1Block',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2ToL1EthBlock',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2ToL1OutputId',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2ToL1Sender',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2ToL1Timestamp',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'batchNum',
        type: 'uint256',
      },
    ],
    name: 'outboxEntryExists',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'outboxes',
    outputs: [
      {
        internalType: 'contract OutboxEntry',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'outboxesLength',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'sendsData',
        type: 'bytes',
      },
      {
        internalType: 'uint256[]',
        name: 'sendLengths',
        type: 'uint256[]',
      },
    ],
    name: 'processOutgoingMessages',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rollup',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506000805460ff1916600117905561274f8061002d6000396000f3fe60806040523480156200001157600080fd5b5060043610620001295760003560e01c806372f2a8c711620000bd578063b0f30537116200007b578063b0f305371462000526578063c75184df1462000530578063cb23bcb51462000556578063e78cea921462000560578063f1fd3a39146200056a5762000129565b806372f2a8c714620002bf57806380648b0214620003685780638515bc6a14620003725780639c5cfe0b146200037c5780639f0c04bf14620004815762000129565b80627436d3146200012e57806305d3efe614620001ec5780630c72684714620001f65780631198527114620002bf5780634654779014620002c9578063485cc95514620002d357806359659e9014620003045780636d5161ec146200032a5780636f791d29146200034a575b600080fd5b620001da600480360360608110156200014657600080fd5b810190602081018135600160201b8111156200016157600080fd5b8201836020820111156200017457600080fd5b803590602001918460208302840111600160201b831117156200019657600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955050823593505050602001356200058a565b60408051918252519081900360200190f35b620001da620005c7565b620002bd600480360360408110156200020e57600080fd5b810190602081018135600160201b8111156200022957600080fd5b8201836020820111156200023c57600080fd5b803590602001918460018302840111600160201b831117156200025e57600080fd5b919390929091602081019035600160201b8111156200027c57600080fd5b8201836020820111156200028f57600080fd5b803590602001918460208302840111600160201b83111715620002b157600080fd5b509092509050620005cd565b005b620001da620006c2565b620001da62000703565b620002bd60048036036040811015620002eb57600080fd5b506001600160a01b038135811691602001351662000712565b6200030e62000886565b604080516001600160a01b039092168252519081900360200190f35b6200030e600480360360208110156200034257600080fd5b503562000895565b62000354620008bd565b604080519115158252519081900360200190f35b6200030e620008c6565b620001da620008d5565b620002bd60048036036101408110156200039557600080fd5b81359190810190604081016020820135600160201b811115620003b757600080fd5b820183602082011115620003ca57600080fd5b803590602001918460208302840111600160201b83111715620003ec57600080fd5b919390928235926001600160a01b03602082013581169360408301359091169260608301359260808101359260a08201359260c08301359261010081019060e00135600160201b8111156200044057600080fd5b8201836020820111156200045357600080fd5b803590602001918460018302840111600160201b831117156200047557600080fd5b509092509050620008eb565b620001da600480360360e08110156200049957600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359160808201359160a08101359181019060e0810160c0820135600160201b811115620004e557600080fd5b820183602082011115620004f857600080fd5b803590602001918460018302840111600160201b831117156200051a57600080fd5b50909250905062000ab4565b620001da62000b54565b6200053a62000b63565b604080516001600160801b039092168252519081900360200190f35b6200030e62000b68565b6200030e62000b7c565b62000354600480360360208110156200058257600080fd5b503562000b8b565b6000620005bf848484604051602001808281526020019150506040516020818303038152906040528051906020012062000b92565b949350505050565b60035490565b60005461010090046001600160a01b0316331462000620576040805162461bcd60e51b815260206004820152600b60248201526a04f4e4c595f524f4c4c55560ac1b604482015290519081900360640190fd5b806000805b82811015620006b957620006958783888888868181106200064257fe5b905060200201358601926200065a939291906200138f565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525062000c6792505050565b848482818110620006a257fe5b602002919091013592909201915060010162000625565b50505050505050565b6040805162461bcd60e51b815260206004820152600f60248201526e1393d517d253541311535153951151608a1b6044820152905160009181900360640190fd5b6005546001600160801b031690565b60005461010090046001600160a01b03161562000765576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b60008054610100600160a81b0319166101006001600160a01b0385811691909102919091178255600180546001600160a01b031916918416919091179055604051620007b19062001365565b604051809103906000f080158015620007ce573d6000803e3d6000fd5b50905080604051620007e09062001373565b6001600160a01b03909116815260405190819003602001906000f0801580156200080e573d6000803e3d6000fd5b50600280546001600160a01b0319166001600160a01b0392831617908190556040805163f2fde38b60e01b815286841660048201529051919092169163f2fde38b91602480830192600092919082900301818387803b1580156200087157600080fd5b505af1158015620006b9573d6000803e3d6000fd5b6002546001600160a01b031681565b60038181548110620008a357fe5b6000918252602090912001546001600160a01b0316905081565b60005460ff1690565b6004546001600160a01b031690565b600554600160801b90046001600160801b031690565b6000620008ff898989898989898962000ab4565b9050620009448d8d8d808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152508f925086915062000e7b9050565b8c896001600160a01b0316896001600160a01b03167f20af7f3bbfe38132b8900ae295cd9c8d1914be7052d061a511f3f728dab189648d6040518082815260200191505060405180910390a46004805460058054600680546001600160a01b038f81166001600160a01b03198716179096556001600160801b038c8116600160801b9081028f83166001600160801b0319808816919091178416919091179096558c821695831695909517909255604080516020601f8b018190048102820181019092528981529690951695828416959490930482169391169162000a48918e918b918b908b9081908401838280828437600092019190915250620010e092505050565b600480546001600160a01b03959095166001600160a01b031990951694909417909355600580546001600160801b03928316600160801b029383166001600160801b03199182161783169390931790556006805491909316911617905550505050505050505050505050565b600060038960601b60601c6001600160a01b03168960601b60601c6001600160a01b0316898989898989604051602001808a60ff1660ff1660f81b815260010189815260200188815260200187815260200186815260200185815260200184815260200183838082843780830192505050995050505050505050505060405160208183030381529060405280519060200120905098975050505050505050565b6006546001600160801b031690565b600081565b60005461010090046001600160a01b031681565b6001546001600160a01b031681565b6003541190565b825160009061010081111562000ba757600080fd5b8260005b8281101562000c5d576002860662000c085786818151811062000bca57fe5b602002602001015182604051602001808381526020018281526020019250505060405160208183030381529060405280519060200120915062000c4e565b8187828151811062000c1657fe5b602002602001015160405160200180838152602001828152602001925050506040516020818303038152906040528051906020012091505b60028604955060010162000bab565b5095945050505050565b80516000908290829062000c7757fe5b01602001516001600160f81b031916141562000e7857805160611462000cd1576040805162461bcd60e51b815260206004820152600a6024820152690848288be988a9c8ea8960b31b604482015290519081900360640190fd5b600062000ce682600163ffffffff6200130b16565b9050600062000cfd83602163ffffffff6200130b16565b9050600062000d1484604163ffffffff6200130b16565b6002546040519192506000916001600160a01b039091169062000d379062001381565b6001600160a01b03909116815260406020820181905260008183018190529051918290036080019190f08015801562000d74573d6000803e3d6000fd5b509050806001600160a01b0316635b36c66b83856040518363ffffffff1660e01b81526004018083815260200182815260200192505050600060405180830381600087803b15801562000dc657600080fd5b505af115801562000ddb573d6000803e3d6000fd5b5050600380546001810182556000919091527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b810180546001600160a01b0386166001600160a01b0319909116179055604080518281526020810187905280820188905290519193508792507fe5ccc8d7080a4904b2f4e42d91e8f06b13fe6cb2181ad1fe14644e856b44c131919081900360600190a250505050505b50565b61010083511062000ec4576040805162461bcd60e51b815260206004820152600e60248201526d50524f4f465f544f4f5f4c4f4e4760901b604482015290519081900360640190fd5b825160020a821062000f10576040805162461bcd60e51b815260206004820152601060248201526f1410551217d393d517d352539253505360821b604482015290519081900360640190fd5b600062000f1f8484846200058a565b905060006003868154811062000f3157fe5b6000918252602090912001546001600160a01b031690508062000f87576040805162461bcd60e51b815260206004820152600960248201526809c9ebe9eaaa8849eb60bb1b604482015290519081900360640190fd5b600084865160405160200180838152602001828152602001925050506040516020818303038152906040528051906020012090506000826001600160a01b03166357d61c0b85846040518363ffffffff1660e01b81526004018083815260200182815260200192505050602060405180830381600087803b1580156200100c57600080fd5b505af115801562001021573d6000803e3d6000fd5b505050506040513d60208110156200103857600080fd5b5051905080620010d657826001600160a01b03166383197ef06040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200107e57600080fd5b505af115801562001093573d6000803e3d6000fd5b50505050600060038981548110620010a757fe5b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055505b5050505050505050565b600154604051639e5d4c4960e01b81526001600160a01b03858116600483019081526024830186905260606044840181815286516064860152865160009692959490921693639e5d4c49938a938a938a93909160849091019060208501908083838e5b838110156200115d57818101518382015260200162001143565b50505050905090810190601f1680156200118b5780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b158015620011ad57600080fd5b505af1158015620011c2573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040908152811015620011ec57600080fd5b815160208301805160405192949293830192919084600160201b8211156200121357600080fd5b9083019060208201858111156200122957600080fd5b8251600160201b8111828201881017156200124357600080fd5b82525081516020918201929091019080838360005b838110156200127257818101518382015260200162001258565b50505050905090810190601f168015620012a05780820380516001836020036101000a031916815260200191505b5060405250505091509150816200130457805115620012c25780518082602001fd5b6040805162461bcd60e51b81526020600482015260126024820152711094925111d157d0d0531317d1905253115160721b604482015290519081900360640190fd5b5050505050565b600081602001835110156200135c576040805162461bcd60e51b815260206004820152601260248201527152656164206f7574206f6620626f756e647360701b604482015290519081900360640190fd5b50016020015190565b6104d580620013ba83390190565b6105d1806200188f83390190565b6108ba8062001e6083390190565b600080858511156200139f578182fd5b83861115620013ac578182fd5b505082019391909203915056fe608060405234801561001057600080fd5b506000805460ff191660011790556104a88061002d6000396000f3fe608060405234801561001057600080fd5b506004361061006d5760003560e01c80635780e4e71461007257806357d61c0b1461008c5780635b36c66b146100af5780636f791d29146100d457806383197ef0146100f05780639db9af81146100f8578063ebf0c71714610115575b600080fd5b61007a61011d565b60408051918252519081900360200190f35b61007a600480360360408110156100a257600080fd5b5080359060200135610123565b6100d2600480360360408110156100c557600080fd5b508035906020013561023b565b005b6100dc610330565b604080519115158252519081900360200190f35b6100d2610339565b6100dc6004803603602081101561010e57600080fd5b503561039a565b61007a6103af565b60025481565b6000805461010090046001600160a01b0316331461017a576040805162461bcd60e51b815260206004820152600f60248201526e09c9ea8be8ca49e9abe9eaaa8849eb608b1b604482015290519081900360640190fd5b60008281526003602052604090205460ff16156101ce576040805162461bcd60e51b815260206004820152600d60248201526c1053149150511657d4d4115395609a1b604482015290519081900360640190fd5b600154831461020f576040805162461bcd60e51b815260206004820152600860248201526710905117d493d3d560c21b604482015290519081900360640190fd5b506000818152600360205260409020805460ff1916600117905560028054600019019081905592915050565b60005461010090046001600160a01b03161561028d576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600154156102d1576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b8161030e576040805162461bcd60e51b815260206004820152600860248201526710905117d493d3d560c21b604482015290519081900360640190fd5b60008054610100600160a81b0319163361010002179055600191909155600255565b60005460ff1690565b60005461010090046001600160a01b0316331461038f576040805162461bcd60e51b815260206004820152600f60248201526e09c9ea8be8ca49e9abe9eaaa8849eb608b1b604482015290519081900360640190fd5b610398336103b5565b565b60036020526000908152604090205460ff1681565b60015481565b6000546040805180820190915260098152684e4f545f434c4f4e4560b81b60208201529060ff16156104655760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561042a578181015183820152602001610412565b50505050905090810190601f1680156104575780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50806001600160a01b0316fffea26469706673582212201779ccf9abfa48b9a677f6ab38513721815ed7198339cd0127e2ed47102e96cd64736f6c634300060b0033608060405234801561001057600080fd5b506040516105d13803806105d18339818101604052602081101561003357600080fd5b505160006100486001600160e01b036100aa16565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506100a4816001600160e01b036100ae16565b50610124565b3390565b6100c18161011e60201b61034c1760201c565b6100fc5760405162461bcd60e51b815260040180806020018281038252603381526020018061059e6033913960400191505060405180910390fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b3b151590565b61046b806101336000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80633659cfe61461005c5780635c60da1b14610084578063715018a6146100a85780638da5cb5b146100b0578063f2fde38b146100b8575b600080fd5b6100826004803603602081101561007257600080fd5b50356001600160a01b03166100de565b005b61008c610180565b604080516001600160a01b039092168252519081900360200190f35b61008261018f565b61008c61023b565b610082600480360360208110156100ce57600080fd5b50356001600160a01b031661024a565b6100e6610352565b6001600160a01b03166100f761023b565b6001600160a01b031614610140576040805162461bcd60e51b81526020600482018190526024820152600080516020610416833981519152604482015290519081900360640190fd5b61014981610356565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6001546001600160a01b031690565b610197610352565b6001600160a01b03166101a861023b565b6001600160a01b0316146101f1576040805162461bcd60e51b81526020600482018190526024820152600080516020610416833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b610252610352565b6001600160a01b031661026361023b565b6001600160a01b0316146102ac576040805162461bcd60e51b81526020600482018190526024820152600080516020610416833981519152604482015290519081900360640190fd5b6001600160a01b0381166102f15760405162461bcd60e51b81526004018080602001828103825260268152602001806103bd6026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3b151590565b3390565b61035f8161034c565b61039a5760405162461bcd60e51b81526004018080602001828103825260338152602001806103e36033913960400191505060405180910390fd5b600180546001600160a01b0319166001600160a01b039290921691909117905556fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573735570677261646561626c65426561636f6e3a20696d706c656d656e746174696f6e206973206e6f74206120636f6e74726163744f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a2646970667358221220e082b44760d7484daad017396b93ce8fb7ce2f11f19db0d8429a61aaedbc6f4564736f6c634300060b00335570677261646561626c65426561636f6e3a20696d706c656d656e746174696f6e206973206e6f74206120636f6e747261637460806040526040516108ba3803806108ba8339818101604052604081101561002657600080fd5b81516020830180516040519294929383019291908464010000000082111561004d57600080fd5b90830190602082018581111561006257600080fd5b825164010000000081118282018810171561007c57600080fd5b82525081516020918201929091019080838360005b838110156100a9578181015183820152602001610091565b50505050905090810190601f1680156100d65780820380516001836020036101000a031916815260200191505b5060408181527f656970313936372e70726f78792e626561636f6e0000000000000000000000008252519081900360140190206000805160206107fa83398151915260001990910114925061012a91505057fe5b61013d82826001600160e01b0361014416565b50506104f3565b610157826102a260201b6100311760201c565b6101925760405162461bcd60e51b815260040180806020018281038252602581526020018061083b6025913960400191505060405180910390fd5b61020a826001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156101ce57600080fd5b505afa1580156101e2573d6000803e3d6000fd5b505050506040513d60208110156101f857600080fd5b50516102a2602090811b61003117901c565b6102455760405162461bcd60e51b81526004018080602001828103825260348152602001806108866034913960400191505060405180910390fd5b6000805160206107fa83398151915282815581511561029d5761029b6102726001600160e01b036102a816565b8360405180606001604052806021815260200161081a6021913961032460201b6100371760201c565b505b505050565b3b151590565b60006102bb6001600160e01b0361043c16565b6001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156102f357600080fd5b505afa158015610307573d6000803e3d6000fd5b505050506040513d602081101561031d57600080fd5b5051905090565b6060610338846001600160e01b036102a216565b6103735760405162461bcd60e51b81526004018080602001828103825260268152602001806108606026913960400191505060405180910390fd5b60006060856001600160a01b0316856040518082805190602001908083835b602083106103b15780518252601f199092019160209182019101610392565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114610411576040519150601f19603f3d011682016040523d82523d6000602084013e610416565b606091505b5090925090506104308282866001600160e01b0361044f16565b925050505b9392505050565b6000805160206107fa8339815191525490565b6060831561045e575081610435565b82511561046e5782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156104b85781810151838201526020016104a0565b50505050905090810190601f1680156104e55780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b6102f8806105026000396000f3fe60806040523661001357610011610017565b005b6100115b61001f61002f565b61002f61002a61013c565b6101af565b565b3b151590565b606061004284610031565b61007d5760405162461bcd60e51b815260040180806020018281038252602681526020018061029d6026913960400191505060405180910390fd5b60006060856001600160a01b0316856040518082805190602001908083835b602083106100bb5780518252601f19909201916020918201910161009c565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d806000811461011b576040519150601f19603f3d011682016040523d82523d6000602084013e610120565b606091505b50915091506101308282866101d3565b925050505b9392505050565b6000610146610277565b6001600160a01b0316635c60da1b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561017e57600080fd5b505afa158015610192573d6000803e3d6000fd5b505050506040513d60208110156101a857600080fd5b5051905090565b3660008037600080366000845af43d6000803e8080156101ce573d6000f35b3d6000fd5b606083156101e2575081610135565b8251156101f25782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561023c578181015183820152602001610224565b50505050905090810190601f1680156102695780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b7fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50549056fe416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6e7472616374a264697066735822122053dcbd8c0863f6517a5117ac7b858fc300ba6a67685a286f909e85f8150b82c764736f6c634300060b0033a3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50426561636f6e50726f78793a2066756e6374696f6e2063616c6c206661696c6564426561636f6e50726f78793a20626561636f6e206973206e6f74206120636f6e7472616374416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6e7472616374426561636f6e50726f78793a20626561636f6e20696d706c656d656e746174696f6e206973206e6f74206120636f6e7472616374a26469706673582212203d60eb9c172c899f87a024d6d59515ca76a3358e7c090be09e93762b92742cb064736f6c634300060b0033'

export class OldOutbox__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OldOutbox> {
    return super.deploy(overrides || {}) as Promise<OldOutbox>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): OldOutbox {
    return super.attach(address) as OldOutbox
  }
  connect(signer: Signer): OldOutbox__factory {
    return super.connect(signer) as OldOutbox__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): OldOutboxInterface {
    return new utils.Interface(_abi) as OldOutboxInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OldOutbox {
    return new Contract(address, _abi, signerOrProvider) as OldOutbox
  }
}
