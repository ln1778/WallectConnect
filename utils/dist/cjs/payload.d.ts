import { IJsonRpcResponseSuccess, IJsonRpcResponseError, IJsonRpcErrorMessage } from "./../../../core";
export declare function promisify(originalFn: (...args: any[]) => void, thisArg?: any): (...callArgs: any[]) => Promise<IJsonRpcResponseSuccess | IJsonRpcResponseError>;
export declare function formatRpcError(error: Partial<IJsonRpcErrorMessage>): {
    code: number;
    message: string;
};
//# sourceMappingURL=payload.d.ts.map