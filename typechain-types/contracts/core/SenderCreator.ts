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

export interface SenderCreatorInterface extends Interface {
  getFunction(nameOrSignature: "createSender" | "entryPoint"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createSender",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "entryPoint",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "createSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "entryPoint", data: BytesLike): Result;
}

export interface SenderCreator extends BaseContract {
  connect(runner?: ContractRunner | null): SenderCreator;
  waitForDeployment(): Promise<this>;

  interface: SenderCreatorInterface;

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

  createSender: TypedContractMethod<
    [initCode: BytesLike],
    [string],
    "nonpayable"
  >;

  entryPoint: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "createSender"
  ): TypedContractMethod<[initCode: BytesLike], [string], "nonpayable">;
  getFunction(
    nameOrSignature: "entryPoint"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
