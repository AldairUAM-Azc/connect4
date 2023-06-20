import logo from "../../assets/images/logo.svg"
import "./Game.css"
function Game() {
    return (
        <section className="game">
            <div className="options">
                <button className="button">MENU</button>
                <img className="logo" src={logo} alt="Logo" />
                <button className="button">RESTART</button>
            </div>
        </section>
    );
}

export default Game;