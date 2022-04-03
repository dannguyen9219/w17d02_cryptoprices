import { Link } from "react-router-dom"; // Import Link so that you don't need to use anchor tags

export default function Nav(props) {
    return(
        <div className="nav">
            <Link to="/">
                <div>Crypto Prices</div>
            </Link>
            <Link to="/currencies">
                <div>Currencies</div>
            </Link>
        </div>
    )
};
// We don't want to use regualr anchor tags because the browser will load the page by default
// The Link tags will hack into the History API to just go ahead and change a little bit of history and what you want to see inside //
// These Link tags act just like anchor tags underneath the hood, they just have a special function attached to them. But when you want to style the tags, you can style it using .nav > a in CSS //