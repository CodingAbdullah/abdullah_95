import '../../css/statuscard.css';

const StatusCard = (props) => {
    const colorValue = props.status === true ? "green" : "red";

    return (
        <div className="card" style={{padding: "1.0rem", borderRadius: "1.5rem"}}>
            <h4>Profile</h4>
            <div className="card-body">
                <div className="row">
                    <h5 className="card-info">Username: {props.username}</h5>
                </div>
                <div className="row">
                    <h5 className="card-info">Status: </h5>
                    <h5 style={{color: colorValue}}>{props.status === true ? "Online" : "Offline"}</h5>
                </div>
            </div>
        </div>
    )
}

export default StatusCard;