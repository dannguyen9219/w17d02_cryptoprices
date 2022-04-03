import { Link } from "react-router-dom";

export default function Currencies(props) {
    const currencies = [
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Litecoin", symbol: "LTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Ethereum Classic", symbol: "ETC" },
    { name: "Stellar Lumens", symbol: "XLM" },
    { name: "Dash", symbol: "DASH" },
    { name: "Ripple", symbol: "XRP" },
    { name: "Zcash", symbol: "ZEC" },
    ];

    return (
        <div className="currencies">
            {currencies.map((coin) => {
                const { name, symbol } = coin;

                return (
                    <Link to={`/price/${symbol}`}>
                        <h2>{name}</h2>
                    </Link>
                )
            })}
        </div>
    )
};
// We have created a static array - for more production ready apps, we will have connected to a database //
// We will use map to loop over that array of currency, each coin in the currencies will grab name and symbol
// Each time we're going to return a Link tag - then route to the dynamic symbol - once click, it will send you to the show page/price page of the symbol
