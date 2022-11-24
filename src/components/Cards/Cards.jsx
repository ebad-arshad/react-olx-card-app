import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Cards.css';
import { query, onSnapshot, db, collection } from '../../Firebase/Firebase';

const Cards = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {

        const q = query(collection(db, "cards"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setCards([]);
            querySnapshot.forEach((doc) => {
                setCards(currElem => {
                    return [...currElem, doc.data()]
                })
            });
        });

    }, [])

    return (
        <div className="Cards">
            {cards.map((v, i) => (
                <Card key={i} {...v} />
            ))}
        </div>
    )
}

export default Cards;