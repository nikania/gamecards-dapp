import { useContext, useEffect, useState } from "react";
import usePolkadot from "../hooks/usePolkadot";

const Cards = () => {
    const { previousCardId, cardRegistry, console_info } = usePolkadot();
    const [cardId, setCardId] = useState(0);
    const [cards, setCards] = useState([]);

    useEffect(
    () => {
        (async () => {
            const id = await previousCardId();
            setCardId(id);
            console.log("🚀 ~ file: Cards.jsx ~ line 16 ~ previousCardId ~ id", id)
            console.log("🚀 ~ file: Cards.jsx ~ line 16 ~ previousCardId ~ id", id)
            for (let i = previousCardId; i > 0; i--) {
                cardRegistry(i).then(card => {
                    setCards([...cards, card]);
                });
            }
        })();
    }, [previousCardId, cardRegistry]);

    return(
        <div>
            <div>Cards</div>
            {cards.map((card) =>{
                <p>{card}</p>
            })}
        </div>
       
    )
};

export default Cards;