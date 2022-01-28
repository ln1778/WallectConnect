import { NetworkEvent, INetworkMonitor } from "./../../../core";
declare class NetworkMonitor implements INetworkMonitor {
    private _eventEmitters;
    constructor();
    on(event: NetworkEvent, callback: () => void): void;
    trigger(event: NetworkEvent): void;
}
export default NetworkMonitor;
//# sourceMappingURL=network.d.ts.map