import { IConnector, IConnectorOpts, ISessionStatus, ISessionError, IJsonRpcResponseSuccess, IJsonRpcResponseError, IJsonRpcRequest, ITxData, IClientMeta, IUpdateChainParams, IRequestOptions, IInternalRequestOptions, ICreateSessionOptions } from "./../../../core";
declare class Connector implements IConnector {
    readonly protocol = "wc";
    readonly version = 1;
    private _bridge;
    private _key;
    private _clientId;
    private _clientMeta;
    private _peerId;
    private _peerMeta;
    private _handshakeId;
    private _handshakeTopic;
    private _connected;
    private _accounts;
    private _chainId;
    private _networkId;
    private _rpcUrl;
    private _cryptoLib;
    private _transport;
    private _eventManager;
    private _sessionStorage;
    private _qrcodeModal;
    private _qrcodeModalOptions;
    private readonly _signingMethods;
    constructor(opts: IConnectorOpts);
    set bridge(value: string);
    get bridge(): string;
    set key(value: string);
    get key(): string;
    set clientId(value: string);
    get clientId(): string;
    set peerId(value: string);
    get peerId(): string;
    set clientMeta(value: IClientMeta | null);
    get clientMeta(): IClientMeta | null;
    set peerMeta(value: IClientMeta | null);
    get peerMeta(): IClientMeta | null;
    set handshakeTopic(value: string);
    get handshakeTopic(): string;
    set handshakeId(value: number);
    get handshakeId(): number;
    get uri(): string;
    set uri(value: string);
    set chainId(value: number);
    get chainId(): number;
    set networkId(value: number);
    get networkId(): number;
    set accounts(value: string[]);
    get accounts(): string[];
    set rpcUrl(value: string);
    get rpcUrl(): string;
    set connected(value: boolean);
    get connected(): boolean;
    set pending(value: boolean);
    get pending(): boolean;
    get session(): {
        connected: boolean;
        accounts: string[];
        chainId: number;
        bridge: string;
        key: string;
        clientId: string;
        clientMeta: IClientMeta | null;
        peerId: string;
        peerMeta: IClientMeta | null;
        handshakeId: number;
        handshakeTopic: string;
    };
    set session(value: {
        connected: boolean;
        accounts: string[];
        chainId: number;
        bridge: string;
        key: string;
        clientId: string;
        clientMeta: IClientMeta | null;
        peerId: string;
        peerMeta: IClientMeta | null;
        handshakeId: number;
        handshakeTopic: string;
    });
    on(event: string, callback: (error: Error | null, payload: any | null) => void): void;
    off(event: string): void;
    createInstantRequest(instantRequest: Partial<IJsonRpcRequest>): Promise<void>;
    connect(opts?: ICreateSessionOptions): Promise<ISessionStatus>;
    createSession(opts?: ICreateSessionOptions): Promise<void>;
    approveSession(sessionStatus: ISessionStatus): void;
    rejectSession(sessionError?: ISessionError): void;
    updateSession(sessionStatus: ISessionStatus): void;
    killSession(sessionError?: ISessionError): Promise<void>;
    sendTransaction(tx: ITxData): Promise<any>;
    signTransaction(tx: ITxData): Promise<any>;
    signMessage(params: any[]): Promise<any>;
    signPersonalMessage(params: any[]): Promise<any>;
    signTypedData(params: any[]): Promise<any>;
    updateChain(chainParams: IUpdateChainParams): Promise<any>;
    unsafeSend(request: IJsonRpcRequest, options?: IRequestOptions): Promise<IJsonRpcResponseSuccess | IJsonRpcResponseError>;
    sendCustomRequest(request: Partial<IJsonRpcRequest>, options?: IRequestOptions): Promise<any>;
    approveRequest(response: Partial<IJsonRpcResponseSuccess>): void;
    rejectRequest(response: Partial<IJsonRpcResponseError>): void;
    transportClose(): void;
    protected _sendRequest(request: Partial<IJsonRpcRequest>, options?: Partial<IInternalRequestOptions>): Promise<void>;
    protected _sendResponse(response: IJsonRpcResponseSuccess | IJsonRpcResponseError): Promise<void>;
    protected _sendSessionRequest(request: IJsonRpcRequest, errorMsg: string, options?: IInternalRequestOptions): Promise<void>;
    protected _sendCallRequest(request: IJsonRpcRequest, options?: IRequestOptions): Promise<any>;
    protected _formatRequest(request: Partial<IJsonRpcRequest>): IJsonRpcRequest;
    protected _formatResponse(response: Partial<IJsonRpcResponseSuccess | IJsonRpcResponseError>): IJsonRpcResponseSuccess | IJsonRpcResponseError;
    private _handleSessionDisconnect;
    private _handleSessionResponse;
    private _handleIncomingMessages;
    private _subscribeToSessionRequest;
    private _subscribeToResponse;
    private _subscribeToSessionResponse;
    private _subscribeToCallResponse;
    private _subscribeToInternalEvents;
    private _initTransport;
    private _formatUri;
    private _parseUri;
    private _generateKey;
    private _encrypt;
    private _decrypt;
    private _getStorageSession;
    private _setStorageSession;
    private _removeStorageSession;
    private _manageStorageSession;
    private _registerPushServer;
}
export default Connector;
//# sourceMappingURL=index.d.ts.map