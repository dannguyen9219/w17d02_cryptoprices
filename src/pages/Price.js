import { useState, useEffect } from "react"; // Must start loving useState
import { useParams } from "react-router-dom"; // Utilized parameters that are stored in our App.js (symbol)


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
    }, []); // When using useEffect, you always have to have a callback function. Also, the second argument is an empty array. What would go inside that array would be different state variables that we want to listen to change it. If the array is empty, it's going to run when the component first mounts. If you have other state variables inside the array, anytime that state variable changed it would go ahead and trigger the callback again. If you have State variables in there, it will listen to when that changes, and then it triggers the callback function. This will make an infinite loop.//

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
// Here we are using a hook called useEffect - instead of making the calls happen because you have to press a button, what useEffect is going to do is make the API call happen whenver the component mounts. When the component mounts, then we'll make the API call immediately (calling to the API URL to grab data). We want to make the API call immediately as soon as the user reaches that page. //
// The params variable allows us to use the parameter that will be in the URL (symbol). We're using the hook called useParams(). //
// The symbol variable now will grab the useParams.symbol //
// You need to use State to hold the coin data - remember, if data will change by user, you would need the setState parameter too. //
// getCoin function - This is the main function to get coins, we're going to await for oursevles to fetch the URL and then we're going to take that fetch data that we stored inside the response. Then we're going to make a new variable called data that's going to take that string of information that we just retrieved from a database and turn it into a proper JS object that we can use inside of our code. Then we're going to set the coin to that data. 
// useEffect will run whatever is in its callback function happen whenever the component mounts to the screen. So when we first show price, the price component is going to immediately make that API request and show that data. When somebody routes to that component, we want to immediately show you all the information for that coin, etc.
// loaded function - Return the coin that we requested, but it has an asset ID base and asset ID quote
// loading function - in case it takes a while to fetch the data