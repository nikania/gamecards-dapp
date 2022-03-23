import { useContext } from "react";

const Cards = () => {
    // const { polkadotState, dispatch } = useContext(store);
    // const { api, injector} = polkadotState;

    // console.log(api.genesisHash.toHex());
    // console.log(api.consts.babe.epochDuration.toNumber());
    // let query = api.query;
    // let card_id = api.query.gamecards.previousCardId();
    // let cards = [];
    // for (let i = 0; i >= 0; i--) {
    //     cards = [...cards, api.query.gamecards.cardRegistry(i)];
    // }

    return(
        <div>
            <div>Cards</div>
            {/* <p>{api.consts.babe.epochDuration.toNumber()}</p>
            <p>{card_id}</p>
            <p>{api.query}</p>
           <p>{cards}</p> */}
        </div>
       
    )
};

export default Cards;