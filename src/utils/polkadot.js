import { ApiPromise, WsProvider } from '@polkadot/api';
import types from './types.json';

const wsProvider = new WsProvider('ws://127.0.0.1:9944');
wsProvider.on('disconnected', () => {
  console.warn('Provider disconnected. Reconnecting...');
});

wsProvider.on('error', (error) => {
  console.error('Provider error: ', error);
});

const connect = async () => ApiPromise.create({
  provider: wsProvider,
  types: types,
});

export default connect;