import "./header.scss";
import logo from "../../logo.svg";

export const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} />
    </div>
  );
};
