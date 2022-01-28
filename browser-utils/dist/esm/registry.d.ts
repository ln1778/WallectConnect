import { IMobileRegistryEntry, IAppRegistry, IAppEntry } from "./../../../types";
export declare function getWalletRegistryUrl(): string;
export declare function getDappRegistryUrl(): string;
export declare function getAppLogoUrl(id: any): string;
export declare function formatMobileRegistryEntry(entry: IAppEntry, platform?: "mobile" | "desktop"): IMobileRegistryEntry;
export declare function formatMobileRegistry(registry: IAppRegistry, platform?: "mobile" | "desktop"): IMobileRegistryEntry[];
//# sourceMappingURL=registry.d.ts.map