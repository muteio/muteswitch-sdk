import { Provider } from '@ethersproject/providers';
import { Multicall } from 'ethereum-multicall';
export declare class CustomMulticall extends Multicall {
    constructor(ethersProvider: Provider, multicallCustomContractAddress?: string | undefined);
}
