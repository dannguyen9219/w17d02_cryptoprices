import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function Price(props) {
    const apiKey = "F7FC3B47-730E-433F-BA23-AC2549C1B8B0";
    const params = useParams()
    const symbol = params.symbol
    const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;
    const [coin, setCoin] = useState(null)

    const getCoin = async () => {
        try{
            const response = await fetch(url);
            const data = await response.json();
            setCoin(data);
        }   catch(err) {
            console.error(err)
        }
    };

    useEffect(() => {
        getCoin()
    }, []); // Don't do infinite loops - w17d02 @ 3:43

    const loaded = () => {
        return (
            <div>
                <h1>
                {coin.asset_id_base}/{coin.asset_id_quote}
                </h1>
                <h2>{coin.rate}</h2>
            </div>
        )
    };

    const loading = () => {
        return <h1>Loading...</h1>
    };

    return coin && coin.rate ? loaded() : loading()
};

