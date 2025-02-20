/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface UserOperationLibInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "PAYMASTER_DATA_OFFSET"
      | "PAYMASTER_POSTOP_GAS_OFFSET"
      | "PAYMASTER_VALIDATION_GAS_OFFSET"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "PAYMASTER_DATA_OFFSET",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PAYMASTER_POSTOP_GAS_OFFSET",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PAYMASTER_VALIDATION_GAS_OFFSET",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "PAYMASTER_DATA_OFFSET",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PAYMASTER_POSTOP_GAS_OFFSET",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PAYMASTER_VALIDATION_GAS_OFFSET",
    data: BytesLike
  ): Result;
}

export interface UserOperationLib extends BaseContract {
  connect(runner?: ContractRunner | null): UserOperationLib;
  waitForDeployment(): Promise<this>;

  interface: UserOperationLibInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  PAYMASTER_DATA_OFFSET: TypedContractMethod<[], [bigint], "view">;

  PAYMASTER_POSTOP_GAS_OFFSET: TypedContractMethod<[], [bigint], "view">;

  PAYMASTER_VALIDATION_GAS_OFFSET: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "PAYMASTER_DATA_OFFSET"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "PAYMASTER_POSTOP_GAS_OFFSET"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "PAYMASTER_VALIDATION_GAS_OFFSET"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}
