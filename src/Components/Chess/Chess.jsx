import '../../css/chess.css';
import { Link } from 'react-router-dom'; 

const Chess = () => {

    return (
            <div className="chess-section">
                <h1 className="chess-heading">Chess</h1>
                <p className="chess-paragraph-first">A beautiful, mind-challenging game. Chess has always been an instant classic. From risky gambits to total domination, Chess really makes you think outside-the-box. It's one of my favourite games to play during my spare time. 
                    Below are a few games I've compiled over the years. For more information about my Chess Profile:</p> <Link exact to="/lichess"><a style={{color: "green"}} href="somewhere">Click Here</a></Link>
                <div className="upper-row row">
                    <div className="chess-row col-lg-6 col-md-12 col-sm-12">
                        <h5 className="chess-title">Knight's Signature: Smothered Mate</h5>
                        <p className="chess-paragraph">A rare checkmating sequence. A sneaky double check and a queen sac "smothers" the king and a lone knight wins the game!</p>
                            <video className="chess-video" width="370" height="290" controls>
                                <source src={require("../../assets/video/knight.mp4").default} alt="Not Found" type="video/mp4" />
                            </video>
                    </div>
                    <div className="chess-row chess-row-second col-lg-6 col-md-12 col-sm-12">
                        <h5 className="chess-title">A Queen Sac for the Win</h5>
                        <p className="chess-paragraph">Often times, it matters how well your pieces are positioned, not your lead in material. An "opera" mate is hidden, can you spot it?</p>
                            <video className="chess-video" width="370" height="290" controls>
                                <source src={require("../../assets/video/BigComeback.mp4").default} alt="Not Found" type="video/mp4" />
                            </video>
                    </div>
                    <div className="chess-row chess-row-last col-lg-12 col-md-12 col-sm-12">
                        <h5 className="chess-title">Every Little Bit Helps</h5>
                        <p className="chess-paragraph">This game reminds me of race against time. Even the smallest of pieces (pawns) can be very helpful! Again, positioning is key :) </p>
                            <video className="chess-video" width="370" height="290" controls>
                                <source src={require("../../assets/video/KnightWin.mp4").default} alt="Not Found" type="video/mp4" />
                            </video>
                    </div>   
                </div>      
            </div>
    )
}

export default Chess;