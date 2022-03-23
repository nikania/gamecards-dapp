import { useCallback, useContext } from 'react';
  
import { notification } from 'antd';
import dayjs from 'dayjs';
// eslint-disable-next-line import/no-extraneous-dependencies
import { u8aToString } from '@polkadot/util';
import useLocation from 'wouter/use-location';

import { store } from '../components/PolkadotProvider';


export default () => {
    const [, setLocation] = useLocation();
    const { polkadotState, dispatch } = useContext(store);
    const { api, injector} = polkadotState;

    console.log("enter    usePolkadot");


    const console_info = useCallback(
        () => {
            console.log(1111);
            console.log(api);
            console.log(api?.genesisHash?.toHex());
        }
    );

    const accountRegistry = useCallback(
        async (address) => {
        const data = await api
            .query
            .evercity
            .accountRegistry(address);

        const { roles: roleMask, identity } = data.toJSON();
        // const roles = getAvailableRoles(roleMask);

        // return { roles, identity };
        },
        [api],
    );

    const fetchBalance = useCallback(
        async () => {
        // const currentUserAddress = getCurrentUserAddress();

        // if (!api || !currentUserAddress) {
        //     return 0;
        // }

        // const data = await api
        //     .query
        //     .evercity
        //     .balanceEverUSD(currentUserAddress);

        // const balance = parseInt(data?.toBigInt());

        // return fromEverUSD(balance);
        },
        [api],
    );

    return {
        console_info,
        accountRegistry,
        fetchBalance,
    };
    };
