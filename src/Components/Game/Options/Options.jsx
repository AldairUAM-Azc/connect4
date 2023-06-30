import logo from "../../../assets/images/logo.svg"

const Options = () => {
  return (
    <div className="options">
      <button className="button">MENU</button>
      <img className="logo" src={logo} alt="Logo" />
      <button className="button">RESTART</button>
    </div>
  )
}

export default Options;