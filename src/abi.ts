export const abi = {
 "programType": "contract",
 "specVersion": "1",
 "encodingVersion": "1",
 "concreteTypes": [
  {
   "type": "()",
   "concreteTypeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
  },
  {
   "type": "(struct std::asset_id::AssetId, u32, struct std::asset_id::AssetId, u32, enum std::identity::Identity, u32, u32)",
   "concreteTypeId": "2af57fa7b0f9eb46500ad6f44107b87602c8b010f49ac4c18ebef66289467acb",
   "metadataTypeId": 4
  },
  {
   "type": "(u64, u64)",
   "concreteTypeId": "41bd1a98f0a59642d8f824c805b798a5f268d1f7d05808eb05c4189c493f1be0",
   "metadataTypeId": 0
  },
  {
   "type": "b256",
   "concreteTypeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
  },
  {
   "type": "enum data_structures::asset_type::AssetType",
   "concreteTypeId": "4c4bcee5a492c5113714e96c87704a3af9b8bd766ce5da2ca716a6564da06ba3",
   "metadataTypeId": 6
  },
  {
   "type": "enum data_structures::limit_type::LimitType",
   "concreteTypeId": "d9c35258b461d6cc17f23d4d7c184b37b99882e5c80d683a5826bcb9b2494e86",
   "metadataTypeId": 7
  },
  {
   "type": "enum data_structures::order_type::OrderType",
   "concreteTypeId": "87d371fb295bf9d2ae8ded087940e8d0b097ddef40d8499ac650a22985df2682",
   "metadataTypeId": 9
  },
  {
   "type": "enum errors::AccountError",
   "concreteTypeId": "d4bce56f7daed5c8d2b62c0f0745c18d9fdd0b2f0dafecf85ebdd9c7378b5c63",
   "metadataTypeId": 10
  },
  {
   "type": "enum errors::AssetError",
   "concreteTypeId": "e0676030b211eb9ed3b9837fc852a3cf3b6533a31533dd3ab957e8b3f6e77dd3",
   "metadataTypeId": 11
  },
  {
   "type": "enum errors::AuthError",
   "concreteTypeId": "06c3d78f1057db580eb36dc2fc04ebd7407f4a4e954417b6761844fe38ee1a5d",
   "metadataTypeId": 12
  },
  {
   "type": "enum errors::MatchError",
   "concreteTypeId": "dbce8f9c6be61d876835d7a0b5794cfc25fc3b171ba3748ec4c8f2e7ce426cf6",
   "metadataTypeId": 13
  },
  {
   "type": "enum errors::OrderError",
   "concreteTypeId": "0ddf63471f7b27c54c55fd3d75fe37594fb1b07a496dba57eb8fc56497e9d9c1",
   "metadataTypeId": 14
  },
  {
   "type": "enum errors::ValueError",
   "concreteTypeId": "380bd4d6b96f9eaa3a3d8db8bb9753399443715fb3fd65460cc28d6ab4d3659b",
   "metadataTypeId": 15
  },
  {
   "type": "enum std::identity::Identity",
   "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335",
   "metadataTypeId": 16
  },
  {
   "type": "enum std::option::Option<struct data_structures::order::Order>",
   "concreteTypeId": "af7345d115f618be19cd709b6734bdd5fd52bb0c27617a74a9564e4cea947d01",
   "metadataTypeId": 17,
   "typeArguments": [
    "d0d7221d2233a12a685667b843d8aab0c0b82407fc47b719c07aeb77dfcaed6a"
   ]
  },
  {
   "type": "enum sway_libs::reentrancy::errors::ReentrancyError",
   "concreteTypeId": "4d216c57b3357523323f59401c7355785b41bdf832f6e1106272186b94797038",
   "metadataTypeId": 18
  },
  {
   "type": "struct data_structures::account::Account",
   "concreteTypeId": "10410fea5a6cba4a6b6079f9d804c0daf23980a360d009048ecb36118036c28e",
   "metadataTypeId": 21
  },
  {
   "type": "struct data_structures::order::Order",
   "concreteTypeId": "d0d7221d2233a12a685667b843d8aab0c0b82407fc47b719c07aeb77dfcaed6a",
   "metadataTypeId": 23
  },
  {
   "type": "struct data_structures::order_change::OrderChangeInfo",
   "concreteTypeId": "29bc325768e93baaa35ac6e466461baa03f97fb67a0a328521afacca7d3bf987",
   "metadataTypeId": 24
  },
  {
   "type": "struct data_structures::protocol_fee::ProtocolFee",
   "concreteTypeId": "009d87c3f03cbc1373d98411934ee7648a3922e9adcbafd190ce4d1618b6e5a2",
   "metadataTypeId": 25
  },
  {
   "type": "struct events::CancelOrderEvent",
   "concreteTypeId": "cbadef79adf1e6906cac7404759d7d55a9eaa9f1e6d479ecbbfa76f727486081",
   "metadataTypeId": 26
  },
  {
   "type": "struct events::DepositEvent",
   "concreteTypeId": "aeb9b947da259c606e2c25be1150e2150f609fe5f2ec593c9a7ebb771e4e7065",
   "metadataTypeId": 27
  },
  {
   "type": "struct events::MatchOrderEvent",
   "concreteTypeId": "1f8647a46c73c952a719dd380c2aa8f67c2ba78a07c43225e26166d5d6b70886",
   "metadataTypeId": 28
  },
  {
   "type": "struct events::OpenOrderEvent",
   "concreteTypeId": "6c6a47ac80e7110dd8666e169f0fffe2d1378df88cf8960bb9dfe14a84ac3495",
   "metadataTypeId": 29
  },
  {
   "type": "struct events::SetEpochEvent",
   "concreteTypeId": "4fb77907614eb05d769b487a16469bfaac5278323bc54bddccd790cc4e00428e",
   "metadataTypeId": 30
  },
  {
   "type": "struct events::SetMatcherRewardEvent",
   "concreteTypeId": "090412be710caebee4e019479841ea0100912819a3e1c52ba39b1faa7b778c83",
   "metadataTypeId": 31
  },
  {
   "type": "struct events::SetProtocolFeeEvent",
   "concreteTypeId": "957dde23e9fbd44b1bada18eae8b84f6d868be2fe55b721ce24b54cdcdafda79",
   "metadataTypeId": 32
  },
  {
   "type": "struct events::TradeOrderEvent",
   "concreteTypeId": "fe08cb2392b6eb92ee6b7868e2877ca0630f87f543acc63897f7d806229379d5",
   "metadataTypeId": 33
  },
  {
   "type": "struct events::WithdrawEvent",
   "concreteTypeId": "9787083b0003f388ec6bf30609ff6a10c76fada67314a162841a445b07a17168",
   "metadataTypeId": 34
  },
  {
   "type": "struct std::asset_id::AssetId",
   "concreteTypeId": "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974",
   "metadataTypeId": 36
  },
  {
   "type": "struct std::vec::Vec<b256>",
   "concreteTypeId": "32559685d0c9845f059bf9d472a0a38cf77d36c23dfcffe5489e86a65cdd9198",
   "metadataTypeId": 39,
   "typeArguments": [
    "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
   ]
  },
  {
   "type": "struct std::vec::Vec<struct data_structures::order_change::OrderChangeInfo>",
   "concreteTypeId": "742fbfc9dbc675c4bb942c1c3d87581f5da5c5a8b0fc21e0d1f8d873328d5e5a",
   "metadataTypeId": 39,
   "typeArguments": [
    "29bc325768e93baaa35ac6e466461baa03f97fb67a0a328521afacca7d3bf987"
   ]
  },
  {
   "type": "struct std::vec::Vec<struct data_structures::protocol_fee::ProtocolFee>",
   "concreteTypeId": "4b03eb3d5d8751745804ec649d33055ca43456407d3991177f51a1397cd4da50",
   "metadataTypeId": 39,
   "typeArguments": [
    "009d87c3f03cbc1373d98411934ee7648a3922e9adcbafd190ce4d1618b6e5a2"
   ]
  },
  {
   "type": "u32",
   "concreteTypeId": "d7649d428b9ff33d188ecbf38a7e4d8fd167fa01b2e10fe9a8f9308e52f1d7cc"
  },
  {
   "type": "u64",
   "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
  }
 ],
 "metadataTypes": [
  {
   "type": "(_, _)",
   "metadataTypeId": 0,
   "components": [
    {
     "name": "__tuple_element",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
     "name": "__tuple_element",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    }
   ]
  },
  {
   "type": "(_, _)",
   "metadataTypeId": 1,
   "components": [
    {
     "name": "__tuple_element",
     "typeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
    },
    {
     "name": "__tuple_element",
     "typeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
    }
   ]
  },
  {
   "type": "(_, _, _)",
   "metadataTypeId": 2,
   "components": [
    {
     "name": "__tuple_element",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
     "name": "__tuple_element",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
     "name": "__tuple_element",
     "typeId": 5
    }
   ]
  },
  {
   "type": "(_, _, _, _)",
   "metadataTypeId": 3,
   "components": [
    {
     "name": "__tuple_element",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
     "name": "__tuple_element",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
     "name": "__tuple_element",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
     "name": "__tuple_element",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    }
   ]
  },
  {
   "type": "(_, _, _, _, _, _, _)",
   "metadataTypeId": 4,
   "components": [
    {
     "name": "__tuple_element",
     "typeId": 36
    },
    {
     "name": "__tuple_element",
     "typeId": "d7649d428b9ff33d188ecbf38a7e4d8fd167fa01b2e10fe9a8f9308e52f1d7cc"
    },
    {
     "name": "__tuple_element",
     "typeId": 36
    },
    {
     "name": "__tuple_element",
     "typeId": "d7649d428b9ff33d188ecbf38a7e4d8fd167fa01b2e10fe9a8f9308e52f1d7cc"
    },
    {
     "name": "__tuple_element",
     "typeId": 16
    },
    {
     "name": "__tuple_element",
     "typeId": "d7649d428b9ff33d188ecbf38a7e4d8fd167fa01b2e10fe9a8f9308e52f1d7cc"
    },
    {
     "name": "__tuple_element",
     "typeId": "d7649d428b9ff33d188ecbf38a7e4d8fd167fa01b2e10fe9a8f9308e52f1d7cc"
    }
   ]
  },
  {
   "type": "bool",
   "metadataTypeId": 5
  },
  {
   "type": "enum data_structures::asset_type::AssetType",
   "metadataTypeId": 6,
   "components": [
    {
     "name": "Base",
     "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    },
    {
     "name": "Quote",
     "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    }
   ]
  },
  {
   "type": "enum data_structures::limit_type::LimitType",
   "metadataTypeId": 7,
   "components": [
    {
     "name": "GTC",
     "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    },
    {
     "name": "IOC",
     "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    },
    {
     "name": "FOK",
     "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    }
   ]
  },
  {
   "type": "enum data_structures::order_change::OrderChangeType",
   "metadataTypeId": 8,
   "components": [
    {
     "name": "OrderOpened",
     "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    },
    {
     "name": "OrderCancelled",
     "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    },
    {
     "name": "OrderMatched",
     "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    }
   ]
  },
  {
   "type": "enum data_structures::order_type::OrderType",
   "metadataTypeId": 9,
   "components": [
    {
     "name": "Buy",
     "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    },
    {
     "name": "Sell",
     "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    }
   ]
  },
  {
   "type": "enum errors::AccountError",
   "metadataTypeId": 10,
   "components": [
    {
     "name": "InsufficientBalance",
     "typeId": 2
    }
   ]
  },
  {
   "type": "enum errors::AssetError",
   "metadataTypeId": 11,
   "components": [
    {
     "name": "InvalidAsset",
     "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    },
    {
     "name": "InvalidFeeAsset",
     "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    }
   ]
  },
  {
   "type": "enum errors::AuthError",
   "metadataTypeId": 12,
   "components": [
    {
     "name": "Unauthorized",
     "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    }
   ]
  },
  {
   "type": "enum errors::MatchError",
   "metadataTypeId": 13,
   "components": [
    {
     "name": "CantMatch",
     "typeId": 1
    },
    {
     "name": "CantMatchMany",
     "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    },
    {
     "name": "CantFulfillMany",
     "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    },
    {
     "name": "CantFulfillFOK",
     "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    }
   ]
  },
  {
   "type": "enum errors::OrderError",
   "metadataTypeId": 14,
   "components": [
    {
     "name": "OrderDuplicate",
     "typeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
    },
    {
     "name": "OrderNotFound",
     "typeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
    },
    {
     "name": "PriceTooSmall",
     "typeId": 0
    },
    {
     "name": "ZeroOrderAmount",
     "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    },
    {
     "name": "ZeroLockAmount",
     "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    },
    {
     "name": "ZeroUnlockAmount",
     "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    },
    {
     "name": "ZeroTransferAmount",
     "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    },
    {
     "name": "FailedToRemove",
     "typeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
    }
   ]
  },
  {
   "type": "enum errors::ValueError",
   "metadataTypeId": 15,
   "components": [
    {
     "name": "InvalidAmount",
     "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    },
    {
     "name": "InvalidSlippage",
     "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    },
    {
     "name": "InvalidArrayLength",
     "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    },
    {
     "name": "InvalidFeeAmount",
     "typeId": 0
    },
    {
     "name": "InvalidEpoch",
     "typeId": 3
    },
    {
     "name": "InvalidFeeSorting",
     "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    },
    {
     "name": "InvalidFeeZeroBased",
     "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    },
    {
     "name": "InvalidValueSame",
     "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    }
   ]
  },
  {
   "type": "enum std::identity::Identity",
   "metadataTypeId": 16,
   "components": [
    {
     "name": "Address",
     "typeId": 35
    },
    {
     "name": "ContractId",
     "typeId": 37
    }
   ]
  },
  {
   "type": "enum std::option::Option",
   "metadataTypeId": 17,
   "components": [
    {
     "name": "None",
     "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    },
    {
     "name": "Some",
     "typeId": 19
    }
   ],
   "typeParameters": [
    19
   ]
  },
  {
   "type": "enum sway_libs::reentrancy::errors::ReentrancyError",
   "metadataTypeId": 18,
   "components": [
    {
     "name": "NonReentrant",
     "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    }
   ]
  },
  {
   "type": "generic T",
   "metadataTypeId": 19
  },
  {
   "type": "raw untyped ptr",
   "metadataTypeId": 20
  },
  {
   "type": "struct data_structures::account::Account",
   "metadataTypeId": 21,
   "components": [
    {
     "name": "liquid",
     "typeId": 22
    },
    {
     "name": "locked",
     "typeId": 22
    }
   ]
  },
  {
   "type": "struct data_structures::balance::Balance",
   "metadataTypeId": 22,
   "components": [
    {
     "name": "base",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
     "name": "quote",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    }
   ]
  },
  {
   "type": "struct data_structures::order::Order",
   "metadataTypeId": 23,
   "components": [
    {
     "name": "amount",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
     "name": "asset_type",
     "typeId": 6
    },
    {
     "name": "order_type",
     "typeId": 9
    },
    {
     "name": "owner",
     "typeId": 16
    },
    {
     "name": "price",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
     "name": "block_height",
     "typeId": "d7649d428b9ff33d188ecbf38a7e4d8fd167fa01b2e10fe9a8f9308e52f1d7cc"
    },
    {
     "name": "order_height",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
     "name": "matcher_fee",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
     "name": "protocol_maker_fee",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
     "name": "protocol_taker_fee",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    }
   ]
  },
  {
   "type": "struct data_structures::order_change::OrderChangeInfo",
   "metadataTypeId": 24,
   "components": [
    {
     "name": "change_type",
     "typeId": 8
    },
    {
     "name": "block_height",
     "typeId": "d7649d428b9ff33d188ecbf38a7e4d8fd167fa01b2e10fe9a8f9308e52f1d7cc"
    },
    {
     "name": "sender",
     "typeId": 16
    },
    {
     "name": "tx_id",
     "typeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
    },
    {
     "name": "amount_before",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
     "name": "amount_after",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    }
   ]
  },
  {
   "type": "struct data_structures::protocol_fee::ProtocolFee",
   "metadataTypeId": 25,
   "components": [
    {
     "name": "maker_fee",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
     "name": "taker_fee",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
     "name": "volume_threshold",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    }
   ]
  },
  {
   "type": "struct events::CancelOrderEvent",
   "metadataTypeId": 26,
   "components": [
    {
     "name": "order_id",
     "typeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
    },
    {
     "name": "user",
     "typeId": 16
    }
   ]
  },
  {
   "type": "struct events::DepositEvent",
   "metadataTypeId": 27,
   "components": [
    {
     "name": "amount",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
     "name": "asset",
     "typeId": 36
    },
    {
     "name": "user",
     "typeId": 16
    }
   ]
  },
  {
   "type": "struct events::MatchOrderEvent",
   "metadataTypeId": 28,
   "components": [
    {
     "name": "order_id",
     "typeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
    },
    {
     "name": "asset",
     "typeId": 36
    },
    {
     "name": "order_matcher",
     "typeId": 16
    },
    {
     "name": "owner",
     "typeId": 16
    },
    {
     "name": "counterparty",
     "typeId": 16
    },
    {
     "name": "match_size",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
     "name": "match_price",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    }
   ]
  },
  {
   "type": "struct events::OpenOrderEvent",
   "metadataTypeId": 29,
   "components": [
    {
     "name": "amount",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
     "name": "asset",
     "typeId": 36
    },
    {
     "name": "order_type",
     "typeId": 9
    },
    {
     "name": "order_id",
     "typeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
    },
    {
     "name": "price",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
     "name": "user",
     "typeId": 16
    }
   ]
  },
  {
   "type": "struct events::SetEpochEvent",
   "metadataTypeId": 30,
   "components": [
    {
     "name": "epoch",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
     "name": "epoch_duration",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    }
   ]
  },
  {
   "type": "struct events::SetMatcherRewardEvent",
   "metadataTypeId": 31,
   "components": [
    {
     "name": "amount",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    }
   ]
  },
  {
   "type": "struct events::SetProtocolFeeEvent",
   "metadataTypeId": 32,
   "components": [
    {
     "name": "protocol_fee",
     "typeId": 39,
     "typeArguments": [
      {
       "name": "",
       "typeId": 25
      }
     ]
    }
   ]
  },
  {
   "type": "struct events::TradeOrderEvent",
   "metadataTypeId": 33,
   "components": [
    {
     "name": "base_sell_order_id",
     "typeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
    },
    {
     "name": "base_buy_order_id",
     "typeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
    },
    {
     "name": "base_sell_order_limit",
     "typeId": 7
    },
    {
     "name": "base_buy_order_limit",
     "typeId": 7
    },
    {
     "name": "order_matcher",
     "typeId": 16
    },
    {
     "name": "trade_size",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
     "name": "trade_price",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
     "name": "block_height",
     "typeId": "d7649d428b9ff33d188ecbf38a7e4d8fd167fa01b2e10fe9a8f9308e52f1d7cc"
    },
    {
     "name": "tx_id",
     "typeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
    },
    {
     "name": "order_seller",
     "typeId": 16
    },
    {
     "name": "order_buyer",
     "typeId": 16
    }
   ]
  },
  {
   "type": "struct events::WithdrawEvent",
   "metadataTypeId": 34,
   "components": [
    {
     "name": "amount",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
     "name": "asset",
     "typeId": 36
    },
    {
     "name": "user",
     "typeId": 16
    }
   ]
  },
  {
   "type": "struct std::address::Address",
   "metadataTypeId": 35,
   "components": [
    {
     "name": "bits",
     "typeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
    }
   ]
  },
  {
   "type": "struct std::asset_id::AssetId",
   "metadataTypeId": 36,
   "components": [
    {
     "name": "bits",
     "typeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
    }
   ]
  },
  {
   "type": "struct std::contract_id::ContractId",
   "metadataTypeId": 37,
   "components": [
    {
     "name": "bits",
     "typeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
    }
   ]
  },
  {
   "type": "struct std::vec::RawVec",
   "metadataTypeId": 38,
   "components": [
    {
     "name": "ptr",
     "typeId": 20
    },
    {
     "name": "cap",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    }
   ],
   "typeParameters": [
    19
   ]
  },
  {
   "type": "struct std::vec::Vec",
   "metadataTypeId": 39,
   "components": [
    {
     "name": "buf",
     "typeId": 38,
     "typeArguments": [
      {
       "name": "",
       "typeId": 19
      }
     ]
    },
    {
     "name": "len",
     "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    }
   ],
   "typeParameters": [
    19
   ]
  }
 ],
 "functions": [
  {
   "inputs": [
    {
     "name": "order_id",
     "concreteTypeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
    }
   ],
   "name": "cancel_order",
   "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
   "attributes": [
    {
     "name": "doc-comment",
     "arguments": [
      " @notice Cancels an existing order with the specified order ID."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @param order_id The unique identifier of the order to be canceled."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @return None - The function does not return a value."
     ]
    },
    {
     "name": "storage",
     "arguments": [
      "read",
      "write"
     ]
    }
   ]
  },
  {
   "inputs": [],
   "name": "deposit",
   "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
   "attributes": [
    {
     "name": "doc-comment",
     "arguments": [
      " @notice Deposits a specified amount of an asset into the caller's account."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @notice The function requires that the sender sends a non-zero amount of the specified asset."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @param None - The function doesn't take any input parameters; it uses context information."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @return None - The function does not return a value."
     ]
    },
    {
     "name": "payable",
     "arguments": []
    },
    {
     "name": "storage",
     "arguments": [
      "read",
      "write"
     ]
    }
   ]
  },
  {
   "inputs": [
    {
     "name": "amount",
     "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
     "name": "order_type",
     "concreteTypeId": "87d371fb295bf9d2ae8ded087940e8d0b097ddef40d8499ac650a22985df2682"
    },
    {
     "name": "limit_type",
     "concreteTypeId": "d9c35258b461d6cc17f23d4d7c184b37b99882e5c80d683a5826bcb9b2494e86"
    },
    {
     "name": "price",
     "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
     "name": "slippage",
     "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
     "name": "orders",
     "concreteTypeId": "32559685d0c9845f059bf9d472a0a38cf77d36c23dfcffe5489e86a65cdd9198"
    }
   ],
   "name": "fulfill_order_many",
   "output": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b",
   "attributes": [
    {
     "name": "doc-comment",
     "arguments": [
      " @notice Attempts to fulfill a single order by matching it against multiple orders from a provided list."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @dev This function creates a new order with the given parameters and iterates through the list of existing orders,"
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      "      attempting to match the new order with existing orders. It handles full and partial matches according to the specified limit type:"
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      "      - 'GTC' (Good-Til-Canceled): The order remains active until it is either fully filled or canceled."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      "      - 'IOC' (Immediate-Or-Cancel): The order can be partially filled immediately, and any unfilled portion is canceled."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      "      - 'FOK' (Fill-Or-Kill): The order must be fully filled immediately, or the entire transaction fails."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @param amount The amount of the asset to be fulfilled in the new order."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @param order_type The type of the order being fulfilled (e.g., buy or sell)."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @param limit_type The limit type for the new order: 'GTC', 'IOC', or 'FOK'."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @param price The price at which the new order is to be fulfilled."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @param slippage The maximum allowable slippage (as a percentage) for the price during the matching process."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @param orders A vector of order IDs representing the existing orders to match against the new order."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @return b256 The unique identifier of the newly created order. If the order is partially matched and canceled (in the case of 'IOC'), the ID corresponds to the canceled order."
     ]
    },
    {
     "name": "payable",
     "arguments": []
    },
    {
     "name": "storage",
     "arguments": [
      "read",
      "write"
     ]
    }
   ]
  },
  {
   "inputs": [
    {
     "name": "orders",
     "concreteTypeId": "32559685d0c9845f059bf9d472a0a38cf77d36c23dfcffe5489e86a65cdd9198"
    }
   ],
   "name": "match_order_many",
   "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
   "attributes": [
    {
     "name": "doc-comment",
     "arguments": [
      " @notice Attempts to match multiple orders provided in a list."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @param orders A vector containing the unique identifiers of the orders to be matched."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @return None - The function does not return a value."
     ]
    },
    {
     "name": "storage",
     "arguments": [
      "read",
      "write"
     ]
    }
   ]
  },
  {
   "inputs": [
    {
     "name": "order0_id",
     "concreteTypeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
    },
    {
     "name": "order1_id",
     "concreteTypeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
    }
   ],
   "name": "match_order_pair",
   "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
   "attributes": [
    {
     "name": "doc-comment",
     "arguments": [
      " @notice Matches two orders identified by their respective order IDs."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @param order0_id The unique identifier of the first order to be matched."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @param order1_id The unique identifier of the second order to be matched."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @return None - The function does not return a value."
     ]
    },
    {
     "name": "storage",
     "arguments": [
      "read",
      "write"
     ]
    }
   ]
  },
  {
   "inputs": [
    {
     "name": "amount",
     "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
     "name": "order_type",
     "concreteTypeId": "87d371fb295bf9d2ae8ded087940e8d0b097ddef40d8499ac650a22985df2682"
    },
    {
     "name": "price",
     "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    }
   ],
   "name": "open_order",
   "output": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b",
   "attributes": [
    {
     "name": "doc-comment",
     "arguments": [
      " @notice Opens a new order with a specified amount, order type, and price."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @param amount The amount of the asset to be used in the order."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @param order_type The type of the order being created (e.g., buy or sell)."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @param price The price at which the order should be placed."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @return b256 The unique identifier of the newly opened order."
     ]
    },
    {
     "name": "storage",
     "arguments": [
      "read",
      "write"
     ]
    }
   ]
  },
  {
   "inputs": [
    {
     "name": "epoch",
     "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
     "name": "epoch_duration",
     "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    }
   ],
   "name": "set_epoch",
   "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
   "attributes": [
    {
     "name": "doc-comment",
     "arguments": [
      " @notice Sets the current epoch and its duration."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @dev This function allows the contract owner to set a new epoch and its duration."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      "      It ensures that the new epoch is not in the past and that the epoch plus its duration extends beyond the current time."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      "      The function is restricted to the contract owner and logs an event after the epoch is set."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @param epoch The new epoch value to be set. Must be greater than or equal to the current epoch."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @param epoch_duration The duration of the epoch in seconds. The epoch plus its duration must extend beyond the current time."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @return None - The function does not return a value."
     ]
    },
    {
     "name": "storage",
     "arguments": [
      "write"
     ]
    }
   ]
  },
  {
   "inputs": [
    {
     "name": "amount",
     "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    }
   ],
   "name": "set_matcher_fee",
   "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
   "attributes": [
    {
     "name": "doc-comment",
     "arguments": [
      " @notice Sets the matcher fee to a specified amount."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @dev This function allows the contract owner to update the matcher fee."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      "      It checks that the new fee amount is different from the current one to avoid redundant updates."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      "      The function is restricted to the contract owner and logs an event after the matcher fee is set."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @param amount The new matcher fee amount to be set. It must be different from the current matcher fee."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @return None - The function does not return a value."
     ]
    },
    {
     "name": "storage",
     "arguments": [
      "read",
      "write"
     ]
    }
   ]
  },
  {
   "inputs": [
    {
     "name": "protocol_fee",
     "concreteTypeId": "4b03eb3d5d8751745804ec649d33055ca43456407d3991177f51a1397cd4da50"
    }
   ],
   "name": "set_protocol_fee",
   "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
   "attributes": [
    {
     "name": "doc-comment",
     "arguments": [
      " @notice Sets the protocol fees based on volume thresholds."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @dev This function allows the contract owner to set a list of protocol fees."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      "      It ensures that the first fee in the list has a volume threshold of zero and that the fees are sorted by volume threshold."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      "      The function is restricted to the contract owner and logs an event after the protocol fees are set."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @param protocol_fee A vector of 'ProtocolFee' structures that define the fee rates and their corresponding volume thresholds."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      "                     The first element must have a volume threshold of zero, and the list must be sorted by volume threshold."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @return None - The function does not return a value."
     ]
    },
    {
     "name": "storage",
     "arguments": [
      "write"
     ]
    }
   ]
  },
  {
   "inputs": [
    {
     "name": "amount",
     "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
     "name": "asset_type",
     "concreteTypeId": "4c4bcee5a492c5113714e96c87704a3af9b8bd766ce5da2ca716a6564da06ba3"
    }
   ],
   "name": "withdraw",
   "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
   "attributes": [
    {
     "name": "doc-comment",
     "arguments": [
      " @notice Withdraws a specified amount of a given asset from the caller's account."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @param amount The amount of the asset to be withdrawn. Must be greater than zero."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @param asset_type The type of the asset to be withdrawn."
     ]
    },
    {
     "name": "doc-comment",
     "arguments": [
      " @return None - The function does not return a value."
     ]
    },
    {
     "name": "storage",
     "arguments": [
      "read",
      "write"
     ]
    }
   ]
  },
  {
   "inputs": [
    {
     "name": "user",
     "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335"
    }
   ],
   "name": "account",
   "output": "10410fea5a6cba4a6b6079f9d804c0daf23980a360d009048ecb36118036c28e",
   "attributes": [
    {
     "name": "storage",
     "arguments": [
      "read"
     ]
    }
   ]
  },
  {
   "inputs": [],
   "name": "config",
   "output": "2af57fa7b0f9eb46500ad6f44107b87602c8b010f49ac4c18ebef66289467acb",
   "attributes": null
  },
  {
   "inputs": [],
   "name": "get_epoch",
   "output": "41bd1a98f0a59642d8f824c805b798a5f268d1f7d05808eb05c4189c493f1be0",
   "attributes": [
    {
     "name": "storage",
     "arguments": [
      "read"
     ]
    }
   ]
  },
  {
   "inputs": [],
   "name": "matcher_fee",
   "output": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
   "attributes": [
    {
     "name": "storage",
     "arguments": [
      "read"
     ]
    }
   ]
  },
  {
   "inputs": [
    {
     "name": "order",
     "concreteTypeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
    }
   ],
   "name": "order",
   "output": "af7345d115f618be19cd709b6734bdd5fd52bb0c27617a74a9564e4cea947d01",
   "attributes": [
    {
     "name": "storage",
     "arguments": [
      "read"
     ]
    }
   ]
  },
  {
   "inputs": [
    {
     "name": "order_id",
     "concreteTypeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
    }
   ],
   "name": "order_change_info",
   "output": "742fbfc9dbc675c4bb942c1c3d87581f5da5c5a8b0fc21e0d1f8d873328d5e5a",
   "attributes": [
    {
     "name": "storage",
     "arguments": [
      "read"
     ]
    }
   ]
  },
  {
   "inputs": [
    {
     "name": "order_type",
     "concreteTypeId": "87d371fb295bf9d2ae8ded087940e8d0b097ddef40d8499ac650a22985df2682"
    },
    {
     "name": "owner",
     "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335"
    },
    {
     "name": "price",
     "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
     "name": "block_height",
     "concreteTypeId": "d7649d428b9ff33d188ecbf38a7e4d8fd167fa01b2e10fe9a8f9308e52f1d7cc"
    },
    {
     "name": "order_height",
     "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    }
   ],
   "name": "order_id",
   "output": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b",
   "attributes": null
  },
  {
   "inputs": [],
   "name": "protocol_fee",
   "output": "4b03eb3d5d8751745804ec649d33055ca43456407d3991177f51a1397cd4da50",
   "attributes": [
    {
     "name": "storage",
     "arguments": [
      "read"
     ]
    }
   ]
  },
  {
   "inputs": [
    {
     "name": "user",
     "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335"
    }
   ],
   "name": "protocol_fee_user",
   "output": "41bd1a98f0a59642d8f824c805b798a5f268d1f7d05808eb05c4189c493f1be0",
   "attributes": [
    {
     "name": "storage",
     "arguments": [
      "read"
     ]
    }
   ]
  },
  {
   "inputs": [
    {
     "name": "amount",
     "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
     "name": "user",
     "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335"
    }
   ],
   "name": "protocol_fee_user_amount",
   "output": "41bd1a98f0a59642d8f824c805b798a5f268d1f7d05808eb05c4189c493f1be0",
   "attributes": [
    {
     "name": "storage",
     "arguments": [
      "read"
     ]
    }
   ]
  },
  {
   "inputs": [
    {
     "name": "user",
     "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335"
    }
   ],
   "name": "user_orders",
   "output": "32559685d0c9845f059bf9d472a0a38cf77d36c23dfcffe5489e86a65cdd9198",
   "attributes": [
    {
     "name": "storage",
     "arguments": [
      "read"
     ]
    }
   ]
  }
 ],
 "loggedTypes": [
  {
   "logId": "5557842539076482339",
   "concreteTypeId": "4d216c57b3357523323f59401c7355785b41bdf832f6e1106272186b94797038"
  },
  {
   "logId": "999626799421532101",
   "concreteTypeId": "0ddf63471f7b27c54c55fd3d75fe37594fb1b07a496dba57eb8fc56497e9d9c1"
  },
  {
   "logId": "487470194140633944",
   "concreteTypeId": "06c3d78f1057db580eb36dc2fc04ebd7407f4a4e954417b6761844fe38ee1a5d"
  },
  {
   "logId": "15329379498675066312",
   "concreteTypeId": "d4bce56f7daed5c8d2b62c0f0745c18d9fdd0b2f0dafecf85ebdd9c7378b5c63"
  },
  {
   "logId": "14676650066558707344",
   "concreteTypeId": "cbadef79adf1e6906cac7404759d7d55a9eaa9f1e6d479ecbbfa76f727486081"
  },
  {
   "logId": "4038555509566971562",
   "concreteTypeId": "380bd4d6b96f9eaa3a3d8db8bb9753399443715fb3fd65460cc28d6ab4d3659b"
  },
  {
   "logId": "16169998749359270814",
   "concreteTypeId": "e0676030b211eb9ed3b9837fc852a3cf3b6533a31533dd3ab957e8b3f6e77dd3"
  },
  {
   "logId": "12590297951544646752",
   "concreteTypeId": "aeb9b947da259c606e2c25be1150e2150f609fe5f2ec593c9a7ebb771e4e7065"
  },
  {
   "logId": "7812135309850120461",
   "concreteTypeId": "6c6a47ac80e7110dd8666e169f0fffe2d1378df88cf8960bb9dfe14a84ac3495"
  },
  {
   "logId": "2271581833574730066",
   "concreteTypeId": "1f8647a46c73c952a719dd380c2aa8f67c2ba78a07c43225e26166d5d6b70886"
  },
  {
   "logId": "18305104039093136274",
   "concreteTypeId": "fe08cb2392b6eb92ee6b7868e2877ca0630f87f543acc63897f7d806229379d5"
  },
  {
   "logId": "5744192922338635869",
   "concreteTypeId": "4fb77907614eb05d769b487a16469bfaac5278323bc54bddccd790cc4e00428e"
  },
  {
   "logId": "15838754841496526215",
   "concreteTypeId": "dbce8f9c6be61d876835d7a0b5794cfc25fc3b171ba3748ec4c8f2e7ce426cf6"
  },
  {
   "logId": "649664855397936830",
   "concreteTypeId": "090412be710caebee4e019479841ea0100912819a3e1c52ba39b1faa7b778c83"
  },
  {
   "logId": "10772010129570911307",
   "concreteTypeId": "957dde23e9fbd44b1bada18eae8b84f6d868be2fe55b721ce24b54cdcdafda79"
  },
  {
   "logId": "10918704871079408520",
   "concreteTypeId": "9787083b0003f388ec6bf30609ff6a10c76fada67314a162841a445b07a17168"
  }
 ],
 "messagesTypes": [],
 "configurables": [
  {
   "name": "BASE_ASSET",
   "concreteTypeId": "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974",
   "offset": 88752
  },
  {
   "name": "BASE_ASSET_DECIMALS",
   "concreteTypeId": "d7649d428b9ff33d188ecbf38a7e4d8fd167fa01b2e10fe9a8f9308e52f1d7cc",
   "offset": 88784
  },
  {
   "name": "QUOTE_ASSET",
   "concreteTypeId": "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974",
   "offset": 88840
  },
  {
   "name": "QUOTE_ASSET_DECIMALS",
   "concreteTypeId": "d7649d428b9ff33d188ecbf38a7e4d8fd167fa01b2e10fe9a8f9308e52f1d7cc",
   "offset": 88872
  },
  {
   "name": "OWNER",
   "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335",
   "offset": 88792
  },
  {
   "name": "PRICE_DECIMALS",
   "concreteTypeId": "d7649d428b9ff33d188ecbf38a7e4d8fd167fa01b2e10fe9a8f9308e52f1d7cc",
   "offset": 88832
  },
  {
   "name": "VERSION",
   "concreteTypeId": "d7649d428b9ff33d188ecbf38a7e4d8fd167fa01b2e10fe9a8f9308e52f1d7cc",
   "offset": 88880
  }
 ]
}