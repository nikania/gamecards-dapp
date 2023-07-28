import { useCallback, useContext } from 'react';
import { notification } from 'antd';
import dayjs from 'dayjs';
// eslint-disable-next-line import/no-extraneous-dependencies
import { u8aToString } from '@polkadot/util';
import useLocation from 'wouter/use-location';
import { store } from '../components/PolkadotProvider';
import {getCurrentUserAddress} from '../utils/storage';

export default () => {
    const [, setLocation] = useLocation();
    const { polkadotState, dispatch } = useContext(store);
    const { api, injector} = polkadotState;

    const console_info = useCallback(
        () => {
            console.log(1111);
            console.log(api.query);
            console.log(api.query.gamecards);
            console.log(api?.genesisHash?.toHex());
        });

    const cardRegistry = useCallback(
        async (cardId) => {
            const data = await api.query.gamecards.cardRegistry(cardId);
            return data;
        }, [api]);

    const cardOwners = useCallback(
        async (accountId) => {
            const data = await api.query.gamecards.cardOwners(accountId);
            return data;
        }, [api]);

    const cardsForSale = useCallback(
        async (cardId) => {
            const data = await api.query.gamecards.cardsForSale(cardId);
            return data.toJSON();
        }, [api]);
    
    const previousCardId = useCallback(
        async () => {
        //    console.log("🚀 ~ file: usePolkadot.jsx ~ line 41 ~ useCallback")
            const data = await api.query.gamecards.previousCardId();
            console.log("🚀 ~ file: usePolkadot.jsx ~ line 42 ~ data", data.toNumber())
            
            return data.toNumber();
        }, [api]);

    const setCreator = useCallback(
        async (accountId) => {
            const currentUserAddress = getCurrentUserAddress();
            try{
                const tx = await api.tx.gamecards.setCreator(accountId)
                .signAndSend(currentUserAddress);
            } catch(error) {

            }
        }, [api]
    )

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
        [api],);

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
        [api],);

    return {
        cardRegistry,
        cardOwners,
        cardsForSale,
        previousCardId,
        console_info,
        accountRegistry,
        fetchBalance,
    };
    };
