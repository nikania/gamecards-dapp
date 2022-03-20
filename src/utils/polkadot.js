// Import
import { ApiPromise, WsProvider } from '@polkadot/api';

// Construct
const wsProvider = new WsProvider('wss://rpc.polkadot.io');
const connect = async () => {
    const api = await ApiPromise.create({ provider: wsProvider });
    return api;
} 

export default connect;