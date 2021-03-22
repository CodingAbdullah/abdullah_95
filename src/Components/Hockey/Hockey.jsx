import '../../css/hockey.css';

const Hockey = () => {

    return (
        <div className="hockey-section">
            <h1 className="hockey-heading">Hockey</h1>
            <p className="hockey-paragraph">You know what they say, your a true Canadian if you love hockey! Well, I'm a big fan of it and love cheering on the beloved home town, Toronto Maple Leafs! Never easy being a Leafs fan, but with a young promising core I believe the Leafs will win the Stanley Cup, God willing. </p>
            <p className="hockey-paragraph">The night when the Leafs' captain raises the cup and with chants of "No more '67!". That will be an iconic moment to remember! :)</p>
            <img className="toronto-celly-image" src={require("../../assets/images/celly.png").default} height="300" width="400" alt="Not available" />
        </div>
    )
}

export default Hockey;